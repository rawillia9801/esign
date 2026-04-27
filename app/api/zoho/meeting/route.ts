import { createZohoMeetingSession } from '../../../../lib/zohoServices'

export async function POST() {
  const session = await createZohoMeetingSession('ESV-22018')
  return Response.json({ ok: true, session })
}

export async function GET() {
  const session = await createZohoMeetingSession('ESV-22018')
  return Response.json({ ok: true, session })
}
