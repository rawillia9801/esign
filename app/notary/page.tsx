export default function NotaryDashboard(){
 return (
  <main className="container" style={{paddingTop:'50px',paddingBottom:'60px'}}>
   <h1>E-Notary Dashboard</h1>
   <p>Professional commissioned notary workspace.</p>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginTop:'30px'}}>
    <div className="card"><h3>Pending Clients</h3><p>Review signer appointments awaiting processing.</p></div>
    <div className="card"><h3>Verification Queue</h3><p>Credential and identity review tasks.</p></div>
    <div className="card"><h3>Completed Sessions</h3><p>Archive of finalized electronic acts.</p></div>
    <div className="card"><h3>Digital Seal</h3><p>Manage uploaded electronic certificate assets.</p></div>
    <div className="card"><h3>Journal Records</h3><p>Electronic notarial log and historical entries.</p></div>
    <div className="card"><h3>Earnings Center</h3><p>Track processed transactions and payouts.</p></div>
   </div>
  </main>
 )
}
