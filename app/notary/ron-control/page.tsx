import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import WorkflowActionCard from '../../../components/WorkflowActionCard'

export default function RonControl(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Commissioned E-Notary Control Room</div>
    <h1 style={{fontSize:'52px'}}>RON Transaction Manager</h1>

    <div className="grid-4" style={{marginTop:'24px'}}>
      <div className="card">1. Review Identity</div>
      <div className="card">2. Launch Zoho Meeting</div>
      <div className="card">3. Send Zoho Sign Package</div>
      <div className="card">4. Archive Record</div>
    </div>

    <div className="grid-2" style={{marginTop:'24px'}}>
      <div className="card">
        <h3>Active Request: ESV-22018</h3>
        <p>Customer ID Uploaded</p>
        <p>KBA Assessment Pending Review</p>
        <p>Document Package Ready For Zoho Sign</p>
        <p>Signer Waiting In Queue</p>
        <p style={{color:'#d8b35a'}}>Automation relay standing by...</p>
      </div>
      <WorkflowActionCard />
    </div>
   </div>
  </main>
 )
}
