import React, {useState} from 'react'
import '../styles/GetTicket.css'
import { Link } from 'react-router-dom'

export default function GetTicket() {

  const [getTicket, setGetTicketData]= useState(

    {
      firstName : "",
      lastName : "",
      email : "",
      phoneNumber : "",
      textArea : "",
      choosePlan : ""
    }
  )



  function handleChange(event){
    const{name, value, type, checked} = event.target
    setGetTicketData( prevGetTicket => {
        return {
          ...prevGetTicket,
          [name] : type === "checkbox" ? checked :value
        }
    })  
  }


  function handleSubmit(event){
    event.preventDefault()
    console.log(getTicket);
  }

  // console.log(getTicket);


  return (
    <div className='ticket-wrapper '>
      
      <div className="contact-us">




        <div className="contact-content">
          <h1>Contact US</h1>
          <h3>Fill out the form to attend the most anticipated events in the city and get your tickets for the best night party today for you and your friends.</h3>
        </div>



        <div className="contact-info">
          <h1>Osogbo</h1>
          <div className="address">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-12Z"/></svg>
            <h5>Rt. Hon. Lasun Yussuff Crescent, Oroki Industrial Layout Ring Road,Osogbo.</h5>
          </div>

          <div className="telephone">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8q-2.5-2.5-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21h-1.05Z"/></svg>
            <h5>+2 345 678 90</h5>
          </div>
          <div className="mail-details">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16H2Zm10-7l8-5V6l-8 5l-8-5v2l8 5Z"/></svg>
            <h5>dynamicsmuslimshub@gmail.com</h5>
          </div>
        </div>


        <div className="contact-socials">
          <div className="facebook social">
            
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/></svg>
            <h6>facebook</h6>
            </Link>
          </div>
          <div className="twitter social">
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2z"/></svg>
              <h6>X</h6>
            </Link>
          </div>
          <div className="instag social">
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
              <h6>instagram</h6>
            </Link>
          </div>

        </div>
      </div>                  
      <div className="ticket-field">

        <div className="field-title">
          <h1>want to reserve</h1>
        </div>

        <div className="form-div">

          <form onSubmit={handleSubmit}>

            <div className="personal-input">

            
              <input 
                type="text"
                placeholder='First Name'
                onChange={handleChange}
                name='firstName'
                value={getTicket.firstName}
              />
              <input 
                type="text"
                placeholder='Last Name'
                onChange={handleChange}
                name='lastName'
                value={getTicket.lastName}
              />
              <input 
                type="number" 
                placeholder='Phone Number' 
                onChange={handleChange}
                name='phoneNumber'
                value={getTicket.phoneNumber}
              />
              <input 
                type="text" 
                placeholder='Email' 
                onChange={handleChange}
                name='email'
                value={getTicket.email}
              />
            </div>  
            <br />

            <label htmlFor='choosePlan' className='select-label' > Choose preffered event plan </label>
            <select 
              id="choosePlan"
              value={getTicket.choosePlan}
              onChange={handleChange}
              name='choosePlan'
              >

              <option value=""> -- Select plan -- </option>
              <option value="Basic card">Basic card</option>
              <option value="premium card">premium card</option>
              <option value="Silver card">Silver card</option>
            </select>
            <br />

            <textarea rows="10" cols="50" resize = "none"
              placeholder='Message'
              onChange={handleChange}
              value={getTicket.textArea}
              name='textArea'
            />
            <br />

            <button> Send</button>

          </form>

        </div>
      </div>

    </div>
  )
}
