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
  constructor(props) {
    super(props);

    this.scrollbars = React.createRef();
    this.mobileNavPanel = React.createRef();
    this.main = React.createRef();
    this.allosaurus = React.createRef();
    this.brachiosaurus = React.createRef();
    this.edmontosaurus = React.createRef();
    this.contact = React.createRef();
  }

  scrollTo = (ref) => {
    this.scrollbars.current.view.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

  openMenu = () => {
    this.mobileNavPanel.current.refs.navPanel.style.width = '250px';
    this.mobileNavPanel.current.refs.overlay.style.width = '100%';
    this.mobileNavPanel.current.refs.overlay.style.opacity = '0.8';
  }

  closeMenu = () => {
    this.mobileNavPanel.current.refs.navPanel.style.width = '0';
    this.mobileNavPanel.current.refs.overlay.style.opacity = '0';
    setTimeout(() => {
      this.mobileNavPanel.current.refs.overlay.style.width = '0';
    }, 505);
  }

  render() {
    return (
      <Scrollbars
        ref={this.scrollbars}
        style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}
      >

        <div ref={this.main}></div>
        <Main/>

        <MobileNavPanel
          ref={this.mobileNavPanel}
          closeMenu={this.closeMenu}
        />

        <div ref={this.allosaurus}></div>
        <SticktyHeader
          scrollToTop={() => this.scrollTo(this.main)}
          openMenu={this.openMenu}
        />
        <About/>
        <SticktyFooter/>

        <div ref={this.brachiosaurus} className="pageDividerTop"/>
        <Product
          title='Brachiosaurus'
          text='Most Iconic and initially thought to be one of the Largest Dinosaurs.'
        />
        <div className="pageDividerBottom"/>

        <div ref={this.edmontosaurus} ref='edmontosaurus' className="pageDividerTop"/>
        <Product
          title='Edmontosaurus'
          text='Herbivore that could move on both Two Legs and Four. Flex.'
        />
        <div className="pageDividerBottom"/>

        <div ref={this.contact} className="pageDividerTop"/>
        <Contact/>
        <div className="pageDividerBottom"/>

      </Scrollbars>
    )
  }
}
