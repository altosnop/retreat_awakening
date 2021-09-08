import '../src/App.css'
import About from './components/About/About';
import Accommodation from './components/Accommodation/Accommodation';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
import Location from './components/Location/Location';
import Pricing from './components/Pricing/Pricing';
import Program from './components/Program/Program';
import RetreatCards from './components/RetreatCards/RetreatCards';
import Timetable from './components/Timetable/Timetable';

function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <Program/>
      <RetreatCards/>
      <Timetable/>
      <Location/>
      <About/>
      <Accommodation/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;