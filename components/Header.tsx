import Link from 'next/link'

export default function Header(){
 return (
  <header className="header" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
   <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
    <div className="brand-mark">EV</div>
    <div>
      <div style={{fontWeight:800,fontSize:'18px'}}>E-Sign Virginia</div>
      <div style={{fontSize:'12px',opacity:.65}}>Virginia Verified Remote Online Notary</div>
    </div>
   </div>
   <nav style={{display:'flex',gap:'8px',alignItems:'center'}}>
    <span style={{fontSize:'13px',color:'#d8b35a',fontWeight:700,marginRight:'8px'}}>Priority Help: (276) 555-0137</span>
    <Link className="nav-pill" href="/">Home</Link>
    <Link className="nav-pill" href="/pricing">Pricing</Link>
    <Link className="nav-pill" href="/faq">FAQ</Link>
    <Link className="nav-pill" href="/contact">Contact</Link>
    <Link className="btn" href="/login">Secure Login</Link>
   </nav>
  </header>
 )
}
