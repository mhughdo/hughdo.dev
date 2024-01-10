import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const font = fetch(new URL('../../../public/fonts/UncutSans-Regular.otf', import.meta.url)).then((res) =>
    res.arrayBuffer()
  )
  const fontData = await font
  const imgUrl =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000/og-bg.png' : 'https://hughdo.dev/og-bg.png'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${imgUrl})`,
        }}>
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 120,
            fontFamily: 'Uncut Sans',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '160px',
            whiteSpace: 'pre-wrap',
          }}>
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Uncut Sans',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
