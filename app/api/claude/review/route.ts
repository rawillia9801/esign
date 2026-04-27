import { reviewDocumentWithClaude } from '../../../../lib/claude'

export async function GET(){
  const result = await reviewDocumentWithClaude('uploaded-document.pdf')
  return Response.json({ ok:true, result })
}

export async function POST(){
  const result = await reviewDocumentWithClaude('uploaded-document.pdf')
  return Response.json({ ok:true, result })
}
