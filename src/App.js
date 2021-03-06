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
import RetreatIdea from './components/RetreatIdea/RetreatIdea';
import Timetable from './components/Timetable/Timetable';

import yall from 'yall-js';
import Rules from './components/Rules/Rules';

function App() {
  document.addEventListener("DOMContentLoaded", yall);
  return (
    <>
      <Header/>
      <Intro/>
      <RetreatCards/>
      <Timetable/>
      <Location/>
      <RetreatIdea/>
      <Program/>
      <About/>
      <Accommodation/>
      <Pricing/>
      <Rules/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;