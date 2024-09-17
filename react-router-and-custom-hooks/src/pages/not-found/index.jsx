
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <h1>This page doesn't Exists</h1>
      <Link to={'/recipe'}>Go To Recipe List</Link>
    </div>
  )
}
