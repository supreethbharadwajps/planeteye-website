// app/api/enquiry/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // basic server validation (duplicate for safety)
    if (!body.name || !body.phone) {
      return NextResponse.json({ error: 'Name and phone required' }, { status: 400 })
    }
    // rate limiting (simple in-memory, use upstash redis in production)
    // forward to Google Sheets webhook
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    if (!webhookUrl) throw new Error('Missing webhook URL')
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...body,
        timestamp: new Date().toISOString(),
      }),
    })
    if (!response.ok) throw new Error('Sheet submission failed')
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry submission error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}