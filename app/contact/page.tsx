import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Contact(){
 return (
  <main className="container" style={{paddingTop:'20px'}}>
   <Header />
   <h1 style={{marginTop:'40px'}}>Contact E-Sign Virginia</h1>
   <div className="card" style={{marginTop:'20px'}}>
    <input placeholder="Your Name" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
    <input placeholder="Email" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
    <textarea placeholder="How can we help?" style={{width:'100%',padding:'12px',height:'160px'}} />
    <div className="btn" style={{marginTop:'20px'}}>Send Message</div>
   </div>
   <Footer />
  </main>
 )
}
