import { Link } from 'react-router-dom';
import { Button } from './dyslexiaGame/Button';
import './Game1Instructions.css';
import { useEffect, useState } from 'react';

const Game1Instructions = () => {
  const [mssg, setMssg] = useState('');

  useEffect(() => {
    window.addEventListener('resize', function(){

      if(window.innerWidth <= 768){
         setMssg('*The game is not optimized for smaller devices. Please use a larger device for better experience.'); 
      }
      else{
          setMssg('');
      }
  });
  },[]);
  return (
    <div className='game1Container'>
        <div>
          <div className="App">
          <h1 className='heading'>Game 1</h1>
          </div>
          <div className="App1">
            <h2> Click on the &apos;b&apos; among the other letters</h2>
          </div>
        </div>
        <Link to='/game1Play'>
          <Button>CLICK HERE</Button>
        </Link>
        <div>
          <h1 className='text-center text-xl text-red-500'>{mssg}</h1>
        </div>
    </div>
  )
}

export default Game1Instructions;
