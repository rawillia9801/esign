import Header from '../../../components/Header'
import ProfileBar from '../../../components/ProfileBar'
import DocumentUploadCenter from '../../../components/DocumentUploadCenter'

export default function UploadCenterPage(){
 return (
  <main className="container">
    <Header />
    <div style={{padding:'50px 0'}}>
      <ProfileBar />
      <div className="eyebrow">Client File Intake Workspace</div>
      <h1 style={{fontSize:'52px'}}>Document Upload Center</h1>
      <div style={{marginTop:'24px'}}>
        <DocumentUploadCenter />
      </div>
    </div>
  </main>
 )
}
