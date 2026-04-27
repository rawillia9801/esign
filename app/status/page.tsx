import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function StatusPage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Live Request Tracking</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Document Status Checker</h1>
    <p className="hero-copy">Reference #: ESV-22015</p>

    <div className="grid-4" style={{marginTop:'30px'}}>
      <div className="card"><strong>1.</strong><p>Request Received</p></div>
      <div className="card"><strong>2.</strong><p>Identity Verified</p></div>
      <div className="card"><strong>3.</strong><p>Appointment Scheduled</p></div>
      <div className="card"><strong>4.</strong><p>Completed & Ready</p></div>
    </div>

    <div className="card" style={{marginTop:'24px'}}>
      <h3>Current Status: Appointment Confirmed</h3>
      <p>Your online meeting is reserved for April 29, 2026 at 2:30 PM.</p>
      <p>Assigned Processing Specialist: Virginia Remote Operations Desk</p>
      <p>Document Package: Warranty Deed Submission</p>
    </div>
   </section>
   <Footer />
  </main>
 )
}
