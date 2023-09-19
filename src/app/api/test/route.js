import { NextResponse } from 'next/server'
 

// export async function GET(request, context: { params }) {
//     const team = params.team // '1'
//   }

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'
//   , {
    // headers: {
    //   'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    // },
//   }
  )
  const data = await res.json()
  return NextResponse.json({ data })
}