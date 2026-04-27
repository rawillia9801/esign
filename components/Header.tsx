import Link from 'next/link'

export default function Header(){
 return (
  <header style={{padding:'24px 0',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
   <h2>E-Sign Virginia</h2>
   <nav style={{display:'flex',gap:'18px'}}>
    <Link href="/">Home</Link>
    <Link href="/login">Login</Link>
    <Link href="/session">Appointment</Link>
   </nav>
  </header>
 )
}
