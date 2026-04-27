import Header from '../../components/Header'

export default function SessionPage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Priority Scheduling Request</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Book Online Appointment</h1>
    <div className="card" style={{marginTop:'26px',maxWidth:'820px'}}>
      <input placeholder="Full Name" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Email Address" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Preferred Date & Time" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Document Category" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <textarea placeholder="Additional Processing Notes" style={{width:'100%',padding:'14px',height:'160px'}} />
      <div style={{marginTop:'20px'}} className="btn">Reserve Appointment Slot</div>
    </div>
   </section>
  </main>
 )
}
