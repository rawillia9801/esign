import Link from 'next/link'
import Header from '../../components/Header'
import ProfileBar from '../../components/ProfileBar'

export default function NotaryDashboard(){
 return (
  <main className="container">
   <Header />
   <div className="dashboard-layout">
    <aside className="card sidebar">
      <h3>E-Notary Center</h3>
      <Link href="/notary" className="sidebar-link active">Operations</Link>
      <Link href="/notary/ron-control" className="sidebar-link">RON Control Room</Link>
      <Link href="/notary/pending" className="sidebar-link">Pending Clients</Link>
      <Link href="/notary/verification" className="sidebar-link">Verification Queue</Link>
      <Link href="/notary/credentials" className="sidebar-link">Digital Credentials</Link>
      <Link href="/notary/transactions" className="sidebar-link">Completed Transactions</Link>
    </aside>

    <section>
      <ProfileBar />
      <div className="eyebrow">Commissioned Professional Workspace</div>
      <h1 style={{fontSize:'48px'}}>E-Notary Operations Dashboard</h1>
      <p style={{color:'#b6c2d4'}}>Manage client queues, credential review, processing records, digital seals, live RON sessions, and archived transaction completion.</p>

      <div className="grid-3" style={{marginTop:'24px'}}>
        <div className="card"><div className="metric">08</div><h3>Pending Clients</h3></div>
        <div className="card"><div className="metric">04</div><h3>RON Sessions</h3></div>
        <div className="card"><div className="metric">126</div><h3>Completed Logs</h3></div>
      </div>

      <div className="grid-2" style={{marginTop:'22px'}}>
        <div className="card"><h3>Digital Credential Vault</h3><p>Manage uploaded electronic certificate assets and professional credentials.</p></div>
        <div className="card"><h3>Priority Processing Feed</h3><p>Review urgent customer submissions requiring accelerated completion.</p></div>
      </div>

      <div className="card" style={{marginTop:'22px'}}>
        <h3>Recent Operations Feed</h3>
        <p>• RON Session ESV-22018 Waiting For Identity Approval</p>
        <p>• Client Credential Verification Approved</p>
        <p>• Business Agreement Completed and Archived</p>
        <p>• Electronic Credential Vault Synced</p>
      </div>
    </section>
   </div>
  </main>
 )
}
