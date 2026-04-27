import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Pricing(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Transparent Premium Service Plans</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Professional Pricing</h1>
    <p className="hero-copy">Flexible document execution options for individual signers, business clients, and enterprise recurring volume accounts.</p>
    <div className="grid-3" style={{marginTop:'34px'}}>
      <div className="card"><h2>Standard Client</h2><p>Single signer guided digital processing.</p><div className="metric">$25</div></div>
      <div className="card"><h2>Business Multi-File</h2><p>Expanded workflow support and priority scheduling.</p><div className="metric">$65</div></div>
      <div className="card"><h2>Enterprise Volume</h2><p>Law offices, lenders, agencies, and title groups.</p><div className="metric">Custom</div></div>
    </div>
   </section>
   <Footer />
  </main>
 )
}
