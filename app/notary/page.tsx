import Header from '../../components/Header'

export default function NotaryDashboard(){
 return (
  <main className="container">
   <Header />
   <div className="dashboard-layout">
    <aside className="card sidebar">
      <h3>E-Notary Center</h3>
      <a className="sidebar-link active">Operations</a>
      <a className="sidebar-link">Pending Clients</a>
      <a className="sidebar-link">Verification Queue</a>
      <a className="sidebar-link">Digital Credentials</a>
      <a className="sidebar-link">Journal Records</a>
      <a className="sidebar-link">Completed Transactions</a>
    </aside>

    <section>
      <div className="eyebrow">Commissioned Professional Workspace</div>
      <h1 style={{fontSize:'48px'}}>E-Notary Operations Dashboard</h1>
      <p style={{color:'#b6c2d4'}}>Manage client queues, credential review, processing records, digital seals, and archived transaction completion.</p>

      <div className="grid-3" style={{marginTop:'24px'}}>
        <div className="card"><div className="metric">08</div><h3>Pending Clients</h3></div>
        <div className="card"><div className="metric">14</div><h3>Verification Queue</h3></div>
        <div className="card"><div className="metric">126</div><h3>Completed Logs</h3></div>
      </div>

      <div className="grid-2" style={{marginTop:'22px'}}>
        <div className="card"><h3>Digital Credential Vault</h3><p>Manage uploaded electronic certificate assets and professional credentials.</p></div>
        <div className="card"><h3>Priority Processing Feed</h3><p>Review urgent customer submissions requiring accelerated completion.</p></div>
      </div>

      <div className="card" style={{marginTop:'22px'}}>
        <h3>Recent Operations Feed</h3>
        <p>• Client Credential Verification Approved</p>
        <p>• Business Agreement Completed and Archived</p>
        <p>• Priority Customer Appointment Added To Queue</p>
        <p>• Electronic Credential Vault Synced</p>
      </div>
    </section>
   </div>
  </main>
 )
}
