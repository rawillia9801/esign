'use client'

import { useState } from 'react'

export default function WorkflowActionCard(){
  const [step, setStep] = useState('ready')

  function runAction(label:string){
    setStep(label)
    setTimeout(() => setStep(label + ' complete'), 1200)
  }

  return (
    <div className="card">
      <h3>Live Transaction Actions</h3>
      <p style={{color:'#d8b35a'}}>Status: {step}</p>
      <button className="btn-secondary" style={{border:'0',cursor:'pointer',marginRight:'8px',marginBottom:'10px'}} onClick={()=>runAction('Identity approval')}>Approve Identity</button>
      <button className="btn-secondary" style={{border:'0',cursor:'pointer',marginRight:'8px',marginBottom:'10px'}} onClick={()=>runAction('Zoho Meeting preparation')}>Prepare Meeting</button>
      <button className="btn-secondary" style={{border:'0',cursor:'pointer',marginRight:'8px',marginBottom:'10px'}} onClick={()=>runAction('Zoho Sign package')}>Send Sign Package</button>
      <button className="btn" style={{border:'0',cursor:'pointer',marginBottom:'10px'}} onClick={()=>runAction('Archive and finalization')}>Finalize</button>
    </div>
  )
}
