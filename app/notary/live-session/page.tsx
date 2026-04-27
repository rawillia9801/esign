import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function LiveSession(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Zoho Meeting Remote Online Notarization</div>
    <h1 style={{fontSize:'52px'}}>Live Video Verification Room</h1>
    <div className="grid-2" style={{marginTop:'24px'}}>
      <div className="card">
        <h3>Zoho Meeting Recorded Conference</h3>
        <p>Signer and commissioned e-notary join a recorded two-way Zoho Meeting room for document completion and retained session evidence.</p>
        <div className="btn" style={{marginTop:'16px'}}>Launch Zoho Session</div>
      </div>
      <div className="card">
        <h3>Verification Checklist</h3>
        <p>• Government ID Reviewed</p>
        <p>• Signer Face Match</p>
        <p>• Willingness Confirmation</p>
        <p>• Zoho Recording Archived</p>
      </div>
    </div>
   </div>
  </main>
 )
}
