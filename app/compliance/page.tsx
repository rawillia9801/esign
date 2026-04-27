import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CompliancePage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Virginia Remote Online Notary Guidance</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Security, Verification & Customer Standards</h1>
    <p className="hero-copy">Every E-Sign Virginia request moves through a guided remote workflow designed for customer verification, protected file handling, appointment review, and secure completed delivery.</p>

    <div className="grid-3" style={{marginTop:'30px'}}>
      <div className="card"><h3>1. Identity Verification</h3><p>Signer identity and customer credentials are reviewed before online completion begins.</p></div>
      <div className="card"><h3>2. Protected File Processing</h3><p>Uploaded records are organized, reviewed, and routed through secure electronic handling procedures.</p></div>
      <div className="card"><h3>3. Guided Remote Completion</h3><p>Customers receive appointment direction, finalization guidance, and completed electronic delivery.</p></div>
    </div>

    <div className="grid-2" style={{marginTop:'24px'}}>
      <div className="card"><h3>Accepted Customer Use Cases</h3><p>Affidavits, title paperwork, lender packets, business agreements, signature acknowledgements, and general online notarization requests.</p></div>
      <div className="card"><h3>Additional Review Notice</h3><p>Certain requests may require witness coordination, receiving institution review, or specialized signer documentation before completion.</p></div>
    </div>
   </section>
   <Footer />
  </main>
 )
}
