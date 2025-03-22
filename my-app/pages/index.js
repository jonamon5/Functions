import dummyData from '../data/all_dates.json';
import axios from 'axios';

// FFETCH MACHINE DATA
async function fetchMachineDates() {
  try {

    const response = await axios.get('https://sleephq.com/api/v1/machines/47720/machine_dates?sort_order=desc&page=1&per_page=100', {
      headers: {
        'accept': 'application/vnd.api+json',
        'authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    });
    return response.data;

  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
    }
    return dummyData;
  }
}

// API GET REQUEST FOR MACHINE DATES
export async function getServerSideProps() {
  const machineDatesData = await fetchMachineDates();

  console.log('machineDatesData', machineDatesData);

  return {
    props: { machineDatesData }
  };
}



// DISPLAY DATA ON HOME PAGE 
export default function Home({ machineDatesData }) {

  console.log('machineDatesData', machineDatesData.data);
  console.log('data', machineDatesData);
  // Each ID is a different date, 100 in total 

  const data = machineDatesData.data;
 
  return (

    <div>

      <div className='header'>
        <h1 className="title">SleepVantage</h1>
        <p>SleepVantage is a smart sleep apnea assistant that provides actionable insights for you, improving your CPAP therapy </p>
      </div>

      <div className='core-stats-section'>

        <div className='ahi'>
          <p className='stats-title'> Average AHI per Night:</p>
          <p className='stats'>{(data[0].attributes.ahi_summary.total).toFixed(2)}</p>
        </div>

        <div className='pressure'>
          <p className='stats-title'>Average Pressure</p>
          <p className='stats'>{(data[0].attributes.pressure_summary.av).toFixed(2)}</p>
        </div>

        <div className='leak-rate'>
          <p className='stats-title'>Average Leak Rate</p>
          <p className='stats'>{(data[0].attributes.leak_rate_summary.av).toFixed(2)}</p>
        </div>

        <div className='usage'>
          <p className='stats-title'>Average EPAP</p>
          <p className='stats'>{(data[0].attributes.epap_summary.av).toFixed(2)}</p>
        </div>
        
      </div>

    </div>

  );
}
