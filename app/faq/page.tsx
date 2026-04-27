import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function FAQ(){
 return (
  <main className="container" style={{paddingTop:'20px'}}>
   <Header />
   <h1 style={{marginTop:'40px'}}>Frequently Asked Questions</h1>
   <div style={{display:'grid',gap:'16px',marginTop:'25px'}}>
    <div className="card"><h3>How long does online processing take?</h3><p>Most standard appointments are completed in under fifteen minutes.</p></div>
    <div className="card"><h3>Do I need to travel?</h3><p>No. The platform is designed for secure remote completion from your device.</p></div>
    <div className="card"><h3>Can businesses use recurring services?</h3><p>Yes, dedicated account workflows are available for firms and agencies.</p></div>
   </div>
   <Footer />
  </main>
 )
}
