import React, { Component } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import styles from './sticktyHeader.module.css';
import Logo from '../images/black-dinosaur-logo-clip-art-png-clip-art.png';

export default class SticktyHeader extends Component {
  render() {
    const { scrollToTop, openMenu } = this.props

    return (
      <div className={["pageDividerTop", styles.container].join(' ')}>
        <img src={Logo} className={styles.logo} alt="" onClick={scrollToTop}/>
        <span className={styles.menuIconCircle} onClick={openMenu}>
          <MenuRoundedIcon
            className={styles.menuIcon}
            fontSize='large'
            color='inherit'
          />
        </span>
      </div>
    )
  }
}
