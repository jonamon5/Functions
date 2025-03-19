import dummyData from '../data/dummyData.json';

export default function Home() {

const data = dummyData;

  console.log("data",data);

  return (

    <div className="title">
      <h1>CPAP Sleep Apnea Insights</h1>
      <ul>
        <li>Average AHI per Night: {data.summary.averageAHIperNight}</li>
        <li>Average Pressure: {data.summary.averagePressure}</li>
        <li>Average Leak Rate: {data.summary.averageLeakRate}</li>
        <li>Daily Usage Hours:{data.summary.dailyUsageHours}</li>
      </ul>
    </div>
    
  );
}
