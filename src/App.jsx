import './App.css'
// import Navbar from './components/DaisyNav/Navbar';
import MyNav from './components/DaisyNav/MyNav';
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineCharts from './components/LineChart/LineCharts';

function App() {


  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Vite + React</h1>
      <MyNav></MyNav>
      {/* <Navbar></Navbar> */}
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>


    </>
  )
}

export default App
