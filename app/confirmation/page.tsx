'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Confirmation(){
 const ref = 'ESV-' + Math.floor(10000 + Math.random()*90000)
 return (
  <main className="container">
   <Header />
   <section style={{padding:'80px 0',textAlign:'center'}}>
    <div className="eyebrow">Submission Received</div>
    <h1 className="hero-title" style={{fontSize:'56px',margin:'0 auto'}}>Thank You — Your Request Has Been Submitted.</h1>
    <p className="hero-copy" style={{margin:'18px auto'}}>Reference Number: {ref}. A confirmation email and next-step instructions will be sent shortly.</p>
   </section>
   <Footer />
  </main>
 )
}
