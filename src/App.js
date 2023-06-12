import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [killFeedData, setKillFeedData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchKills();
  }, [])

  const fetchKills = async () => {
    try {
      setLoading(true);
      setKillFeedData([]);
      setError('');
  
      const response = await fetch('http://interview.wptdev.com/api/killfeed');
      const data = await response.json();
  
      if (data.status === 'successful') {
        console.log('data:', data.payload)
        setKillFeedData(data.payload);
      } else {
        console.error('Error fetching kill feed data:', data);
        setError('Error fetching kill feed data. Please try again.');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('Unexpected error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper bg-black min-h-screen">
      {killFeedData.map((kill => {
        <div className="kill-feed-container" key={kill.source_player_id}>

        </div>
      }))}
      <div>
        <button className='bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded' onClick={fetchKills}>
          {error ? 'Try again': 'Next kill'}
        </button>
      </div>
    </div>
  );
}

export default App;
