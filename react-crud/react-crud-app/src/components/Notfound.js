import React from 'react'

export default function Notfound() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/images/404.gif'} width="500" alt="404"></img>
      <h1>Page Not Found</h1>
    </div>
  )
}
