import { sendZohoSignPackage } from '../../../../lib/zohoServices'

export async function POST() {
  const pkg = await sendZohoSignPackage('ESV-22018')
  return Response.json({ ok: true, pkg })
}

export async function GET() {
  const pkg = await sendZohoSignPackage('ESV-22018')
  return Response.json({ ok: true, pkg })
}
