import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './App.css'
import TicketPage from './pages/TicketPage';
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout'
import Signup from './pages/SignupPage';
import Error404 from './pages/Error404';
import GetTicket from './pages/GetTicket';
import TermsPage from './pages/TermsPage';
import RefundPolicy from './pages/RefundPolicy';



function App() {

  


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout/>}> 
            <Route  index element={ <Homepage /> } />
            <Route  path='ticket' element={<TicketPage/>} />
            <Route  path='login&signup' element={<LoginPage/>} />
            <Route  path='signupPage' element={<Signup/>} />
            <Route  path='get-ticket' element={<GetTicket/>} />
            <Route  path='terms&condition' element={<TermsPage/>} />
            <Route  path='refund-policy' element={<RefundPolicy/>} />
            <Route  path='/*' element={<Error404/>} />
          </Route>
        </Routes>
        {/* <Homepage/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
