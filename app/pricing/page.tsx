import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Pricing(){
 return (
  <main className="container" style={{paddingTop:'20px'}}>
   <Header />
   <h1 style={{marginTop:'40px'}}>Service Pricing</h1>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginTop:'30px'}}>
    <div className="card"><h2>Standard</h2><p>Single file online processing</p><h3>$25</h3></div>
    <div className="card"><h2>Business</h2><p>Multiple signer document workflow</p><h3>$65</h3></div>
    <div className="card"><h2>Enterprise</h2><p>Law firm and title office recurring service</p><h3>Custom</h3></div>
   </div>
   <Footer />
  </main>
 )
}
