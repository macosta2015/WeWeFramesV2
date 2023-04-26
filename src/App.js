import React, { useState, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@material-ui/core/Drawer";
import Paper from '@mui/material/Paper';


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOn, setIsOn] = useState(false);


  //HandleClick for the responsive button
  function handleClick() {
    setIsOn(!isOn);
  }

  const handleDrawerClick = (event) => {
    // Prevent the Drawer from closing when a Link inside it is clicked
    event.stopPropagation();
  };

  //useEffect function 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <div className="App">
          {/* Beginning of the Navbar */}
          <nav>
            <div className="toggle-button">
              {/* <p>The light is {isOn ? 'on' : 'off'}</p> */}
              <MenuIcon onClick={handleClick} style={{ fontSize: 40 }} />
              {/* <Drawer open={isOn} onClick={handleDrawerClick}> */}
              <Drawer
                open={isOn}
                onClick={handleDrawerClick}
                PaperProps={{
                  style: {
                    background: '#6a8e6a',
                    width: '300px',
                    padding: '20px',
                  },
                }}
              >

                {/* Check if it is T or F */}
                {console.log(isOn)}
                {isOn ?
                  <div style={{ padding: '5%' }}>
                    <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000} offset={-70}
                      onClick={() => setIsOn(false)}
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                      What do we do?</Link>
                    <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000} offset={-70}
                      onClick={() => setIsOn(false)}
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>
                      How we do it?</Link>
                    <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000} offset={-70}
                      onClick={() => setIsOn(false)}
                      style={{
                        display: 'block',
                        margin: '10px 0',
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                      }}>Who are we?</Link>
                  </div> : 'off'}
              </Drawer>
            </div>
            <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500} offset={-70}>
              <i className="fas fa-chevron-down"></i>
            </Link>
          </nav >
          {/* End of the Navbar */}
          <div className="sections-container">
            <Element name="section1" className="section1">
              <h1>Who we are?</h1>
              <p>Content for section 1 goes here</p>
            </Element>
            <Element name="section2" className="section2">
              <h1>Section 2</h1>
              <p>Content for section 2 goes here</p>
            </Element>
            <Element name="section3" className="section3">
              <h1>Section 3</h1>
              <p>Content for section 3 goes here</p>
            </Element>
          </div>
        </div >
      ) : (
        // When it becomes a large screen
        <div className="App">
          <nav>
            <div className="nav-items">
              <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500} offset={-70}>What do we do?</Link>
              <Link activeClass="active" to="section2" spy={true} smooth={true} duration={500} offset={-70}>How we do it?</Link>
              <Link activeClass="active" to="section3" spy={true} smooth={true} duration={500} offset={-70}>Who are we?</Link>
            </div >
            <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500} offset={-70}>
              <i className="fas fa-chevron-down"></i>
            </Link>
          </nav >
          <div className="sections-container">
            <Element name="section1" className="section1">
              <Paper elevation={16} style={{ height: "70%", width: "70%", backgroundColor: '#f5f5f5', padding: '32px', borderRadius: '50px' }} >
                <h1>What do we do?</h1>
                <p>
                  We are a prohumanitarian organization with the goal of helping as many kids and elderly to improve there life by having a
                  more affordable vision.
                </p>
              </Paper>
            </Element>
            <Element name="section2" className="section2">
              <h1>How do we do it?</h1>
              <p>
                By using technology and innovative logistics methods, we are able to reduce the vision price.
              </p>
            </Element>
            <Element name="section3" className="section3">
              <h1>Who we are and why</h1>
              <p>Content for section 3 goes here</p>
            </Element>
          </div>
        </div >
      )
      }
    </div >
  );
}

export default App;


