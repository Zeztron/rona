import { useState, useEffect } from 'react';

export default function useStats() {
  const [stats, setStats] = useState();
  useEffect(() => {
    async function fetchData() {
      console.log('fetching data...')
      const data = await fetch('https://covid19.mathdro.id/api')
        .then(response => response.json());
      setStats(data);
    }
    fetchData();
  }, []);
  return stats;
}