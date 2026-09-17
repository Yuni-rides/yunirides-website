declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export async function getRecaptchaToken(action: string): Promise<string> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}

export async function verifyRecaptcha(
  token: string,
  expectedAction: string,
): Promise<boolean> {
  if (!token) {
    console.log("❌ No token received");
    return false;
  }
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  console.log("🔍 reCAPTCHA response:", data);

  const allowedHostnames = ["yunirides.com", "www.yunirides.com"];
  if (process.env.NODE_ENV !== "production") {
    allowedHostnames.push("localhost");
  }

  return (
    data.success &&
    data.score >= 0.5 &&
    data.action === expectedAction &&
    allowedHostnames.includes(data.hostname)
  );
}
