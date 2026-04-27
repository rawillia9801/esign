import Header from '../../../components/Header'

export default function CustomerAppointments(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'60px 0'}}>
    <div className="eyebrow">Scheduled Client Sessions</div>
    <h1 style={{fontSize:'52px'}}>Appointments</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>April 29, 2026 — 2:30 PM — Warranty Deed Review — Confirmed</p>
      <p>May 02, 2026 — 11:00 AM — Loan Package Completion — Pending</p>
      <p>May 05, 2026 — 4:15 PM — Affidavit Finalization — Reserved</p>
    </div>
   </section>
  </main>
 )
}
