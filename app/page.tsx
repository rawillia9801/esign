import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="container luxury-shell" style={{paddingTop:'0', paddingBottom:'60px'}}>
      <Header />

      <section style={{padding:'90px 0 70px'}}>
        <div className="eyebrow">Virginia Online Notary & E-Signature Services</div>
        <h1 className="hero-title">Get Your Documents Signed, Notarized, and Completed Online — Quickly & Securely.</h1>
        <p className="hero-copy">From affidavits and power of attorney forms to real estate documents, lender paperwork, and business agreements, E-Sign Virginia makes the online signing and notarization process simple, secure, and convenient from anywhere.</p>
        <div style={{marginTop:'34px',display:'flex',gap:'14px',flexWrap:'wrap'}}>
          <Link href="/register" className="btn">Create Secure Account</Link>
          <Link href="/session" className="btn-secondary">Schedule Online Appointment</Link>
        </div>
      </section>

      <section className="grid-3">
        <div className="card"><div className="metric">24/7</div><h3>Online Requests</h3><p>Submit your document details anytime from your phone, tablet, or desktop.</p></div>
        <div className="card"><div className="metric">Fast</div><h3>Secure Processing</h3><p>Encrypted document handling and guided customer verification every step.</p></div>
        <div className="card"><div className="metric">Easy</div><h3>Remote Completion</h3><p>No travel, no waiting rooms, no complicated office scheduling.</p></div>
      </section>

      <section style={{padding:'60px 0 20px'}}>
        <div className="grid-2">
          <div className="card">
            <div className="eyebrow">Check Your Order Status</div>
            <h2>Track Your Document Request</h2>
            <input placeholder="Enter Order / Reference Number" style={{width:'100%',padding:'14px',marginBottom:'12px',marginTop:'16px'}} />
            <input placeholder="Email Address" style={{width:'100%',padding:'14px',marginBottom:'16px'}} />
            <Link href="/status" className="btn">Check Status</Link>
          </div>
          <div className="card">
            <div className="eyebrow">Documents We Commonly Process</div>
            <p>• Power of Attorney</p>
            <p>• Affidavits & Sworn Statements</p>
            <p>• Real Estate / Title Documents</p>
            <p>• Loan & Lender Packages</p>
            <p>• Business Agreements & Contracts</p>
            <p>• General Signature Requests</p>
            <div style={{marginTop:'18px',color:'#d8b35a',fontWeight:700}}>✓ Secure File Handling &nbsp; ✓ Guided Verification &nbsp; ✓ Remote Completion</div>
          </div>
        </div>
      </section>

      <section style={{padding:'90px 0'}}>
        <div className="eyebrow">Trusted By Virginia Clients</div>
        <h2 style={{fontSize:'42px'}}>What Customers Are Saying</h2>
        <div className="grid-3" style={{marginTop:'24px'}}>
          <div className="card"><p>★★★★★</p><p>“Fast, professional, and incredibly convenient. I completed my paperwork from home in less than twenty minutes.”</p><strong>— Melissa R.</strong></div>
          <div className="card"><p>★★★★★</p><p>“Excellent service for urgent lender documents. Smooth online appointment and very secure process.”</p><strong>— James T.</strong></div>
          <div className="card"><p>★★★★★</p><p>“The status tracking and upload system made everything simple. Highly recommend for remote notarization.”</p><strong>— Andrea P.</strong></div>
        </div>
      </section>

      <section style={{padding:'90px 0'}}>
        <div className="eyebrow">How The Process Works</div>
        <h2 style={{fontSize:'42px'}}>Simple 4-Step Online Completion</h2>
        <div className="grid-4" style={{marginTop:'24px'}}>
          {['Create Account','Upload Documents','Meet Online','Receive Completed Copy'].map((step)=><div key={step} className="card">{step}</div>)}
        </div>
      </section>

      <section style={{padding:'90px 0 40px'}}>
        <div className="card" style={{textAlign:'center',padding:'60px 30px'}}>
          <div className="eyebrow">Need Help Right Away?</div>
          <h2 style={{fontSize:'46px',maxWidth:'800px',margin:'16px auto'}}>Start Your Online Document Request In Minutes.</h2>
          <p className="hero-copy" style={{margin:'0 auto'}}>Create your account, upload your documents, and let our secure online process guide you through the rest.</p>
          <div style={{marginTop:'26px'}}><Link href="/register" className="btn">Get Started</Link></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
