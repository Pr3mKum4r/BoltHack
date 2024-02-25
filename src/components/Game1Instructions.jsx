import { Link } from 'react-router-dom';
import { Button } from './dyslexiaGame/Button';
import './Game1Instructions.css';

const Game1Instructions = () => {
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
    </div>
  )
}

export default Game1Instructions;
