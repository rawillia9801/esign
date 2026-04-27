import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import Link from 'next/link'

export default function IdentityCheck(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Signer Credential Verification</div>
    <h1 style={{fontSize:'52px'}}>Identity Check</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>Upload Government Issued ID</p>
      <p>Complete Customer Face Match</p>
      <p>Answer Knowledge Authentication Questions</p>
      <p>Confirm Signer Willingness Statement</p>
      <p style={{color:'#d8b35a'}}>Zoho verification package preparing...</p>
      <Link href="/api/zoho/meeting" className="btn-secondary" style={{marginTop:'18px',marginRight:'10px'}}>Initialize Zoho Session</Link>
      <Link href="/notary/live-session" className="btn" style={{marginTop:'18px'}}>Proceed To Video Session Queue</Link>
    </div>
   </div>
  </main>
 )
}
