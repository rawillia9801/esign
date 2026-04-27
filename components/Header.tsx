import Link from 'next/link'

export default function Header(){
 return (
  <header className="header" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
   <Link href="/" style={{display:'flex',alignItems:'center',gap:'14px'}}>
    <div className="brand-mark">EV</div>
    <div>
      <div style={{fontWeight:800,fontSize:'18px'}}>E-Sign Virginia</div>
      <div style={{fontSize:'12px',opacity:.65}}>Virginia Online Notary & E-Sign</div>
    </div>
   </Link>
   <nav style={{display:'flex',gap:'8px',alignItems:'center',flexWrap:'wrap',justifyContent:'flex-end'}}>
    <Link className="nav-pill" href="/">Home</Link>
    <Link className="nav-pill" href="/pricing">Pricing</Link>
    <Link className="nav-pill" href="/status">Track Status</Link>
    <Link className="nav-pill" href="/contact">Contact</Link>
    <Link className="btn-secondary" href="/login">Login</Link>
    <Link className="btn" href="/register">Sign Up</Link>
   </nav>
  </header>
 )
}
