import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import styles from './mobileNavPanel.module.css';

export default class MobileNavPanel extends Component {
  render() {
    const { closeMenu } = this.props

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
            <h1>
              <a href="#" className={styles.link}>Allosaurus</a>
            </h1>
            <h1>
              <a href="#" className={styles.link}>Brachiosaurus</a>
            </h1>
            <h1>
              <a href="#" className={styles.link}>Edmontosaurus</a>
            </h1>
            <h1>
              <a href="#" className={styles.link}>Contact</a>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
