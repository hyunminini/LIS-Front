import React, {useState, useRef, useEffect} from 'react';
import Scanner from './Scanner';
import Result from './Result';

const Scan = ({scanning, buttonForPatientInfo}) => {

  const [results, setResults] = useState([]);
  const scannerRef = useRef(null);


  return (
    <div>
      {/*<button className={'patient-input-btn'} onClick={() => setScanning(!scanning)}>{scanning ? 'Stop' : 'Start'}</button>*/}
      <ul className="results">
        {results.map((result) => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
      </ul>
      <div ref={scannerRef} style={{ position: 'relative', marginLeft: '15px'}}>
        {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
        <canvas className="drawingBuffer" style={{
          position: 'absolute',
          top: '0px',
        }} width="500px" height="300px" />
        {scanning ? <Scanner
            scannerRef={scannerRef}
            onDetected={(result) => setResults([...results, result])}
            buttonForPatientInfo={buttonForPatientInfo} /> : null}
      </div>
    </div>
  );
};

export default Scan;