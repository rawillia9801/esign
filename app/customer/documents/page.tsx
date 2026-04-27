import Header from '../../../components/Header'

export default function DocumentsPage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'60px 0'}}>
    <div className="eyebrow">Secure Record Center</div>
    <h1 style={{fontSize:'52px'}}>Document Management</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <h3>Uploaded Records</h3>
      <p>Warranty Deed.pdf — Pending Review</p>
      <p>Affidavit of Residence.pdf — Completed</p>
      <p>Business Resolution.pdf — Awaiting Appointment</p>
      <p>Loan Package.pdf — Delivered</p>
    </div>
    <div className="card" style={{marginTop:'20px'}}>
      <h3>Upload New File</h3>
      <p style={{opacity:.7}}>Drag and drop secure PDF or legal document here.</p>
      <div className="btn" style={{marginTop:'16px'}}>Select File</div>
    </div>
   </section>
  </main>
 )
}
