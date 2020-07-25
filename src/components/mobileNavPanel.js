import React, { Component } from 'react';

import styles from './mobileNavPanel.module.css';

export default class MobileNavPanel extends Component {
  render() {
    const { closeMenu } = this.props

    return (
      <div ref='mySidenav' className={styles.sidenav}>
        <a href="javascript:void(0)" className={styles.closebtn} onClick={closeMenu}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
  }
}
