import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function SealVault(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Electronic Credential Security</div>
    <h1 style={{fontSize:'52px'}}>Notary Signature & Seal Vault</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>Commissioned E-Notary Name: Verified</p>
      <p>Virginia Electronic Commission ID: Active</p>
      <p>Encrypted Signature Certificate: Stored</p>
      <p>Electronic Seal Asset: Synced</p>
      <p>Audit Journal Link: Enabled</p>
    </div>
   </div>
  </main>
 )
}
