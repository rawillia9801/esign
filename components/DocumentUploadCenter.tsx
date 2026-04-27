'use client'

import { useState } from 'react'

export default function DocumentUploadCenter(){
  const [files,setFiles] = useState(['Warranty Deed.pdf','Power of Attorney.pdf'])
  const [review,setReview] = useState('AI review not started')

  function addDemoFile(){
    setFiles([...files, 'New Upload ' + (files.length + 1) + '.pdf'])
  }

  async function runAiReview(file:string){
    setReview('Claude reviewing ' + file + '...')
    const res = await fetch('/api/claude/review')
    const data = await res.json()
    setReview(data.result.configured ? 'Claude review complete for ' + file : 'Claude API key not configured yet')
  }

  return (
    <div className="card">
      <h3>Secure Document Upload Center</h3>
      <p style={{opacity:.7}}>Upload PDFs for online notarization, signature routing, Zoho Sign preparation, and Claude document review.</p>
      <div style={{border:'1px dashed rgba(216,179,90,.45)',borderRadius:'20px',padding:'28px',textAlign:'center',margin:'18px 0',background:'rgba(216,179,90,.05)'}}>
        <p>Drag and drop document files here</p>
        <button className="btn" style={{border:'0',cursor:'pointer'}} onClick={addDemoFile}>Add Demo Upload</button>
      </div>
      <p style={{color:'#d8b35a',fontWeight:700}}>{review}</p>
      <div style={{display:'grid',gap:'12px',marginTop:'16px'}}>
        {files.map(file=>(
          <div key={file} className="card" style={{boxShadow:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'12px',flexWrap:'wrap'}}>
            <div>
              <strong>{file}</strong>
              <div style={{opacity:.65,fontSize:'14px'}}>Pending Zoho Sign package preparation</div>
            </div>
            <button className="btn-secondary" style={{border:'0',cursor:'pointer'}} onClick={()=>runAiReview(file)}>Run Claude Review</button>
          </div>
        ))}
      </div>
    </div>
  )
}
