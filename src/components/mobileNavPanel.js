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
          <a href="#">Allosaurus</a>
          <a href="#">Brachiosaurus</a>
          <a href="#">Edmontosaurus</a>
          <a href="#">Contact</a>
        </div>
      </div>
    )
  }
}
