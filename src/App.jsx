

function App() {

  return (
    <div className="machine">
      <div className="camera"></div>
      <div className="main">
        <div className="leftButtonPanel">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="screen"></div>
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
