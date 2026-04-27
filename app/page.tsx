import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="container luxury-shell" style={{paddingTop:'0', paddingBottom:'60px'}}>
      <Header />

      <section style={{padding:'90px 0 70px'}}>
        <div className="eyebrow">Virginia Trusted Remote Document Execution</div>
        <h1 className="hero-title">Elegant. Secure. Legally Trusted Electronic Signatures & Online Notary Services.</h1>
        <p className="hero-copy">A premium client-facing digital execution platform built for urgent legal filings, lender paperwork, business agreements, affidavits, title documents, and high-trust remote verification workflows.</p>
        <div style={{marginTop:'34px',display:'flex',gap:'14px',flexWrap:'wrap'}}>
          <Link href="/login" className="btn">Open Secure Portal</Link>
          <Link href="/session" className="btn-secondary">Book Priority Appointment</Link>
        </div>
      </section>

      <section className="grid-3">
        <div className="card"><div className="metric">24/7</div><h3>Online Availability</h3><p>Fast digital workflow submission for individuals, firms, lenders, and agencies.</p></div>
        <div className="card"><div className="metric">100%</div><h3>Encrypted Delivery</h3><p>Protected client data routing and premium document handling architecture.</p></div>
        <div className="card"><div className="metric">2 Portals</div><h3>Dual Workspace Design</h3><p>Dedicated customer and commissioned professional access environments.</p></div>
      </section>

      <section style={{padding:'90px 0'}}>
        <div className="eyebrow">How The Process Works</div>
        <h2 style={{fontSize:'42px'}}>Designed For Absolute Simplicity</h2>
        <div className="grid-4" style={{marginTop:'24px'}}>
          {['Create Secure Account','Upload Required Files','Attend Guided Online Meeting','Receive Completed Electronic Copy'].map((step)=><div key={step} className="card">{step}</div>)}
        </div>
      </section>

      <section className="grid-2">
        <div className="card">
          <div className="eyebrow">Customer Experience</div>
          <h2>Private Client Dashboard</h2>
          <p>Track submissions, manage appointments, upload records, verify credentials, and retrieve completed files from one secure location.</p>
        </div>
        <div className="card">
          <div className="eyebrow">Professional Workspace</div>
          <h2>Commissioned E-Notary Operations Center</h2>
          <p>Handle verification queues, transaction logs, digital seals, client archives, and completed processing records in an executive-grade portal.</p>
        </div>
      </section>

      <section style={{padding:'90px 0 40px'}}>
        <div className="card" style={{textAlign:'center',padding:'60px 30px'}}>
          <div className="eyebrow">Priority Processing Available</div>
          <h2 style={{fontSize:'46px',maxWidth:'800px',margin:'16px auto'}}>Need A High-Trust Legal Document Completed Quickly?</h2>
          <p className="hero-copy" style={{margin:'0 auto'}}>Open your secure account and begin the premium guided digital workflow in minutes.</p>
          <div style={{marginTop:'26px'}}><Link href="/login" className="btn">Begin Now</Link></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
