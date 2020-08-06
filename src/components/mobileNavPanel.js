import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import styles from './mobileNavPanel.module.css';
import { MaterialHoverIcon } from './materialHoverIcon';

export default class MobileNavPanel extends Component {
  render() {
    const { closeMenu, scrollTo, activePage, mainRef, allosaurusRef, brachiosaurusRef, edmontosaurusRef, contactRef } = this.props

    return (
      <div>
        <div ref='overlay' className={styles.overlay} onClick={closeMenu}/>
        <div ref='navPanel' className={styles.sidenav}>
          <div className={styles.closeIconContainer}>
            <MaterialHoverIcon onClick={closeMenu}>
              <CloseIcon
                className={styles.closeIcon}
                fontSize='large'
                color='inherit'
              />
            </MaterialHoverIcon>
          </div>
          <div className={styles.linkContainer}>
            <a 
              className={[styles.link, activePage === 'home' ? styles.active : ''].join(' ')}
              onClick={() => {
                closeMenu()
                scrollTo(mainRef)
              }}
            >
              Home
            </a>
            <a
              className={[styles.link, activePage === 'allosaurus' ? styles.active : ''].join(' ')}
              onClick={() => {
                closeMenu()
                scrollTo(allosaurusRef)
              }}
            >
              Allosaurus
            </a>
            <a 
              className={[styles.link, activePage === 'brachiosaurus' ? styles.active : ''].join(' ')}
              onClick={() => {
                closeMenu()
                scrollTo(brachiosaurusRef)
              }}
            >
              Brachiosaurus
            </a>
            <a 
              className={[styles.link, activePage === 'edmontosaurus' ? styles.active : ''].join(' ')}
              onClick={() => {
                closeMenu()
                scrollTo(edmontosaurusRef)
              }}
            >
              Edmontosaurus
            </a>
            <a
              className={[styles.link, activePage === 'contact' ? styles.active : ''].join(' ')}
              onClick={() => {
                closeMenu()
                scrollTo(contactRef)
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    )
  }
}
