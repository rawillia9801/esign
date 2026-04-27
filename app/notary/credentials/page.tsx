import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function NotaryCredentials(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Electronic Notary Assets</div>
    <h1 style={{fontSize:'52px'}}>Digital Credentials Vault</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>Commission Certificate — Active</p>
      <p>Electronic Seal Package — Synced</p>
      <p>Remote Session Journal Access — Enabled</p>
      <p>Virginia Professional Credential Review — Current</p>
    </div>
   </div>
  </main>
 )
}
