import React from "react";
import GrindSize from "../component/grindSize";

function ChooseSize({ grindsize, setCurrentGrindSize }) {
  return (
    <div>
      <h1>Choose grind size</h1>

      <div className='tap'>
        <div className='tap__selections'>
          {grindsize.map((grindsize) => (
            <GrindSize
              grindsize={grindsize}
              setCurrentGrindSize={setCurrentGrindSize}
              id={grindsize.id}
              key={grindsize.id}
            />
          ))}
        </div>
      </div>

      <div className='info'>
        <h2>What to know</h2>
        <div className='info__box'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            perspiciatis nisi alias aliquid, iure saepe sint modi dolorem
            placeat debitis! Nostrum autem, ex nobis tenetur cumque similique
            totam facere inventore?
          </p>
        </div>
      </div>

      <div className='info'>
        <h2>Suggested products</h2>
        <div className='info__box'>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default ChooseSize;
