import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const rideId = params.id;
  return {
    title: `Ride #${rideId} - Yuni Rides`,
    other: {
      "apple-itunes-app": `app-id=6759739662, app-argument=https://www.yunirides.com/ride/${rideId}`,
    },
  };
}

export default function RidePage({ params }: Props) {
  const rideId = params.id;

  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1>Track Your Ride</h1>
      <p>Ride ID: {rideId}</p>
      <p>
        Open this link on your phone to view live details in the Yuni Rides app.
      </p>

      <a
        href="https://apps.apple.com/pk/app/id6759739662"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 24px",
          background: "#000",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Get the App
      </a>
    </div>
  );
}
