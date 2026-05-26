'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { question: '1. What states does Yuni Rides operate in?', answer: 'Yuni Rides currently operates in Washington state including cities like Seattle, Tacoma, Bellevue, Renton, and more. We are expanding rapidly across the U.S.' },
  { question: '2. How does Yuni Rides ensure the safety of my child?', answer: 'We conduct thorough background checks on all drivers, use real-time GPS tracking, and require regular vehicle inspections to ensure every ride is safe.' },
  { question: '3. Are your drivers trained to work with children?', answer: 'Yes! All our drivers are specially trained to work with children including those with special needs. They are compassionate, patient, and certified.' },
  { question: '4. Can I track my child\'s ride?', answer: 'Absolutely! Our app provides real-time GPS tracking so parents can monitor their child\'s ride from pickup to drop-off at all times.' },
  { question: '5. How can I book a ride with Yuni Rides?', answer: 'You can book a ride through our website by filling out the Start Your Journey form, or by calling us directly at 415-535-2155.' },
  { question: '6. What type of vehicles do you use?', answer: 'We use clean, well-maintained sedans, SUVs, and accessible vans equipped to accommodate children including those with special needs.' },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#FAF8F0', padding: '60px 40px 80px' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '460px 1fr',
        gap: '40px',
        alignItems: 'start',
      }}>

     
        <div style={{ position: 'relative', paddingTop: '20px' }}>

          <div style={{
            position: 'absolute', top: 0, left: '70px',
            width: '54px', height: '54px', borderRadius: '50%',
            backgroundColor: '#E5EAFF',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '26px', color: '#822C89', fontWeight: 700,
          }}>?</div>
   
          <div style={{
            position: 'absolute', top: '62px', left: '48px',
            fontSize: '16px', color: '#822C89', fontWeight: 700, opacity: 0.5,
          }}>?</div>
     
          <div style={{
            position: 'absolute', top: '82px', left: '80px',
            backgroundColor: 'white', borderRadius: '20px',
            padding: '6px 18px', fontSize: '14px', fontWeight: 600,
            color: '#2C3979', fontFamily: 'var(--font-heading)',
            boxShadow: '0 2px 8px rgba(44,57,121,0.1)',
          }}>FAQ</div>

          <div style={{
            position: 'relative',
           width: '440px',
           height: '500px',
           marginTop: '80px',
           marginLeft: '-20px',
          }}>
            <Image
              src="/images/faq-illustration.png"
              alt="FAQ"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </div>
        </div>

   
        <div style={{ paddingTop: '20px' }}>
    
          <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
            <FAQCard faq={faqs[0]} index={0} openIndex={openIndex} setOpenIndex={setOpenIndex} width="210px" />
            <div style={{ marginLeft: '30px' }}>
              <FAQCard faq={faqs[1]} index={1} openIndex={openIndex} setOpenIndex={setOpenIndex} width="230px" />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', paddingLeft: '60px' }}>
            <FAQCard faq={faqs[2]} index={2} openIndex={openIndex} setOpenIndex={setOpenIndex} width="220px" />
          </div>

        
          <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
            <FAQCard faq={faqs[3]} index={3} openIndex={openIndex} setOpenIndex={setOpenIndex} width="210px" />
            <div style={{ marginLeft: '20px' }}>
              <FAQCard faq={faqs[4]} index={4} openIndex={openIndex} setOpenIndex={setOpenIndex} width="220px" />
            </div>
          </div>

    
          <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: '30px' }}>
            <FAQCard faq={faqs[5]} index={5} openIndex={openIndex} setOpenIndex={setOpenIndex} width="210px" />
          </div>
        </div>

      </div>
    </section>
  )
}

function FAQCard({ faq, index, openIndex, setOpenIndex, width }: {
  faq: { question: string; answer: string }
  index: number
  openIndex: number | null
  setOpenIndex: (i: number | null) => void
  width: string
}) {
  const isOpen = openIndex === index
  return (
    <div style={{ width }}>
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        style={{
          width: '100%',
          backgroundColor: isOpen ? '#2C3979' : 'white',
          borderRadius: isOpen ? '14px 14px 0 0' : '14px',
          padding: '12px 14px',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '8px',
          textAlign: 'left',
          boxShadow: '0 2px 10px rgba(44,57,121,0.09)',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600,
          fontSize: '12px', color: isOpen ? 'white' : '#2C3979',
          flex: 1, lineHeight: 1.4,
        }}>{faq.question}</span>
        <div style={{
          width: '20px', height: '20px', borderRadius: '50%',
          backgroundColor: isOpen ? 'rgba(255,255,255,0.2)' : '#EFF2FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          {isOpen ? <Minus size={10} color="white" /> : <Plus size={10} color="#2C3979" />}
        </div>
      </button>
      {isOpen && (
        <div style={{
          backgroundColor: '#2C3979',
          borderRadius: '0 0 14px 14px',
          padding: '6px 14px 12px',
        }}>
          <p style={{
            fontSize: '11px', color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.75, fontFamily: 'var(--font-body)',
            margin: 0, textAlign: 'justify',
          }}>{faq.answer}</p>
        </div>
      )}
    </div>
  )
}