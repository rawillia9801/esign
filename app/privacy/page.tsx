import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function PrivacyPage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Client Information Protection</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Privacy Policy</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>E-Sign Virginia values the confidentiality of customer information, uploaded records, contact information, and appointment details.</p>
      <p>Submitted information is used solely for customer communication, workflow processing, secure record handling, and requested service completion.</p>
      <p>Customers may contact support with questions regarding document retention or account record requests.</p>
    </div>
   </section>
   <Footer />
  </main>
 )
}
