import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import TestBody from '../components/TestBody'

export default function Home() {
  const auth_token = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI4TEFQNkgiLCJqdGkiOiI2NzBmOTMxNGRlMmJmODMxYjlhZGJhZTMiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaWF0IjoxNzI5MDczOTQwLCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3MjkxMTYwMDB9.CYbzTC4NRmH2RQ6vibM6Szijx9ot_ulm0pD5kVthjJ4  ";
  return (
    <div>
      <Navbar token={auth_token}/>
      <Body token={auth_token}/>
    </div>
  )
}
