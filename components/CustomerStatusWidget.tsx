'use client'

import { useState } from 'react'

const stages = [
  'Document uploaded',
  'Identity verification pending',
  'Zoho Meeting scheduled',
  'Zoho Sign package sent',
  'Completed copy ready'
]

export default function CustomerStatusWidget(){
  const [index, setIndex] = useState(1)
  const current = stages[index]

  return (
    <div className="card">
      <h3>Live Request Status</h3>
      <p style={{color:'#d8b35a',fontWeight:700}}>ESV-22018: {current}</p>
      <div style={{display:'grid',gap:'10px',marginTop:'16px'}}>
        {stages.map((stage, i) => (
          <div key={stage} style={{opacity: i <= index ? 1 : .45}}>
            {i <= index ? '✓' : '○'} {stage}
          </div>
        ))}
      </div>
      <button className="btn" style={{border:'0',cursor:'pointer',marginTop:'18px'}} onClick={()=>setIndex(Math.min(index + 1, stages.length - 1))}>Refresh Status</button>
    </div>
  )
}
