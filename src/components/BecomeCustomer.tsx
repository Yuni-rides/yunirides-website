'use client'

import Image from 'next/image'
import { useState } from 'react'

// ── Shared input style ──
const inputStyle: React.CSSProperties = {
  width: '100%',
  paddingTop: '26px',
  paddingBottom: '8px',
  paddingLeft: '14px',
  paddingRight: '14px',
  borderRadius: '8px',
  border: '1px solid #DDE2FF',
  fontSize: '13px',
  outline: 'none',
  color: '#1A1A2E',
  backgroundColor: 'white',
  fontFamily: 'var(--font-body)',
  boxSizing: 'border-box',
}

// ── Floating label wrapper ──
function FloatLabel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <label style={{
        position: 'absolute',
        top: '8px',
        left: '14px',
        fontSize: '11px',
        color: '#8888AA',
        zIndex: 1,
        fontFamily: 'var(--font-body)',
        pointerEvents: 'none',
      }}>{label}</label>
      {children}
    </div>
  )
}

export default function BecomeCustomer() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    city: '',
    childFirstName: '',
    age: '',
    numberOfChildren: '',
    specialNeeds: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Backend connect hone pe yahan API call aayegi
    console.log('Form submitted:', form)
    alert('Thank you! We will contact you soon.')
  }

  return (
    <section style={{
      backgroundColor: 'var(--yuni-lavender-bg)',
      padding: '5rem 0',
    }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#E5EAFF',
            color: '#4A4A6A',
            padding: '7px 28px',
            borderRadius: '9999px',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
          }}>Become A Customer</span>
        </div>

        {/* Outer white card */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 4px 32px rgba(44,57,121,0.08)',
        }}>

          {/* TOP — Illustration + Text */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            padding: '2.5rem 2.5rem 2rem',
            gap: '2rem',
            borderBottom: '1px solid #EEF0FF',
          }}>
            {/* Illustration */}
            <div style={{ position: 'relative', height: '220px' }}>
              <Image
                src="/images/driver-illustration.png"
                alt="Yunirides driver with child"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>

            {/* Text */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                color: '#2C3979',
                lineHeight: 1.35,
                marginBottom: '1rem',
              }}>
                Technology meets care - We transport the future
              </h2>
              <p style={{
                fontSize: '12px',
                color: '#4A4A6A',
                lineHeight: 1.85,
                textAlign: 'justify',
                fontFamily: 'var(--font-body)',
              }}>
                At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust. Our dedicated team ensures every child&apos;s journey is secure, comfortable, and on time, making us a leader in child-focused transportation solution across the nation.
              </p>
            </div>
          </div>

          {/* BOTTOM — Form */}
          <div style={{ padding: '2rem 2.5rem 2.5rem' }}>

            {/* Form header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1.5rem',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#2C3979',
                  marginBottom: '4px',
                }}>Start Your Journey</h3>
                <p style={{
                  fontSize: '12px',
                  color: '#4A4A6A',
                  fontFamily: 'var(--font-body)',
                  maxWidth: '320px',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Join Yuni Rides and drive change with us! Earn great pay while making a meaningful impact in the lives of disabled children.
                </p>
              </div>
              <span style={{
                background: '#E5EAFF',
                color: '#4A4A6A',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                flexShrink: 0,
              }}>Parent / Guardian</span>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Row 1 — Full Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <FloatLabel label="Full Name">
                  <input name="fullName" type="text" value={form.fullName} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
                <FloatLabel label="Email">
                  <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
              </div>

              {/* Row 2 — Contact + City */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <FloatLabel label="Contact Number">
                  <input name="contactNumber" type="tel" value={form.contactNumber} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
                <FloatLabel label="Enter your city or town name.">
                  <input name="city" type="text" value={form.city} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
              </div>

              {/* Child Information heading with line */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1rem',
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#2C3979',
                  fontFamily: 'var(--font-heading)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>Child Information</p>
                <div style={{ flex: 1, height: '1px', background: '#E5EAFF' }} />
              </div>

              {/* Row 3 — Child name + Age */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <FloatLabel label="Child's First Name">
                  <input name="childFirstName" type="text" value={form.childFirstName} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
                <FloatLabel label="Age">
                  <input name="age" type="number" value={form.age} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
              </div>

              {/* Row 4 — Number of children (half width) */}
              <div style={{ marginBottom: '1rem', width: '50%' }}>
                <FloatLabel label="Number of Children Needing Transport">
                  <input name="numberOfChildren" type="number" value={form.numberOfChildren} onChange={handleChange} style={inputStyle} />
                </FloatLabel>
              </div>

              {/* Row 5 — Special needs (full width textarea) */}
              <div style={{ marginBottom: '1.5rem' }}>
                <FloatLabel label="Special Needs or Care Requirements (Optional)">
                  <textarea
                    name="specialNeeds"
                    value={form.specialNeeds}
                    onChange={handleChange}
                    rows={3}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      paddingTop: '28px',
                    }}
                  />
                </FloatLabel>
              </div>

              {/* Submit */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" style={{
                  backgroundColor: '#2C3979',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 36px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                }}>Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}