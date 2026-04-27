import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function VerificationPage(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Credential Approval Center</div>
    <h1 style={{fontSize:'52px'}}>Verification Status</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>Government Photo ID: Approved</p>
      <p>Email Confirmation: Verified</p>
      <p>Signer Identity Match: Approved</p>
      <p>Customer Security Review: Complete</p>
    </div>
   </div>
  </main>
 )
}
