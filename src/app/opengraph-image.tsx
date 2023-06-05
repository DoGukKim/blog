import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = '꾹 블로그'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        꾹 블로그
      </div>
    ),
    {
      ...size,
    }
  )
}
