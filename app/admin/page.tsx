import Header from '../../components/Header'
import ProfileBar from '../../components/ProfileBar'
import ActivityFeed from '../../components/ActivityFeed'
import ClaudeReviewPanel from '../../components/ClaudeReviewPanel'
import ActionModal from '../../components/ActionModal'
import HelpDrawer from '../../components/HelpDrawer'
import Link from 'next/link'

export default function AdminDashboard(){
 return (
  <main className="container">
   <Header />
   <HelpDrawer />
   <div style={{padding:'50px 0'}}>
    <ProfileBar />
    <div className="eyebrow">Executive Operations Overview</div>
    <h1 style={{fontSize:'52px'}}>Admin Master Dashboard</h1>

    <div className="grid-4" style={{marginTop:'24px'}}>
      <div className="card"><div className="metric">42</div><h3>Open Client Requests</h3></div>
      <div className="card"><div className="metric">11</div><h3>Active RON Sessions</h3></div>
      <div className="card"><div className="metric">$8,450</div><h3>Monthly Processed Revenue</h3></div>
      <div className="card"><div className="metric">Online</div><h3>System Connection</h3></div>
    </div>

    <div className="grid-2" style={{marginTop:'24px'}}>
      <div className="card">
        <h3>Today's Priority Queue</h3>
        <p>• 7 Urgent Real Estate Closings</p>
        <p>• 3 Lender Packages Awaiting Video Session</p>
        <p>• 5 Business Contract Signature Requests</p>
        <Link href="/notary/ron-control" className="btn" style={{marginTop:'14px'}}>Open RON Control</Link>
      </div>
      <div className="card">
        <h3>Automation Health</h3>
        <p>Document Dispatch: Connected</p>
        <p>Meeting Relay: Connected</p>
        <p>Storage Vault: Connected</p>
        <p>Webhook Relay: Active</p>
      </div>
    </div>

    <div className="grid-2" style={{marginTop:'24px'}}>
      <ActivityFeed />
      <ClaudeReviewPanel />
    </div>

    <div style={{marginTop:'24px'}}>
      <ActionModal />
    </div>
   </div>
  </main>
 )
}
