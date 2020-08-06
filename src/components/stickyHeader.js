import React, { Component } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import styles from './stickyHeader.module.css';
import Logo from '../images/black-dinosaur-logo-clip-art-png-clip-art.png';
import { MaterialHoverIcon } from './materialHoverIcon';

export default class StickyHeader extends Component {
  render() {
    const { scrollToTop, openMenu } = this.props

    return (
      <div className={["pageDividerTop", styles.container].join(' ')}>
        <img src={Logo} className={styles.logo} alt="" onClick={scrollToTop}/>
        <div className={styles.menuContainer}>
          <MaterialHoverIcon onClick={openMenu}>
            <MenuRoundedIcon
              className={styles.menuIcon}
              fontSize='large'
              color='inherit'
            />
          </MaterialHoverIcon>
        </div>
      </div>
    )
  }
}
