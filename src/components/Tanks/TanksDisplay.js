import React, { useState, useEffect } from 'react';
import api from '../../api'; // Importa el archivo api.js

const TanksDisplay = () => {
  const [tank1Fluid, setTank1Fluid] = useState(0);
  const [tank2Fluid, setTank2Fluid] = useState(0);

  useEffect(() => {
    const fetchFluidData = async () => {
      try {
        const response = await api.get('/level-tank');
        setTank1Fluid(response.data.tank1Fluid);
        setTank2Fluid(response.data.tank2Fluid);
      } catch (err) {
        console.error('Error fetching fluid data', err);
      }
    };

    fetchFluidData();
    
    const interval = setInterval(fetchFluidData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tanks-display">
      <h2>Fluid Levels</h2>
      <div className="tank-container">
        <div className="tank">
          <h3>Tank 1</h3>
          <p>Fluid Level: {tank1Fluid} L</p>
        </div>
        <div className="tank">
          <h3>Tank 2</h3>
          <p>Fluid Level: {tank2Fluid} L</p>
        </div>
      </div>
    </div>
  );
};

export default TanksDisplay;
