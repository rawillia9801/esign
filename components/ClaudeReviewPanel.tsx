'use client'

import { useState } from 'react'

export default function ClaudeReviewPanel(){
  const [status,setStatus] = useState('Idle')
  const [results,setResults] = useState<string[]>([])

  async function runReview(){
    setStatus('Claude reviewing document...')
    const res = await fetch('/api/claude/review')
    const data = await res.json()
    setResults(data.result.findings || [data.result.message])
    setStatus(data.result.configured ? 'Claude review complete' : 'Claude not configured')
  }

  return (
    <div className="card">
      <h3>Claude AI Legal Document Review</h3>
      <p style={{color:'#d8b35a'}}>{status}</p>
      <button className="btn" style={{border:'0',cursor:'pointer',marginTop:'10px'}} onClick={runReview}>Run AI Review</button>
      <div style={{marginTop:'16px'}}>
        {results.map((r)=><p key={r}>• {r}</p>)}
      </div>
    </div>
  )
}
