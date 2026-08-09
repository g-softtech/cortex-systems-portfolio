import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string; slug?: { current?: string } }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response({ message, body } as any, { status: 400 })
    }

    // Revalidate the global Insights page, which contains the list of all articles
    revalidatePath('/')

    // If a slug is present, revalidate that specific article route
    if (body.slug?.current) {
      revalidatePath(`/insights/${body.slug.current}`)
    }

    return NextResponse.json({ body })
  } catch (err: any) {
    console.error("Webhook Error:", err)
    return new Response(err.message, { status: 500 })
  }
}
