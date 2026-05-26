'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function DriverForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    city: '',
    vehicleType: '',
    yearsExperience: '',
    hasSSN: true,
    hasDrivingLicense: true,
    usedDrugs: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Driver form submitted:', form)
    alert('Thank you! We will contact you soon.')
  }

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
    boxSizing: 'border-box' as const,
  }

  const labelStyle: React.CSSProperties = {
    position: 'absolute' as const,
    top: '8px',
    left: '14px',
    fontSize: '11px',
    color: '#8888AA',
    fontFamily: 'var(--font-body)',
    pointerEvents: 'none' as const,
    zIndex: 1,
  }

  return (
    <section style={{
      backgroundColor: '#EFF2FF',
      padding: '4rem 1.5rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

    
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
          }}>Become Rider</span>
        </div>

   
        <div style={{
          background: 'white',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 4px 32px rgba(44,57,121,0.08)',
        }}>

        
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            padding: '2.5rem 2.5rem 2rem',
            gap: '2rem',
            borderBottom: '1px solid #EEF0FF',
          }}>
           
            <div style={{
              position: 'relative',
              height: '300px',
            }}>
              <Image
                src="/images/driver-illustration.png"
                alt="Yunirides driver"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left bottom' }}
              />
            </div>

           
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                color: '#2C3979',
                lineHeight: 1.35,
                marginBottom: '1rem',
              }}>
                Technology meets care - We transport the future
              </h2>
              <p style={{
                fontSize: '13px',
                color: '#4A4A6A',
                lineHeight: 1.85,
                textAlign: 'justify',
                fontFamily: 'var(--font-body)',
                margin: 0,
              }}>
                At Yuni Rides, we are committed to providing top-tier, dependable transportation services designed specifically for children. With a focus on safety, Care, and professionalism, we take pride in offering a service that families and communities can trust. Our dedicated team ensures every child&apos;s journey is secure, comfortable, and on time, making us a leader in child-focused transportation solution across the nation. Whether it&apos;s for school or a special appointment, Yuni Rides is here to serve with integrity and compassion.
              </p>
            </div>
          </div>

    
          <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#2C3979',
              marginBottom: '6px',
            }}>Start Your Journey</h3>
            <p style={{
              fontSize: '13px',
              color: '#4A4A6A',
              fontFamily: 'var(--font-body)',
              marginBottom: '1.5rem',
              maxWidth: '360px',
              lineHeight: 1.6,
            }}>
              Join Yuni Rides and drive change with us! Earn great pay while making a meaningful impact in the lives of disabled children.
            </p>

            <form onSubmit={handleSubmit}>
       
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ position: 'relative' }}>
                  <label style={labelStyle}>Full Name</label>
                  <input name="fullName" type="text" value={form.fullName} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ position: 'relative' }}>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

     
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ position: 'relative' }}>
                  <label style={labelStyle}>Contact Number</label>
                  <input name="contactNumber" type="tel" value={form.contactNumber} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ position: 'relative' }}>
                  <label style={labelStyle}>Enter your city or town name.</label>
                  <input name="city" type="text" value={form.city} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                  <label style={labelStyle}>What type of vehicle do you have?</label>
                  <input name="vehicleType" type="text" value={form.vehicleType} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ position: 'relative' }}>
                  <label style={labelStyle}>How many years of experience do you have?</label>
                  <input name="yearsExperience" type="number" value={form.yearsExperience} onChange={handleChange} style={inputStyle} />
                </div>
              </div>

              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                <div>
                  <p style={{ fontSize: '12px', color: '#4A4A6A', fontFamily: 'var(--font-body)', marginBottom: '10px' }}>
                    Do you have SSN or ITN ?
                  </p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <CheckBox checked={form.hasSSN === true} onChange={() => setForm({ ...form, hasSSN: true })} />
                    <CheckBox checked={form.hasSSN === false} onChange={() => setForm({ ...form, hasSSN: false })} />
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '12px', color: '#4A4A6A', fontFamily: 'var(--font-body)', marginBottom: '10px' }}>
                    Do you have a driving license?
                  </p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <CheckBox checked={form.hasDrivingLicense === true} onChange={() => setForm({ ...form, hasDrivingLicense: true })} />
                    <CheckBox checked={form.hasDrivingLicense === false} onChange={() => setForm({ ...form, hasDrivingLicense: false })} />
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: '12px', color: '#4A4A6A', fontFamily: 'var(--font-body)', marginBottom: '10px' }}>
                    Have you ever use any recreational drug before?
                  </p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <CheckBox checked={form.usedDrugs === false} onChange={() => setForm({ ...form, usedDrugs: false })} />
                    <CheckBox checked={form.usedDrugs === true} onChange={() => setForm({ ...form, usedDrugs: true })} />
                  </div>
                </div>
              </div>

           
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckBox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      style={{
        width: '32px', height: '32px',
        borderRadius: '6px',
        border: '1.5px solid #DDE2FF',
        backgroundColor: checked ? '#2C3979' : 'white',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {checked && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
  )
}