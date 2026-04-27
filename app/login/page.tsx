import Link from 'next/link'

export default function LoginPage(){
 return (
  <main className="container" style={{paddingTop:'80px'}}>
   <h1>Secure Account Access</h1>
   <p>Select your portal type below.</p>
   <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'30px'}}>
    <div className="card">
      <h2>Customer Login</h2>
      <input placeholder="Email" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
      <input placeholder="Password" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
      <Link href="/customer" className="btn">Enter Customer Dashboard</Link>
    </div>
    <div className="card">
      <h2>E-Notary Login</h2>
      <input placeholder="Commissioned Notary Email" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
      <input placeholder="Password" style={{width:'100%',padding:'12px',marginBottom:'12px'}} />
      <Link href="/notary" className="btn">Enter Notary Dashboard</Link>
    </div>
   </div>
  </main>
 )
}
