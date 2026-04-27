import Header from '../../../components/Header'

export default function NotaryTransactions(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'60px 0'}}>
    <div className="eyebrow">Professional Processing Archive</div>
    <h1 style={{fontSize:'52px'}}>Completed Transactions</h1>
    <div className="card" style={{marginTop:'24px'}}>
      <p>Business Resolution — Completed — Ref #ESV-22014</p>
      <p>Warranty Deed — Delivered — Ref #ESV-22015</p>
      <p>Affidavit of Residence — Archived — Ref #ESV-22016</p>
      <p>Loan Package — Awaiting Signature — Ref #ESV-22017</p>
    </div>
   </section>
  </main>
 )
}
