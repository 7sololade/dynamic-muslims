import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/TicketPage.css'

export default function TicketPage() {
  return (
    <div className='ticket'>
        <h1>
          Ticket page here!
        </h1>
        <Link to='/'>go homepage</Link>

    </div>
  )
}
