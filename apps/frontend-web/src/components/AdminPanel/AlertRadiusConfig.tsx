import React, { useState } from 'react';

const AlertRadiusConfig = () => {
  const [radius, setRadius] = useState(1000); // Default radius in meters

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(event.target.value));
  };

  const saveRadius = async () => {
    try {
      await fetch('/api/config/alert-radius', {
        method: 'POST',
        body: JSON.stringify({ radius }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Alert radius updated successfully');
    } catch (error) {
      console.error('Failed to update alert radius', error);
    }
  };

  return (
    <div>
      <h2>Configure Alert Radius</h2>
      <input
        type="number"
        value={radius}
        onChange={handleRadiusChange}
        placeholder="Enter radius in meters"
      />
      <button onClick={saveRadius}>Save</button>
    </div>
  );
};

export default AlertRadiusConfig;