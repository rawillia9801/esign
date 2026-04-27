export const zohoConfig = {
  sign: {
    clientId: process.env.ZOHO_SIGN_CLIENT_ID || '',
    clientSecret: process.env.ZOHO_SIGN_CLIENT_SECRET || '',
    webhook: process.env.ZOHO_SIGN_WEBHOOK || '',
  },
  meeting: {
    clientId: process.env.ZOHO_MEETING_CLIENT_ID || '',
    clientSecret: process.env.ZOHO_MEETING_CLIENT_SECRET || '',
    recordingWebhook: process.env.ZOHO_MEETING_RECORDING_WEBHOOK || '',
  },
  workdrive: {
    folderId: process.env.ZOHO_WORKDRIVE_FOLDER_ID || '',
  },
  flow: {
    webhook: process.env.ZOHO_FLOW_WEBHOOK || '',
  }
}

export function zohoReadyState(){
  return {
    signReady: !!zohoConfig.sign.clientId,
    meetingReady: !!zohoConfig.meeting.clientId,
    storageReady: !!zohoConfig.workdrive.folderId,
    automationReady: !!zohoConfig.flow.webhook,
  }
}
