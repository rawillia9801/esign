import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Contact(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Direct Concierge Support</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Contact E-Sign Virginia</h1>
    <p className="hero-copy">Questions about urgent filings, business onboarding, enterprise volume, or special legal processing requests? Reach our support desk below.</p>
    <div className="card" style={{marginTop:'26px'}}>
      <input placeholder="Your Name" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Email Address" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <textarea placeholder="Tell us how we can assist" style={{width:'100%',padding:'14px',height:'180px'}} />
      <Link href="/confirmation" className="btn" style={{marginTop:'20px'}}>Send Secure Inquiry</Link>
    </div>
   </section>
   <Footer />
  </main>
 )
}
