import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="container" style={{paddingTop:'20px', paddingBottom:'60px'}}>
      <Header />

      <section style={{padding:'90px 0'}}>
        <h1 style={{fontSize:'64px',maxWidth:'850px',lineHeight:'1.1'}}>Virginia's Premier Electronic Signature & Online Notary Platform</h1>
        <p style={{fontSize:'20px',maxWidth:'760px',opacity:.8}}>Professional secure online document processing designed for individuals, law firms, lenders, title agencies, and businesses requiring fast compliant remote approvals.</p>
        <div style={{marginTop:'30px',display:'flex',gap:'18px'}}>
          <Link href="/login" className="btn">Create Secure Account</Link>
          <Link href="/session">Request Appointment</Link>
        </div>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
        <div className="card"><h3>Customer Portal</h3><p>Upload files, verify identity, track appointments, and retrieve completed records.</p></div>
        <div className="card"><h3>E-Notary Workspace</h3><p>Manage clients, journals, approvals, digital credentials, and archived sessions.</p></div>
        <div className="card"><h3>Enterprise Security</h3><p>Encrypted delivery, signer verification workflow, and professional digital completion.</p></div>
      </section>

      <section style={{padding:'90px 0'}}>
        <h2>How It Works</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'18px'}}>
          {['Create Account','Upload Files','Attend Online Meeting','Receive Completed Copy'].map((step)=><div key={step} className="card">{step}</div>)}
        </div>
      </section>

      <section style={{padding:'40px 0'}}>
        <h2>Why Choose E-Sign Virginia</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginTop:'20px'}}>
          <div className="card">Fast turnaround for urgent legal and business documents.</div>
          <div className="card">Professional online workflow designed for convenience and trust.</div>
          <div className="card">Dedicated portals for both clients and commissioned service professionals.</div>
          <div className="card">Scalable platform architecture ready for business growth.</div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
