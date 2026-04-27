import Link from 'next/link'
import Header from '../../components/Header'
import ProfileBar from '../../components/ProfileBar'

export default function CustomerDashboard(){
 return (
  <main className="container">
   <Header />
   <div className="dashboard-layout">
    <aside className="card sidebar">
      <h3>Client Portal</h3>
      <Link href="/customer" className="sidebar-link active">Overview</Link>
      <Link href="/customer/documents" className="sidebar-link">Upload Files</Link>
      <Link href="/customer/appointments" className="sidebar-link">Appointments</Link>
      <Link href="/customer/verification" className="sidebar-link">Verification</Link>
      <Link href="/customer/billing" className="sidebar-link">Billing</Link>
      <Link href="/customer/completed" className="sidebar-link">Completed Records</Link>
    </aside>

    <section>
      <ProfileBar />
      <div className="eyebrow">Secure Client Workspace</div>
      <h1 style={{fontSize:'48px'}}>Customer Dashboard</h1>
      <p style={{color:'#b6c2d4'}}>Manage submissions, appointment requests, verification status, and completed digital records.</p>

      <div className="grid-3" style={{marginTop:'24px'}}>
        <div className="card"><span className="status-dot"></span>Verification Status<br/><h3>Approved Credentials</h3></div>
        <div className="card"><div className="metric">03</div><h3>Pending Files</h3></div>
        <div className="card"><div className="metric">12</div><h3>Completed Records</h3></div>
      </div>

      <div className="grid-2" style={{marginTop:'22px'}}>
        <div className="card"><h3>Upcoming Appointment</h3><p>Reference ESV-22018 reserved for April 29, 2:30 PM.</p></div>
        <div className="card"><h3>Fast Upload Center</h3><p>Submit legal files, affidavits, agreements, and business records securely.</p></div>
      </div>

      <div className="card" style={{marginTop:'22px'}}>
        <h3>Recent Activity Log</h3>
        <p>• ESV-22018 Warranty Deed Uploaded — Pending Review</p>
        <p>• ESV-22017 Appointment Reserved — April 29, 2:30 PM</p>
        <p>• ESV-22016 Verification Credentials Approved</p>
        <p>• ESV-22015 Electronic Copy Delivered</p>
      </div>
    </section>
   </div>
  </main>
 )
}
