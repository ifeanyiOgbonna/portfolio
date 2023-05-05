import './App.css';


function App() {
  return (
    <>
      <header className="header">
        <a href="#home" className='logo'>Divine.</a>

        <nav className='navbar'>
          <a href="#home" className='active'>Home</a>
          <a href="#about">About</a>
          <a href='#service'>Service</a>
          <a href='#portfolio'>Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className='home'>
        <div className='home-content'>
          <h1>Hi, I'm Ifeanyi Ogbonna</h1>
          <h3>Frontend Developer</h3>
          <p>"I'm a frontend developer, which means I specialize in creating the visual and interactive elements of websites or applications. I work with HTML, CSS, and JavaScript to build user interfaces that are engaging, intuitive, and responsive."</p>
          <div className='btn-box'>
            <a href="mailto:ogbonna.ifybest@gmail.com">Hire Me</a>
            <a href="mailto:ogbonna.ifybest@gmail.com">Let's Talk</a>
          </div>
        </div>
        <div className='home-sci'>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7058184034132123648/"><i class='bx bxl-linkedin'></i></a>
        <a href="https://twitter.com/IfeanyiIfybest/status/1652052332715077633"><i class='bx bxl-twitter' ></i></a>
        <a href="https://medium.com/@ogbonna.ifybest/how-i-made-the-calculator-website-377d5b97910a"><i class='bx bxl-medium' ></i></a>
        </div>
        
      </section>
    </>
  );
}

export default App;

