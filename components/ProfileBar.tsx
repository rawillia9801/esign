export default function ProfileBar(){
 return (
  <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px',gap:'16px',flexWrap:'wrap'}}>
    <div>
      <strong>Secure Notifications</strong>
      <div style={{opacity:.65,fontSize:'14px'}}>3 active workflow updates require review</div>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:'10px',flexWrap:'wrap'}}>
      <span style={{background:'rgba(216,179,90,.16)',border:'1px solid rgba(216,179,90,.35)',color:'#d8b35a',padding:'8px 12px',borderRadius:'999px',fontSize:'13px',fontWeight:700}}>3 Alerts</span>
      <span style={{background:'rgba(52,211,153,.12)',border:'1px solid rgba(52,211,153,.28)',color:'#34d399',padding:'8px 12px',borderRadius:'999px',fontSize:'13px',fontWeight:700}}>Zoho Ready</span>
      <div style={{width:'38px',height:'38px',borderRadius:'999px',background:'linear-gradient(135deg,#d8b35a,#fff3c4)',color:'#0f172a',display:'grid',placeItems:'center',fontWeight:900}}>EV</div>
      <div>Account Menu</div>
    </div>
  </div>
 )
}
