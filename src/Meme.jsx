import reactLogo from './assets/react.svg'
import './Meme.css'

export default function Meme() {
  return (
    <main>
        <form className='form'>
            <input type="text" placeholder ="Top Text" className="form--input"/>
            <input type="text" placeholder ="Bottom Text" className="form--input"/>
            <button type="submit" className='form--button'>Submit</button>
        </form>
    </main>
  )
}


