
import './App.css';
import Hero from './component/Hero/Hero';
import Plans from './component/Plans/Plans';
import Program from './component/Programs/Program';
import Reasons from './component/Reasons/Reasons';
import Testimonial from './component/Testimonials/Testimonial';
import Join from './component/Join/Join';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
