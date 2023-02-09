import { useState } from 'react';
import './App.css';
import { heroes } from './data';

function App() {


  const [current, setCurrent] = useState(0);


  function nextSlide() {

    setCurrent(current === heroes.length-1? 0 : current+1)

  }

  function prevSlide() {

    setCurrent(current === 0? heroes.length-1 : current-1)

  }

  const list = heroes.map(hero =>
    <li  key = {hero.id} >
      <img src = {hero.imgUrl}
        alt ={hero.imgName}
        />
    </li>
  )
  return (
    <div className='full-window'>
      <h2>Marvel Heroes</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
         &#x2190;
        </div>

        <div className='image-holder'>
        {heroes.map(
          (hero, index) =>
            current === index && (
              <div key={hero.id} className="slide">
                <img src={hero.imgUrl} alt={hero.imgName} />
              </div>
            )
        )}
        </div>
        <div className="right-arrow" onClick={nextSlide}>
         &#x2192;
        </div>
        
        
      </div>
    </div>
  );

}

export default App;
