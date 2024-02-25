import { Link } from 'react-router-dom';
import { Button } from './dyslexiaGame/Button';
import './Game1Instructions.css'

const Game2Instructions = () => {
  return (
    <div className='game1Container'>
      <div>
        <div className="App">
          <h1 className="heading">Game 2</h1>
        </div>
        <div className="App1">
          <h2 className="content">Find the &apos;F&apos; among the &apos;E&apos;</h2>
        </div>
      </div>
      <Link to='/game2Play' class="content">
          <Button>CLICK HERE</Button>
      </Link>
    </div>
  )
}

export default Game2Instructions;
