import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'

export default function CompletedPage(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Delivered Customer Records</div>
    <h1 style={{fontSize:'52px'}}>Completed Files</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>ESV-22011 — Affidavit of Residence.pdf — <span style={{color:'#d8b35a'}}>Download Complete Copy</span></p>
      <p>ESV-22012 — Business Resolution.pdf — <span style={{color:'#d8b35a'}}>Download Complete Copy</span></p>
      <p>ESV-22013 — Signature Authorization.pdf — <span style={{color:'#d8b35a'}}>Download Complete Copy</span></p>
      <p>ESV-22014 — Loan Addendum.pdf — <span style={{color:'#d8b35a'}}>Download Complete Copy</span></p>
    </div>
   </div>
  </main>
 )
}
