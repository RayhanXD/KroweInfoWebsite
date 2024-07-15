import './App.scss';
import logo from './static/krowe_logo.png';
import rightArrow from './static/rightarrow.png';
import balance from './static/balance.png';
import people from './static/people.png';
import analysis from './static/search.png';
import money from './static/money.png';
import pie from './static/pie.png';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const letters = document.querySelectorAll('.highlight');
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.animation = 'fadeIn 1.25s forwards';
      }, index * 100); 
    });
  }, []);

  return (
    <>
      <section className='navbar'>
        <div>
         <img src={logo} alt="logo" />
         <a href='#about'>About Krowe</a>
         <a href='#products'>Products</a>
         <a href="#contact">Contact</a>
        </div>
      </section>
      <section className='home' id="home">
        <div className='title'>
          <h1>Start.<span className="highlight">Scale.</span>Sell.</h1>
          <h2><span className="highlight">Krowe</span> is your all in one <br /> business development <span className="highlight">environment</span>.</h2>
            <div className='free'>
              <h1>Try for Free</h1>
              <img src={rightArrow} alt="Arrow"></img>
            </div>
        </div>
        <div className="grid-container">
          <div className="grid-item outer">
            <div className="gradbox">
            <img src={balance} alt="Arrow"></img>
              </div> 
              <h1>Legal</h1>
          </div>
          <div className="grid-item inside">
            <div className="gradbox">
            <img src={people} alt="Arrow"></img>
              </div> 
              <h1>Productivity</h1>
          </div>
          <div className="grid-item inner">
            <div className="gradbox">
            <img src={analysis} alt="Arrow"></img>
              </div> 
              <h1>Analysis</h1>
          </div>
          <div className="grid-item inside">
            <div className="gradbox">
            <img src={money} alt="Arrow"></img>
              </div> 
              <h1>Financial</h1>
          </div>
          <div className="grid-item outer">
            <div className="gradbox">
            <img src={pie} alt="Arrow"></img>
              </div> 
              <h1>Cap Table</h1>
          </div>
        </div>
      </section>
      <section className='about' id="about"></section>
      <section className='products' id="products"></section>
      <section className='contact' id="contact"></section>
    </>
  );
}

export default App;
