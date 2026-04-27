import Link from 'next/link'
import Header from '../../components/Header'

export default function LoginPage(){
 return (
  <main className="container">
   <Header />
   <section style={{padding:'70px 0'}}>
    <div className="eyebrow">Protected Portal Access</div>
    <h1 className="hero-title" style={{fontSize:'56px'}}>Secure Account Login</h1>
    <p className="hero-copy">Choose your dedicated workspace and continue inside the encrypted digital processing environment.</p>

    <div className="grid-2" style={{marginTop:'32px'}}>
      <div className="card">
        <h2>Customer Portal Login</h2>
        <p style={{opacity:.7}}>For individuals, businesses, lenders, and legal clients.</p>
        <input placeholder="Email Address" style={{width:'100%',padding:'14px',marginBottom:'12px',marginTop:'16px'}} />
        <input placeholder="Password" style={{width:'100%',padding:'14px',marginBottom:'16px'}} />
        <Link href="/customer" className="btn">Enter Customer Workspace</Link>
      </div>
      <div className="card">
        <h2>E-Notary Professional Login</h2>
        <p style={{opacity:.7}}>For commissioned professionals and internal operations processing.</p>
        <input placeholder="Professional Email" style={{width:'100%',padding:'14px',marginBottom:'12px',marginTop:'16px'}} />
        <input placeholder="Password" style={{width:'100%',padding:'14px',marginBottom:'16px'}} />
        <Link href="/notary" className="btn">Enter Operations Center</Link>
      </div>
    </div>
   </section>
  </main>
 )
}
