import Link from 'next/link'
import Header from '../../components/Header'

export default function RegisterPage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Create Protected Account</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Client Registration</h1>
    <p className="hero-copy">Open a secure account to begin digital file submission, appointment scheduling, identity verification, and completed record retrieval.</p>
    <div className="card" style={{marginTop:'26px',maxWidth:'760px'}}>
      <input placeholder="Full Legal Name" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Email Address" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Phone Number" style={{width:'100%',padding:'14px',marginBottom:'12px'}} />
      <input placeholder="Create Password" style={{width:'100%',padding:'14px',marginBottom:'8px'}} />
      <div style={{fontSize:'13px',opacity:.6,marginBottom:'18px'}}>secure onboarding • encrypted file intake • reference tracking • remote session scheduling</div>
      <Link href="/confirmation" className="btn">Create Secure Account</Link>
    </div>
   </section>
  </main>
 )
}
