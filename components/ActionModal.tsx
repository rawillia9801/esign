'use client'

import { useState } from 'react'

export default function ActionModal(){
  const [open,setOpen] = useState(false)

  return (
    <div className="card">
      <h3>Secure Action Confirmation</h3>
      <p style={{opacity:.7}}>High-trust processing actions now trigger protected confirmation overlays.</p>
      <button className="btn" style={{border:'0',cursor:'pointer',marginTop:'12px'}} onClick={()=>setOpen(true)}>Launch Confirmation</button>
      {open && (
        <div style={{marginTop:'18px',padding:'22px',border:'1px solid rgba(216,179,90,.35)',borderRadius:'18px',background:'rgba(15,23,42,.9)'}}>
          <h3>Request Successfully Advanced</h3>
          <p>Encrypted workflow instructions have been dispatched and the transaction has moved to the next protected stage.</p>
          <button className="btn-secondary" style={{border:'0',cursor:'pointer',marginTop:'10px'}} onClick={()=>setOpen(false)}>Close Window</button>
        </div>
      )}
    </div>
  )
}
