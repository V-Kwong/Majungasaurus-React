import React, { Component } from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './App.module.css';

import Main from './screens/main';
import StickyHeader from './components/stickyHeader';
import MobileNavPanel from './components/mobileNavPanel';
import About from './screens/about';
import StickyFooter from './components/stickyFooter';
import Product from './screens/product';
import Contact from './screens/contact';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.scrollbars = React.createRef();
    this.mobileNavPanel = React.createRef();
    this.home = React.createRef();
    this.allosaurus = React.createRef();
    this.brachiosaurus = React.createRef();
    this.edmontosaurus = React.createRef();
    this.contact = React.createRef();

    this.state = {
      activePage: 'home'
    }
    // this.state = { width: 0, height: 0 };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.appHeight()
  }

  
  componentDidMount() {
    // this.updateWindowDimensions();
    window.addEventListener('resize', this.appHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.appHeight);
  }

  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  //   console.log('width: ' + window.innerWidth)
  //   console.log('height: ' + window.innerHeight)
  // }

  appHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  onScroll = (event) => {
    let scrollTop = event.target.scrollTop
    if (scrollTop >= this.contact.current.offsetTop) {
      this.setState({ activePage: 'contact' })
    } else if (scrollTop >= this.edmontosaurus.current.offsetTop) {
      this.setState({ activePage: 'edmontosaurus' })
    } else if (scrollTop >= this.brachiosaurus.current.offsetTop) {
      this.setState({ activePage: 'brachiosaurus' })
    } else if (scrollTop >= this.allosaurus.current.offsetTop) {
      this.setState({ activePage: 'allosaurus' })
    } else {
      this.setState({ activePage: 'home' })
    }
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
        className={styles.scrollbars}
        autoHide
        onScroll={this.onScroll}
      >

        <div ref={this.home}></div>
        <Main/>

        <MobileNavPanel
          ref={this.mobileNavPanel}
          closeMenu={this.closeMenu}
          scrollTo={this.scrollTo}

          activePage={this.state.activePage}

          mainRef={this.home}
          allosaurusRef={this.allosaurus}
          brachiosaurusRef={this.brachiosaurus}
          edmontosaurusRef={this.edmontosaurus}
          contactRef={this.contact}
        />

        <div ref={this.allosaurus}></div>
        <StickyHeader
          scrollToTop={() => this.scrollTo(this.home)}
          openMenu={this.openMenu}
        />
        <About/>

        <div className={styles.sideMenuContainer}>
          <ul>
            <li 
              className={ this.state.activePage === 'home' ? styles.active : '' }
              onClick={() => this.scrollTo(this.home)}
            >
              Home
            </li>
            <li 
              className={ this.state.activePage === 'allosaurus' ? styles.active : '' }
              onClick={() => this.scrollTo(this.allosaurus)}
            >
              Allosaurus
            </li>
            <li 
              className={ this.state.activePage === 'brachiosaurus' ? styles.active : '' }
              onClick={() => this.scrollTo(this.brachiosaurus)}
            >
              Brachiosaurus
            </li>
            <li
              className={ this.state.activePage === 'edmontosaurus' ? styles.active : '' }
              onClick={() => this.scrollTo(this.edmontosaurus)}
            >
              Edmontosaurus
            </li>
            <li
              className={ this.state.activePage === 'contact' ? styles.active : '' }
              onClick={() => this.scrollTo(this.contact)}
            >
              Contact
            </li>
          </ul>
        </div>

        <StickyFooter/>

        <div ref={this.brachiosaurus} className="pageDividerTop"/>
        <Product
          title='Brachiosaurus'
          text='Most Iconic and initially thought to be one of the Largest Dinosaurs.'
        />
        <div className="pageDividerBottom"/>

        <div ref={this.edmontosaurus} className="pageDividerTop"/>
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
