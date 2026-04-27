export default function CustomerDashboard(){
 return (
  <main className="container" style={{paddingTop:'50px',paddingBottom:'60px'}}>
   <h1>Customer Dashboard</h1>
   <p>Manage your account requests and completed files.</p>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginTop:'30px'}}>
    <div className="card"><h3>Upload Files</h3><p>Submit documents and forms for processing.</p></div>
    <div className="card"><h3>Appointments</h3><p>Your next scheduled online meeting appears here.</p></div>
    <div className="card"><h3>Completed Files</h3><p>Download finalized electronic copies.</p></div>
    <div className="card"><h3>Verification</h3><p>Identity and signer credential review center.</p></div>
    <div className="card"><h3>Billing</h3><p>Review invoices, receipts, and payment history.</p></div>
    <div className="card"><h3>Meeting Room</h3><p>Join your scheduled secure online verification meeting.</p></div>
   </div>
  </main>
 )
}
