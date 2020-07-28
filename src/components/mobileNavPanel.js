import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import styles from './mobileNavPanel.module.css';
import { MaterialHoverIcon } from './materialHoverIcon';
import { NavPanelLink } from './navPanelLink';

export default class MobileNavPanel extends Component {
  render() {
    const { closeMenu, scrollTo, mainRef, allosaurusRef, brachiosaurusRef, edmontosaurusRef, contactRef } = this.props

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
            <NavPanelLink
              onClick={() => {
                closeMenu()
                scrollTo(mainRef)
              }}
            >
              Home
            </NavPanelLink>
            <NavPanelLink
              onClick={() => {
                closeMenu()
                scrollTo(allosaurusRef)
              }}
            >
              Allosaurus
            </NavPanelLink>
            <NavPanelLink
              onClick={() => {
                closeMenu()
                scrollTo(brachiosaurusRef)
              }}
            >
              Brachiosaurus
            </NavPanelLink>
            <NavPanelLink
              onClick={() => {
                closeMenu()
                scrollTo(edmontosaurusRef)
              }}
            >
              Edmontosaurus
            </NavPanelLink>
            <NavPanelLink
              onClick={() => {
                closeMenu()
                scrollTo(contactRef)
              }}
            >
              Contact
            </NavPanelLink>
          </div>
        </div>
      </div>
    )
  }
}
