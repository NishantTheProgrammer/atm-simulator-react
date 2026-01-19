import { useEffect, useState } from 'react';
import ad1 from './assets/ads/ad1.jpg';
import ad2 from './assets/ads/ad2.jpg';
import ad3 from './assets/ads/ad3.jpg';
import ad4 from './assets/ads/ad4.jpg';

const ads = [ad1, ad2, ad3, ad4]

function App() {

  const [adIndex, setAdIndex] = useState(0);
  const ad = ads[adIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setAdIndex(i => i == ads.length ? 0 : i + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="machine">
      <p>{ adIndex}</p>
      <div className="camera"></div>
      <div className="main">
        <div className="leftButtonPanel">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="screen" style={{ backgroundImage: `url(${ad})` }}></div>
        <div className="rightButtonPanel">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="operatorPanel">
        <div className="recipt">
          <div className="upperArc"></div>
        </div>
        <div className="numpadArea">
          <div className="numpad">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button style={{ backgroundColor: 'yellow', fontSize: '0.6rem' }}>Clear</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button style={{ backgroundColor: 'red', fontSize: '0.6rem' }}>Cancel</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button style={{ backgroundColor: 'green', fontSize: '0.6rem' }}>Enter</button>

            <button></button>
            <button>0</button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="cardAccepter">
          <div className="fingerSpace">
            <div className="cardReader"></div>
          </div>
          <input type="file" accept=".txt" className="cardFile" />

        </div>
      </div>
      <div className="divider"></div>
      <div className="cashCollector">
        <div className="shutter">
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
        </div>
      </div>
    </div>
  )
}

export default App
