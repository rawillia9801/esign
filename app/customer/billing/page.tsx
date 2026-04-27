import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function BillingPage(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Account Payment Records</div>
    <h1 style={{fontSize:'52px'}}>Billing History</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>ESV-22015 — Standard Processing — $25 Paid</p>
      <p>ESV-22016 — Business Agreement Completion — $65 Paid</p>
      <p>ESV-22018 — Warranty Deed Submission — $25 Pending</p>
    </div>
   </div>
  </main>
 )
}
