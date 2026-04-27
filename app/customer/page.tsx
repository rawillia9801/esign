import Header from '../../components/Header'

export default function CustomerDashboard(){
 return (
  <main className="container">
   <Header />
   <div className="dashboard-layout">
    <aside className="card sidebar">
      <h3>Client Portal</h3>
      <a className="sidebar-link active">Overview</a>
      <a className="sidebar-link">Upload Files</a>
      <a className="sidebar-link">Appointments</a>
      <a className="sidebar-link">Verification</a>
      <a className="sidebar-link">Billing</a>
      <a className="sidebar-link">Completed Records</a>
    </aside>

    <section>
      <div className="eyebrow">Secure Client Workspace</div>
      <h1 style={{fontSize:'48px'}}>Customer Dashboard</h1>
      <p style={{color:'#b6c2d4'}}>Manage submissions, appointment requests, verification status, and completed digital records.</p>

      <div className="grid-3" style={{marginTop:'24px'}}>
        <div className="card"><span className="status-dot"></span>Verification Status<br/><h3>Approved Credentials</h3></div>
        <div className="card"><div className="metric">03</div><h3>Pending Files</h3></div>
        <div className="card"><div className="metric">12</div><h3>Completed Records</h3></div>
      </div>

      <div className="grid-2" style={{marginTop:'22px'}}>
        <div className="card"><h3>Upcoming Appointment</h3><p>Priority online guided document completion reserved in your queue.</p></div>
        <div className="card"><h3>Fast Upload Center</h3><p>Submit legal files, affidavits, agreements, and business records securely.</p></div>
      </div>
    </section>
   </div>
  </main>
 )
}
