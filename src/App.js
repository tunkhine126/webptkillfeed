import React, { useState, useEffect } from 'react';
import CharacterImage from './components/CharacterImage';
import MethodImage from './components/MethodImage';
import Loading from './components/Loading';

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
      <div className="feed mx-auto text-center">
        <h1 className="title underline text-5xl font-extrabold py-8 text-white"> Overwatch Killfeed</h1>
        { loading && (
          <Loading />
        )}
        { error ? (
          <div className="pb-4">
            <p className="text-lg text-white wrap">😭 {error}</p>
          </div>
        ) : (
          <div className="killfeed-container p-4">
            {killFeedData.map((kill) => (
              <div key={kill.source_player_id} className="flex justify-center border-4 border-red-500 p-4 mx-4">
                <div className="flex items-center">
                  <p className="sm:flex items-center">
                    <CharacterImage character={kill.source_character} player={kill.source_player_id} />
                    <MethodImage method={kill.method} damage={kill.damage}/>
                    <CharacterImage character={kill.target_character} player={kill.target_player_id} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div>
          <button className='bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded' onClick={fetchKills}>
            {error ? 'Try again': 'Next kill'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
