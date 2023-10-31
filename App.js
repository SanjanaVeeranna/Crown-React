import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <navigator>
    <nav class="main-nav">
      <div class="main-container main-nav--main-container">
        <div class="main-nav__brand-logo-cont">
        <img src="https://d33wubrfki0l68.cloudfront.net/deafe47e0ea96b853fe7b4131a5674263f601ec2/1d342/assets/img/crown.png" alt="brand-logo" class="main-nav__brand-logo"/>
        </div>
          <span class="main-nav__sm-scr-menu-icon-cont nav-menu">
            <img src="https://d33wubrfki0l68.cloudfront.net/e2bd4840c3c4361d3c84f8f84b896b41c3794e81/1c9b2/assets/img/ham-menu-1.png" alt="menu-icon" class="main-nav__sm-scr-menu-icon"/>
          </span>
      </div>
    </nav>
      <div class="fl-scr-menu none">
          <div class="main-container">
            <div class="icon-cont menu-close">
              <img src="https://d33wubrfki0l68.cloudfront.net/6d6318d9347179ecbe3298bc8d52ab3484f656dc/bd332/assets/img/close.png" alt="close-icon"/>
            </div>
            <ul class="links">
              <li class="heading link">
                <a href="home.html">Home</a>
              </li>
              <li class="heading link">
                <a href="menu.html">Menu</a>
              </li>
              <li class="heading link">
                <a href="about.html">About</a>
              </li>
              <li class="heading link">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <header class="home-header">
          <div class="content">
            <div>
              <h1 class="heading heading-primary home-header--heading-primary">
                DELICIOUS FOOD
              </h1>
              <p class="text text-primary home-header--text-primary">
                Crown is a restaurant, bar and coffee
                roastery located in Bangalore
              </p>
              <button class="btn home-header--btn">ORDER ONLINE</button>
            </div>
          </div>
          
        </header>
    </navigator>
        
  );
}

export default App;
