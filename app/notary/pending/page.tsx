import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function PendingClients(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Awaiting Professional Review</div>
    <h1 style={{fontSize:'52px'}}>Pending Client Queue</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>ESV-22018 — Warranty Deed Submission — Credential Review Needed</p>
      <p>ESV-22019 — POA Package — Appointment Assignment Pending</p>
      <p>ESV-22020 — Lender Packet — Awaiting Identity Match</p>
      <p>ESV-22021 — Business Contract — Urgent Priority Queue</p>
    </div>
   </div>
  </main>
 )
}
