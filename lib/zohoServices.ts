import { zohoConfig } from './zoho'

export async function createZohoMeetingSession(reference:string){
  return {
    provider: 'Zoho Meeting',
    reference,
    joinUrl: '/notary/live-session',
    recordingExpected: true,
    configured: !!zohoConfig.meeting.clientId,
  }
}

export async function sendZohoSignPackage(reference:string){
  return {
    provider: 'Zoho Sign',
    reference,
    status: 'signature-package-prepared',
    configured: !!zohoConfig.sign.clientId,
  }
}

export async function archiveToZohoWorkdrive(reference:string){
  return {
    provider: 'Zoho WorkDrive',
    reference,
    archived: !!zohoConfig.workdrive.folderId,
  }
}
