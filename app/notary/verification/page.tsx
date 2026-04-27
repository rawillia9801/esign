import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function NotaryVerification(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Signer Review Workflow</div>
    <h1 style={{fontSize:'52px'}}>Verification Queue</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>ESV-22018 — Government ID Match Pending</p>
      <p>ESV-22019 — Email Authentication Approved</p>
      <p>ESV-22020 — Live Signer Confirmation Required</p>
      <p>ESV-22021 — Credential Review Complete</p>
    </div>
   </div>
  </main>
 )
}
