import React, {useEffect} from 'react';
import Header from './Header';


const FunFactCard = ({ factData }) => {
    const { funFact } = factData;
  
    return (
        <>
        <div className="fact-card__fact">
          <h3>Did you know...</h3>
          <p>{funFact}</p>
        </div>
        </>
    );
  };
  
  export default FunFactCard;