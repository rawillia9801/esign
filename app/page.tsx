import Link from 'next/link'

export default function Home() {
  return (
    <main className="container" style={{paddingTop:'40px', paddingBottom:'60px'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>E-Sign Virginia</h2>
        <div style={{display:'flex',gap:'16px'}}>
          <Link href="/login">Login</Link>
          <Link href="/session">Start Session</Link>
        </div>
      </nav>

      <section style={{padding:'90px 0'}}>
        <h1 style={{fontSize:'64px',maxWidth:'800px',lineHeight:'1.1'}}>Virginia's Trusted Remote Online Notary & Electronic Signature Platform</h1>
        <p style={{fontSize:'20px',maxWidth:'760px',opacity:.8}}>Securely upload, verify, meet with a commissioned Virginia electronic notary, and complete legally binding notarizations from anywhere.</p>
        <div style={{marginTop:'30px',display:'flex',gap:'18px'}}>
          <Link href="/login" className="btn">Create Account</Link>
          <Link href="/session">Book Notarization</Link>
        </div>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
        <div className="card"><h3>Customer Portal</h3><p>Upload documents, verify ID, track appointments, download notarized files.</p></div>
        <div className="card"><h3>E-Notary Workspace</h3><p>Manage signers, session journals, approvals, digital certificates, and completed acts.</p></div>
        <div className="card"><h3>Virginia Compliant</h3><p>Built for secure audio-video appearance, electronic seals, and tamper-resistant digital delivery.</p></div>
      </section>

      <section style={{padding:'90px 0'}}>
        <h2>How It Works</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'18px'}}>
          {['Upload Document','Verify Identity','Meet Live Online','Receive Notarized Copy'].map((step)=><div key={step} className="card">{step}</div>)}
        </div>
      </section>
    </main>
  )
}
