import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { rocket} from './queries';
import { useQuery } from '@apollo/client';



function Card(){
  const { loading, error, data } = useQuery(rocket);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

return (
  <div className="cards">
    <h1>Ahhhhh</h1>
    {data.launchesPast.map(({ mission_name, details }) => (
      <div key={mission_name}>
        <h1>{mission_name}</h1>
        <p>{details}</p>
        
      </div>
    ))}
  </div>
);
}

export default Card;
