import React, { useState, useEffect } from 'react';
import { Element, Link } from 'react-scroll';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@material-ui/core/Drawer";
import Paper from '@mui/material/Paper';

//Images
import imageUrl from './resources/WeFrames.jpg'
import imageEnder from './resources/Ender3.png'
import marioAcosta from './resources/Mario\'sProfilePhoto.jpg';
import mariaJose from './resources/Majo\'sProfilePhoto.jpg';



import { Fade } from '@material-ui/core';
import { Grid } from '@material-ui/core';

//Avatars
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';



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
              <Fade in={true} timeout={1000}>
                <Paper elevation={16} style={{ height: "70%", width: "70%", backgroundColor: '#f5f5f5', padding: '32px', borderRadius: '50px' }} >
                  <h1>What do we do?</h1>
                  <p>
                    We are a prohumanitarian organization with the goal of helping as many kids and elderly to improve there life by having a
                    more affordable vision.
                  </p>
                  <img src={imageUrl} />
                </Paper>
              </Fade>
            </Element>

            {/* SECTION 2 */}
            <Element name="section2" className="section2" style={{ position: 'relative' }}>
              <Paper
                elevation={16}
                style={{
                  height: "70%",
                  width: "70%",
                  backgroundColor: '#f5f5f5',
                  padding: '32px',
                  borderRadius: '50px',
                  float: 'left',
                }}
              >
                <Grid container spacing={12}>

                  <Grid item xl={12} xs={12} md={12} lg={12}>
                    <Typography variant="h2" style={{ paddingLeft: '10%', paddingRight: '10%', color: '#587D71' }}>
                      How we do it?
                    </Typography>
                  </Grid>
                  <Grid item xl={6} xs={12} md={6} lg={6}>
                    <Typography variant="h2" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                      <p style={{ marginRight: '16px', width: '70%', marginBottom: '1em' }}>
                        We use 3D printing to quickly design and build the frames.
                        <span style={{ display: 'block', height: 'px' }}></span>
                        3D printing is like playing with Lego blocks. You can stack different blocks on top of each other to make a cool shapes or objects.
                        With 3D printing, instead of blocks, we use a special machine that can put together tiny bits of plastic or other materials, layer by layer, to create the shape we want.
                      </p>
                    </Typography>
                  </Grid>
                  <Grid item xl={6} xs={12} md={6} lg={6}>
                    <img
                      src="https://media.tenor.com/AteWDUebhk4AAAAd/3dprint-3d-printing.gif"
                      style={{
                        // height: '25%',
                        // width: '25%',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      className="responsive-image"
                    />
                  </Grid>

                  <Grid item xl={12} xs={12} md={12} lg={12}>
                    <p style={{ marginRight: '16px', width: '100%', marginBottom: '1em' }}>
                      We use 3D printing to quickly design and build the frames.
                      <span style={{ display: 'block', height: '20px' }}></span>
                      3D printing is like playing with Lego blocks. You can stack different blocks on top of each other to make a cool shapes or objects.
                      With 3D printing, instead of blocks, we use a special machine that can put together tiny bits of plastic or other materials, layer by layer, to create the shape we want.
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Element>
            <Grid container direction={'row'} className="section3">
              <Grid item xl={6} xs={12} md={6} lg={6}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '75%',
                }}>
                <Paper style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  alignItems: 'center',
                  height: '100%',
                  background: "linear-gradient(green 1px, transparent 1px), linear-gradient(90deg, green 1px, transparent 1px)",
                }}>
                  <Stack direction="row" style={{ position: 'absolute', top: '15%' }}>
                    <Avatar alt="Majo Cespedes" src={marioAcosta} style={{ width: '200px', height: '200px' }} />
                  </Stack>
                  <Typography variant="h2" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <p>
                      Hi, my name is Mario Acosta. I am a Mechanical Engineer. I am passionate of doing creative work by using technologies like 3D printing and software development.
                    </p>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xl={6} xs={12} md={6} lg={6}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '75%',
                }}>
                <Paper style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  alignItems: 'center',
                  height: '100%',
                  background: "linear-gradient(green 1px, transparent 1px), linear-gradient(90deg, green 1px, transparent 1px)",
                }}>
                  <Stack direction="row" style={{ position: 'absolute', top: '15%' }}>
                    <Avatar alt="Majo Cespedes" src={mariaJose} style={{ width: '200px', height: '200px' }} />
                  </Stack>
                  <Typography variant="h2" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <p>
                      Hi, my name is Mario Acosta. I am a Mechanical Engineer. I am passionate of doing creative work by using technologies like 3D printing and software development.
                    </p>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div >
      )
      }
    </div >
  );
}

export default App;


