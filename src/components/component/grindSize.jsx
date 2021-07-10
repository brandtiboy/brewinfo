import React from "react";
import { Link } from "react-router-dom";

const GrindSize = ({ grindsize, setCurrentGrindSize, id }) => {
  const handleGrindSize = () => {
    const selectedGrindSize = grindsize.filter((state) => state.id === id);
    setCurrentGrindSize({ ...selectedGrindSize[0] });
  };
  return (
    <div>
      <Link to='/'>
        <div onClick={handleGrindSize} className='tap__selection'>
          <p>{grindsize.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default GrindSize;
