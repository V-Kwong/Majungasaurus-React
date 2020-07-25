import React, { Component } from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './App.module.css';

import Main from './screens/main';
import SticktyHeader from './components/stickyHeader';
import MobileNavPanel from './components/mobileNavPanel';
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

  openMenu = () => {
    const { mobileNavPanel } = this.refs;
    mobileNavPanel.refs.mySidenav.style.width = "100vw";
  }

  closeMenu = () => {
    const { mobileNavPanel } = this.refs;
    mobileNavPanel.refs.mySidenav.style.width = "0";
  }

  render() {
    return (
      <Scrollbars
        ref='scrollbars'
        style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
      >

        <Main/>

        <MobileNavPanel
          ref='mobileNavPanel'
          closeMenu={this.closeMenu}
        />

        <SticktyHeader
          scrollToTop={this.scrollToTop}
          openMenu={this.openMenu}
        />
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
