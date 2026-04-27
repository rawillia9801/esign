import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import Link from 'next/link'

export default function CheckoutPage(){
 return (
  <main className="container">
    <Header />
    <div style={{padding:'50px 0'}}>
      <ProfileBar />
      <div className="eyebrow">Secure Billing & Invoice Processing</div>
      <h1 style={{fontSize:'52px'}}>Checkout Center</h1>

      <div className="grid-2" style={{marginTop:'24px'}}>
        <div className="card">
          <h3>Current Service Invoice</h3>
          <p>Remote Online Notarization Session — $25</p>
          <p>Electronic Signature Processing — $10</p>
          <p>Priority Handling Fee — $15</p>
          <hr style={{opacity:.2,margin:'18px 0'}}/>
          <h2>Total Due: $50</h2>
        </div>
        <div className="card">
          <h3>Payment Details</h3>
          <input placeholder="Name on Card" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
          <input placeholder="Card Number" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
          <input placeholder="Expiration / CVV" style={{width:'100%',padding:'14px',marginBottom:'18px'}} />
          <Link href="/confirmation" className="btn">Submit Secure Payment</Link>
        </div>
      </div>
    </div>
  </main>
 )
}
