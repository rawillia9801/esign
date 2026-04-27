export default function ProfileBar(){
 return (
  <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
    <div><strong>Secure Notifications</strong><div style={{opacity:.65,fontSize:'14px'}}>2 pending updates require review</div></div>
    <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
      <div style={{width:'38px',height:'38px',borderRadius:'999px',background:'rgba(255,255,255,.12)'}}></div>
      <div>Account Menu</div>
    </div>
  </div>
 )
}
