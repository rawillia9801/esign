export const integrationProviders = {
  video: {
    provider: process.env.NEXT_PUBLIC_VIDEO_PROVIDER || 'daily-twilio-zoom-ready',
    roomUrl: process.env.NEXT_PUBLIC_VIDEO_ROOM_URL || '',
    recordingWebhook: process.env.VIDEO_RECORDING_WEBHOOK || '',
  },
  identity: {
    provider: process.env.IDENTITY_VERIFICATION_PROVIDER || 'credential-analysis-ready',
    webhookSecret: process.env.IDENTITY_WEBHOOK_SECRET || '',
  },
  signature: {
    provider: process.env.E_SIGNATURE_PROVIDER || 'x509-e-seal-ready',
    sealVaultKey: process.env.NOTARY_SEAL_VAULT_KEY || '',
  },
  storage: {
    provider: process.env.SECURE_DOCUMENT_STORAGE || 'supabase-s3-ready',
    retentionPolicy: process.env.RECORD_RETENTION_POLICY || 'configured-by-admin',
  },
}

export function getIntegrationReadiness(){
  return [
    { name: 'Video Session Provider', ready: !!integrationProviders.video.roomUrl },
    { name: 'Identity Verification Provider', ready: !!integrationProviders.identity.webhookSecret },
    { name: 'Electronic Signature / Seal Provider', ready: !!integrationProviders.signature.sealVaultKey },
    { name: 'Secure Document Storage', ready: !!integrationProviders.storage.provider },
  ]
}
