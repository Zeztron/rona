import useStats from '../utils/useStats';

export default function Stats() {
  const stats = useStats();
  if (!stats) return <p>Loading...</p>
  console.log(stats);
  return (
    <div>
      <div className="statsBlock">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </div>
  )
}
