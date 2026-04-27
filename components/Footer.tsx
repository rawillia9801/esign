export default function Footer(){
 return (
  <footer style={{padding:'60px 0',marginTop:'80px',borderTop:'1px solid rgba(255,255,255,0.1)',opacity:.9}}>
   <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:'20px'}}>
    <div>
      <h3 style={{marginBottom:'10px'}}>E-Sign Virginia</h3>
      <p>Secure online notary, e-signature, and remote document completion services designed for Virginia individuals, businesses, lenders, and legal clients.</p>
      <div style={{marginTop:'12px',color:'#d8b35a',fontWeight:700}}>Virginia Secure Processing Standards • Encrypted Client Delivery • Guided Online Completion</div>
    </div>
    <div>
      <h4>Quick Links</h4>
      <p>Home</p>
      <p>Pricing</p>
      <p>FAQ</p>
      <p>Contact</p>
    </div>
    <div>
      <h4>Support</h4>
      <p>Priority Help Line</p>
      <p>(276) 555-0137</p>
      <p>support@esignvirginia.com</p>
    </div>
   </div>
   <p style={{marginTop:'28px',opacity:.6}}>© 2026 E-Sign Virginia — All Rights Reserved.</p>
  </footer>
 )
}
