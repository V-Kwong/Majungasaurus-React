import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import styles from './mobileNavPanel.module.css';

export default class MobileNavPanel extends Component {
  render() {
    const { closeMenu, scrollTo, mainRef, allosaurusRef, brachiosaurusRef, edmontosaurusRef, contactRef } = this.props

    return (
      <div>
        <div ref='overlay' className={styles.overlay} onClick={closeMenu}/>
        <div ref='navPanel' className={styles.sidenav}>
          <div className={styles.closeIconContainer}>
            <span className={styles.closeIconCircle} onClick={closeMenu}>
              <CloseIcon
                className={styles.closeIcon}
                fontSize='large'
                color='inherit'
              />
            </span>
          </div>
          <div className={styles.linkContainer}>
            <a 
              className={styles.link}
              onClick={() => {
                closeMenu()
                scrollTo(mainRef)
              }}
            >
              Home
            </a>
            <a 
              className={styles.link}
              onClick={() => {
                closeMenu()
                scrollTo(allosaurusRef)
              }}
            >
              Allosaurus
            </a>
            <a
              className={styles.link}
              onClick={() => {
                closeMenu()
                scrollTo(brachiosaurusRef)
              }}
            >
              Brachiosaurus
            </a>
            <a
              className={styles.link}
              onClick={() => {
                closeMenu()
                scrollTo(edmontosaurusRef)
              }}
            >
              Edmontosaurus
            </a>
            <a
              className={styles.link}
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
