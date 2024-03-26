import React from 'react'
import './scrollContent.css';

export default function scrollContent() {
  const vjk='https://www.behindwoods.com/tamil-movies/slideshow/when-kollywood-heroes-turned-teachers/images/vijayakanth-in-ramana.jpg';
  const Nithii = 'https://media.tenor.com/izXgobJNe4UAAAAC/its-time-to-celebrate-ajith-bday-thala-ajith.gif';
  const gs = 'https://media.tenor.com/fRSVfm6M0ncAAAAC/gwen-amazing-spiderman.gif';
  const women = 'https://media3.giphy.com/media/I6n8YSKRIJqPwGll4n/200.gif?cid=82a1493bcnsldqkrf5rgnscgt66oqs9c8x3f0nkxscj6p8ox&ep=v1_gifs_related&rid=200.gif&ct=g';
  const vk = 'https://media.tenor.com/2GmiDEUn9AgAAAAd/virat-kohli-water-boy.gif';
  const ambala ='https://media.tenor.com/-vOVw311GX4AAAAd/tenor.gif';
  const rajni = 'https://media.tenor.com/-BnYl4C3bv4AAAAC/jailer-rajnikanth.gif';
  
  return (
        <div className='offers-main'>
            <div className='offers-content'>
              <div><h2>Time Limited Offers!</h2></div>
            </div>
          <div className='offers-sub'>
            <div className='offers-scroll'>
                <div><a href="" className='off-anc'><img src='Bus.gif' className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={Nithii} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vjk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={Nithii} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={gs} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={women} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={vk} className='vjk'></img></a></div>
                <div><a href="" className='off-anc'><img src={ambala} className='vjk'></img></a></div>
                
            </div>
          </div>
       </div>
  )
}



