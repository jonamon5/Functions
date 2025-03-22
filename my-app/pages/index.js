import dummyData from '../data/dummyData.json';
import axios from 'axios';

// API GET REQUEST FOR CURRENT USER DATA
export async function getServerSideProps() {
  const response = await axios.get('https://sleephq.com/api/v1/me', {
    headers: {
      'accept': 'application/vnd.api+json',
      'authorization': 'Bearer r5edXo23zXY1DrS_yUjLREz0Jiu66PKYFHuEdua0pY4'
    }
  });

  const userData = response.data;
  console.log('userData', userData);

  return {
    props: { userData } // Return userData as a prop
  };
}

// DISPLAY DATA ON HOME PAGE 
export default function Home({ userData }) {

  console.log('userData', userData.data);

  const data = dummyData;
 
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
