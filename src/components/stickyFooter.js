import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import styles from './sticktyFooter.module.css';

export default class SticktyFooter extends Component {
  render() {
    return (
      <div className={["pageDividerBottom", styles.container].join(' ')}>
        <div className={styles.social}>
          <a href="https://www.youtube.com/watch?v=_65kfGhZXZw" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIconCircle}>
              <FacebookIcon
                className={styles.socialIcon}
                fontSize='small'
                color='inherit'
              />
            </span>
          </a>
          <a href="https://www.youtube.com/watch?v=_65kfGhZXZw" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIconCircle}>
              <TwitterIcon
                className={styles.socialIcon}
                fontSize='small'
                color='inherit'
              />
            </span>
          </a>
          <a href="https://www.youtube.com/watch?v=_65kfGhZXZw" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIconCircle}>
              <InstagramIcon
                className={styles.socialIcon}
                fontSize='small'
                color='inherit'
              />
            </span>
          </a>
        </div>
        <div>
          <p className={styles.copyright}> © 2020 Majungasaurus. All rights reserved.</p>
        </div>
      </div>
    )
  }
}
