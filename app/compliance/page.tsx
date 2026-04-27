import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CompliancePage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Virginia Remote Online Notary Guidance</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Security & Compliance</h1>
    <p className="hero-copy">E-Sign Virginia is designed around secure remote document handling, guided identity verification, electronic records, and customer transparency.</p>

    <div className="grid-3" style={{marginTop:'30px'}}>
      <div className="card"><h3>Identity Review</h3><p>Customers are guided through credential and signer verification before online completion.</p></div>
      <div className="card"><h3>Secure Records</h3><p>Files and session records are structured for secure electronic handling and organized retrieval.</p></div>
      <div className="card"><h3>Remote Convenience</h3><p>The workflow is built for online appointments, electronic completion, and protected delivery.</p></div>
    </div>

    <div className="card" style={{marginTop:'24px'}}>
      <h3>Customer Notice</h3>
      <p>Some documents may require additional review, witness availability, specific signer location requirements, or alternate handling depending on the document type and receiving institution.</p>
    </div>
   </section>
   <Footer />
  </main>
 )
}
