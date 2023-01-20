import React,{useEffect,useState} from 'react'
import Input from './Components/Input'
import Show from './Components/Show'
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [errorMessage, setErrorMessage] = useState('');
  const [search,setSearch]=useState('almora')
console.log(weatherData)

  useEffect(() => {
      const apiKey = '1fc5d58c55e742cdae555433232001 ';
      axios
        .get(` http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          setErrorMessage(error.message);
        });
    }, [search]);
  
    const handleInput=(e)=>{
      setSearch(e.target.value)
    }

  return (
    <div className="App h-screen w-screen bg-sky-200">
     <Input handleInput={handleInput}/>
     {!weatherData?(
      <div className='flex justify-center items-center bg-white w-2/6 m-auto mt-6 h-2/3 rounded-3xl'>
      <p>No Data Found</p>
      </div>
     ):(

<div className='flex justify-center items-center bg-white w-2/6 m-auto mt-6 h-2/3 rounded-3xl'>
        <div>
            <div className=' text-center relative bottom-24'>
            <h1 className='text-4xl	'>
                {search}
            </h1>
            </div>
            <div className='flex'>
                <div className='relative right-16'>
                    <h3 className='text-7xl relative bottom-9 left-8'>{weatherData.current.temp_c}</h3>
                </div>
                <div className='text-3xl relative bottom-16 left-20 '>
                    <h1 className='text-gray-700 font-semibold'>Broken </h1>
                    <h1 className='text-gray-700 font-semibold'>Clouds</h1>
                    <h3 className='text-2xl relative top-6 font-medium'>wind_kph:{weatherData.current.wind_kph}</h3>
                    <h3 className='text-2xl relative top-6 font-medium'>temp_F:{weatherData.current.temp_f}</h3>
                </div>
            </div>
            
        </div>       

    </div>
     )}
     
     </div>
  )
}

export default App
