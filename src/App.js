import React, { Component } from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './App.module.css';

import Main from './screens/main';
import SticktyHeader from './components/stickyHeader';
import About from './screens/about';
import SticktyFooter from './components/stickyFooter';
import Product from './screens/product';
import Contact from './screens/contact';

export default class App extends Component {

  scrollToTop = () => {
    const { scrollbars } = this.refs;
    scrollbars.view.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <Scrollbars
        ref='scrollbars'
        style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
      >

        <Main/>
      
        {/* <Menu>
          <span>
            <MenuRoundedIcon/>
          </span>
        </Menu> */}

        {/* <ul id="menu">
          <li data-menuanchor="allosaurus" class="active"><a href="#allosaurus">Allosaurus</a></li>
          <li data-menuanchor="brachiosaurus"><a href="#brachiosaurus">Brachiosaurus</a></li>
          <li data-menuanchor="edmontosaurus"><a href="#edmontosaurus">Edmontosaurus</a></li>
          <li data-menuanchor="contact"><a href="#contact">Contact</a></li>
        </ul> */}

        <SticktyHeader scrollToTop={this.scrollToTop}/>
        <About/>
        <SticktyFooter/>

        <div className="pageDividerTop"/>
        <Product
          title='Brachiosaurus'
          text='Most Iconic and initially thought to be one of the Largest Dinosaurs.'
        />
        <div className="pageDividerBottom"/>

        <div className="pageDividerTop"/>
        <Product
          title='Edmontosaurus'
          text='Herbivore that could move on both Two Legs and Four. Flex.'
        />
        <div className="pageDividerBottom"/>

        <div className="pageDividerTop"/>
        <Contact/>
        <div className="pageDividerBottom"/>
        
      </Scrollbars>
    )
  }
}
