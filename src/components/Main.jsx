import React from 'react';
import videobg from '../assets/videobg.mov';


const CircularButton = ({ onClick, children }) => {
  return (
    <button className="circular-button" onClick={onClick}>
      {children}
    </button>
  );
};

const Main = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className='main'>
      <video src={videobg} autoPlay loop muted />
      <div className='text'>
        <h1>Signify</h1>
        </div>
        <div className='button-container'>
        <CircularButton onClick={handleClick}>TRANSLATE <br></br>NOW</CircularButton>
        </div>
    </div>
  );
};

export default Main;
