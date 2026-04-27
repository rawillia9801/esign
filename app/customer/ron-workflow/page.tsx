import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import Link from 'next/link'

export default function RonWorkflow(){
 return (
  <main className="container">
   <Header />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Virginia Remote Online Notarization</div>
    <h1 style={{fontSize:'52px'}}>Guided Notarization Workflow</h1>

    <div className="grid-4" style={{marginTop:'24px'}}>
      <div className="card">1. Upload Document</div>
      <div className="card">2. Verify Identity</div>
      <div className="card">3. Join Video Session</div>
      <div className="card">4. Receive Sealed Copy</div>
    </div>

    <div className="grid-2" style={{marginTop:'24px'}}>
      <div className="card">
        <h3>Current Request: ESV-22018</h3>
        <p>Signer ID credential review pending.</p>
        <p>Knowledge verification questionnaire not yet completed.</p>
        <p>Live online session waiting for scheduling.</p>
      </div>
      <div className="card">
        <h3>Next Required Action</h3>
        <p>Please proceed to identity verification and customer credential confirmation before joining your notary session.</p>
        <Link href="/customer/identity-check" className="btn" style={{marginTop:'16px'}}>Begin Identity Check</Link>
      </div>
    </div>
   </div>
  </main>
 )
}
