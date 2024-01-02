import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hasTitle = searchParams.has('title')
  const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title'

  return NextResponse.json(
    { title },
    {
      status: 200,
    }
  )
}
