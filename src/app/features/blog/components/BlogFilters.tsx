'use client'

import { useState } from 'react'

const tabs = ['All', 'Press Release', 'Events', 'Technology', 'Marketing']

export default function BlogFilters() {
  const [active, setActive] = useState('All')

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            padding: '8px 20px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: active === tab ? 600 : 400,
            fontFamily: 'var(--font-body)',
            backgroundColor: active === tab ? '#E5EAFF' : 'transparent',
            color: active === tab ? '#2C3979' : '#6A6A8A',
            transition: 'all 0.2s ease',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}