import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function FAQ(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Client Questions Answered</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Frequently Asked Questions</h1>
    <div style={{display:'grid',gap:'18px',marginTop:'28px'}}>
      <div className="card"><h3>How long does standard digital processing take?</h3><p>Most standard customer appointments are completed in approximately fifteen minutes depending on file volume.</p></div>
      <div className="card"><h3>Is in-person travel required?</h3><p>No. The workflow is intentionally structured for secure guided remote completion from your phone or computer.</p></div>
      <div className="card"><h3>Do you support business recurring accounts?</h3><p>Yes. Firms, agencies, lenders, and title groups may request dedicated recurring volume support.</p></div>
    </div>
   </section>
   <Footer />
  </main>
 )
}
