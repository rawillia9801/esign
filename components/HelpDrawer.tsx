'use client'

import { useState } from 'react'

export default function HelpDrawer(){
  const [open,setOpen] = useState(false)

  return (
    <>
      <button onClick={()=>setOpen(!open)} style={{position:'fixed',bottom:'24px',right:'24px',zIndex:40,border:'0',cursor:'pointer',padding:'14px 18px',borderRadius:'999px',background:'#d8b35a',fontWeight:800,color:'#0f172a'}}>Secure Help</button>
      {open && (
        <div style={{position:'fixed',bottom:'84px',right:'24px',width:'320px',zIndex:40}} className="card">
          <h3>Client Support Channel</h3>
          <p style={{opacity:.7}}>Need immediate assistance with file upload, identity review, payment, or session scheduling?</p>
          <textarea placeholder="Type your secure request..." style={{width:'100%',minHeight:'90px',marginTop:'12px',padding:'12px'}} />
          <button className="btn" style={{border:'0',cursor:'pointer',marginTop:'12px'}}>Send Secure Message</button>
        </div>
      )}
    </>
  )
}
