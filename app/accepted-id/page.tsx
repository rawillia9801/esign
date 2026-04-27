import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AcceptedID(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Prepare For Your Appointment</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Accepted Identification</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>Customers should be prepared to provide one current government-issued photo identification during the verification process.</p>
      <p>Accepted examples include:</p>
      <p>• Driver's License</p>
      <p>• State Identification Card</p>
      <p>• U.S. Passport</p>
      <p>• Military Identification</p>
    </div>
   </section>
   <Footer />
  </main>
 )
}
