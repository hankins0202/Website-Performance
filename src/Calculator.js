import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { bottle, label, labelPrimary } from './colors';
import GaugeChart from 'react-gauge-chart';
import metal from './Media/metal.jpeg';

const Form = styled.div`
  width: 700px;
  
  div {
    padding: 12px 0px;
  }
  /* float-container {
    border: 3px solid #fff;
    padding: 20px;
}

float-child {
    width: 25%;
    float: left;
    padding: 20px;
    border: 2px solid blue;
}  */
grid-container {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px 100px 100px 100px 100px;
    padding: 20px
    margin-left: 20%;
}
  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    transform: rotate(270deg);
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 15px;
    height: 4.4px;
    cursor: pointer;
    animate: 0.2s;
    background: #03045e;
    border-radius: 5px;
  }

  input[type=range]::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 5px;
    background: url(${metal}) no-repeat center center fixed;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  /*input {
    width: 3px;
    height: 100px;
    border-radius: 5px;
    background: ${labelPrimary};
    outline: none;
    opacity: 1;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    

    :hover {
      opacity: .87;
    }


    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: url(${metal}) no-repeat center center fixed
      cursor: pointer;
      margin-top: -14px;
    }
  }*/
  output {
    color: ${labelPrimary};
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const Result = styled.div`
  color: ${label};
  font-size: 60px;
  margin: 15px 0;
  small {
    font-size: 40px;
  }
`;

const Calculator = () => {
  const [og, setOg] = useState(0);
  const [fg, setFg] = useState(0);
  const [abv, setAbv] = useState(0);

  useEffect(() => {
    setAbv(og + fg);
  }, [og, fg]);

  
  return (
    <>
    <div>
      <Form>
        <div>
        <grid-container>
          <output>2</output>
          <output>2</output>
        </grid-container>
        <grid-container>
          <input
            type="range" 
            orient="vertical"
            min="0"
            max="2"
            step="1"
            value={og}
            onChange={e => setOg(parseFloat(e.target.value))}
          />
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={fg}
            onChange={e => setFg(parseFloat(e.target.value))}
          />
        </grid-container>
        <grid-container>
          <output>2</output>
          <output>2</output>
          <output>2</output>
          <output>2</output>
        </grid-container>
        <grid-container>
          <input
            type="range" 
            orient="vertical"
            min="0"
            max="2"
            step="1"
            value={og}
            onChange={e => setOg(parseFloat(e.target.value))}
          />
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={fg}
            onChange={e => setFg(parseFloat(e.target.value))}
          />
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={fg}
            onChange={e => setFg(parseFloat(e.target.value))}
          />
          <input
          type="range"
          min="0"
          max="2"
          step="1"
          value={fg}
          onChange={e => setFg(parseFloat(e.target.value))}
        />
        </grid-container>
        </div>
      </Form>
      </div>

      <GaugeChart
        id="gc"
        style={{ height: '100px', margin: '25px' }}
        nrOfLevels={20}
        colors={[bottle, labelPrimary]}
        arcWidth={.085}
        needleColor={labelPrimary}
        needleBaseColor={labelPrimary}
        percent={abv/4}
        formatTextValue={() => ''}
      />
      <Result>
        {(abv/4)*100}%
      </Result>
    </>
  );
};

export default Calculator;
