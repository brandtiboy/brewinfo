// Imports
import React from "react";
import { Link } from "react-router-dom";

function Frontpage({ currentGrindSize, grindamount, water }) {
  return (
    <div>
      <header>
        <h1>Brewinfo</h1>
      </header>

      <div className='quote'>
        <span>“I want someone to look at me the way i look at coffee”</span>
      </div>

      <div className='tap'>
        <h2>Tap to change</h2>
        <div className='tap__selections'>
          <Link to='/grindsize'>
            <div className='tap__size tap__selection'>
              <p>{currentGrindSize.name}</p>
              <span>Grind size</span>
            </div>
          </Link>
          <div className='tap__amount tap__selection'>
            <p>{grindamount}</p>
            <span>Grind amount</span>
          </div>
          <div className='tap__water tap__selection'>
            <p>{water}</p>
            <span>Water</span>
          </div>
        </div>
      </div>

      <div className='start'>
        <div className='start__icon'>icon</div>
      </div>

      <div className='steps'>
        <h2>Steps to follow</h2>
        <div className='steps__container'>
          <p className='is-active'>
            Pour over 50g of water until the coffee is covered
          </p>
          <p>Wait until coffee is bloomed</p>
          <p>Pour over 50g of water in a rotation</p>
          <p>Wait until water is through and pour over 150g of water</p>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
