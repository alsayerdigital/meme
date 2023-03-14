import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './Meme.css'
import memeData from './memeData'

export default function Meme() {
  const [loadImg,setLoadImg] = useState("")
  function showImage(e){
    e.preventDefault();
    const memeArr = memeData.data.memes;
    const randomMeme = Math.floor(Math.random() * memeArr.length)
    console.log(memeArr[randomMeme].url)
    setLoadImg(memeArr[randomMeme].url)
  }
  return (
    <main>
        <form className='form' onSubmit={showImage}>
            <input type="text" placeholder ="Top Text" className="form--input"/>
            <input type="text" placeholder ="Bottom Text" className="form--input"/>
            <button type="submit" className='form--button' >Submit</button>
            <img src={loadImg}></img>
        </form>
    </main>
  )
}


