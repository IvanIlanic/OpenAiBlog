import React from 'react'
import './Footer.css'
import {SiOpenai} from 'react-icons/si'
import {BsFacebook, BsReddit, BsYoutube, BsGithub, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='aiblog__footer'>
        <hr />
        <a href="https://openai.com/"><SiOpenai color='#000' className='icon'/></a>
        <ul>
            <li><a href="https://www.facebook.com/openai.research/"><BsFacebook color='#000' className='icons'/></a></li>
            <li><a href="https://twitter.com/OpenAI?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter color='#000'  className='icons'/></a></li>
            <li><a href="https://www.reddit.com/r/OpenAI/"><BsReddit color='#000'  className='icons'/></a></li>
            <li><a href="https://www.youtube.com/openai"><BsYoutube color='#000'  className='icons'/></a></li>
            <li><a href="https://github.com/openai/"><BsGithub color='#000'  className='icons'/></a></li>
        </ul>
    </div>
  )
}

export default Footer