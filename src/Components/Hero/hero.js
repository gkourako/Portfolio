import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBSmoothScroll,
  
} from 'mdbreact';
import './hero.css';
import boone from './IMG_0499.png'

class Hero extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }
  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'elegant-dark-color' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed } = this.state;
    return (
      <div id='parallaxintro'>
        <Router>
          <div id="top">
            <MDBNavbar
              color='elegant-color'
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBSmoothScroll to="top">
                  <MDBNavLink to='#'>
                  <i class="fas fa-glass-whiskey white-text"></i>
                  </MDBNavLink>
                  </MDBSmoothScroll>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar scrolling>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBSmoothScroll to="work">
                      <MDBNavLink to='#work'>My Work</MDBNavLink>
                      </MDBSmoothScroll>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBSmoothScroll to="about">
                      <MDBNavLink to='#about'>About Me</MDBNavLink>
                      </MDBSmoothScroll>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView
          src={boone}
          fixed
          
        >
          <MDBMask className='rgba-white-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '15rem' }} id="#home"
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 dark-text font-weight-bold'>
                  George
                  <span className='black-text font-weight-bold'> Kourakos</span>
                </h1>
                <h4 className="black-text">Full-Stack Web Developer</h4>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 elegant-color-dark font-weight-bold'>
                  This life is a journey of learning.
                </h5>
                <MDBSmoothScroll to="work">
                <MDBBtn
                  outline 
                  color="elegant"
                  className="hoverable"
                  size='lg'
                  href='#work'
                  target='_blank'
                >
                  my Work
                </MDBBtn>
                </MDBSmoothScroll>
                <MDBSmoothScroll to="about">
                <MDBBtn
                  outline 
                  color="elegant"
                  className="hoverable"
                  size='lg'
                  href='#work'
                  target='_blank'
                >
                  About me
                </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MDBRow>
              <MDBCol md={12} className='d-flex justify-content-center align-items-center'>
              <MDBSmoothScroll to="follow">
                <a href="#follow">
              <h2 className="display-2 white-text"><i class="fas fa-arrow-down"></i></h2></a>
              </MDBSmoothScroll>
              </MDBCol>

            </MDBRow>
        </MDBView>
      </div>
    );
  }
}

export default Hero;


