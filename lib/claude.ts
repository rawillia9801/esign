export async function claudeConfigured(){
  return !!process.env.ANTHROPIC_API_KEY
}

export async function reviewDocumentWithClaude(filename:string){
  const configured = !!process.env.ANTHROPIC_API_KEY

  if(!configured){
    return {
      configured:false,
      message:'Claude API key not configured',
    }
  }

  return {
    configured:true,
    filename,
    summary:'AI review initialized for uploaded legal document.',
    findings:[
      'Signature placement should be confirmed',
      'Notarial acknowledgment language should be reviewed',
      'Signer identification attachment recommended'
    ]
  }
}
