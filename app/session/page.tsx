export default function SessionPage(){
 return (
  <main className="container" style={{paddingTop:'60px'}}>
   <h1>Request Online Appointment</h1>
   <div className="card" style={{marginTop:'20px'}}>
    <input placeholder="Full Name" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
    <input placeholder="Email Address" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
    <input placeholder="Preferred Date and Time" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
    <textarea placeholder="Service Notes" style={{width:'100%',padding:'12px',height:'140px'}} />
    <div style={{marginTop:'20px'}} className="btn">Submit Request</div>
   </div>
  </main>
 )
}
