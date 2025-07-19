import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-container'>
      <h1 className='title'>Tic-Tac-Toe Game</h1 >
      <h3 className='play-btn-div'><button className='play-btn' onClick={()=>navigate('/game')}>▶️</button></h3>
    </div>
  )
}

export default Home
