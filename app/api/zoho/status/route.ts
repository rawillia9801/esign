export async function POST() {
  return Response.json({
    ok: true,
    message: 'Zoho webhook endpoint placeholder active',
  })
}

export async function GET() {
  return Response.json({
    ok: true,
    service: 'zoho-status-webhook',
  })
}
