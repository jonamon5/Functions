import dummyData from '../data/dummyData.json';

export default function Home() {

  const data = dummyData;
  console.log("data", data);

  return (

    <div>

      <div className='header'>
        <h1 className="title">SleepVantage</h1>
        <p>SleepVantage is a smart sleep apnea assistant that provides actionable insights for you, improving your CPAP therapy </p>
      </div>

      <div className='core-stats-section'>

        <div className='ahi'>
          <p className='stats-title'> Average AHI per Night:</p>
          <p className='stats'>{data.summary.averageAHIperNight}</p>
        </div>

        <div className='pressure'>
          <p className='stats-title'>Average Pressure</p>
          <p className='stats'>{data.summary.averagePressure}</p>
        </div>

        <div className='leak-rate'>
          <p className='stats-title'>Average Leak Rate</p>
          <p className='stats'>{data.summary.averageLeakRate}</p>
        </div>

        <div className='usage'>
          <p className='stats-title'>Daily Usage Hours</p>
          <p className='stats'>{data.summary.dailyUsageHours}</p>
        </div>
      </div>

    </div>

  );
}
