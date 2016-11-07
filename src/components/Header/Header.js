import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logoUrl from './logo-small.png';

const Header = () => (
  <div className={s.root}>
    <div className={s.container}>

      <Link className={s.link} to='/'>
        <img className={s.microkitLogo} src={logoUrl} alt='Cosmocat' />
      </Link>

      <Link className={s.link} to='/'>
        <span className={s.microkitLogoText}>cosmocat</span>
      </Link>

      <div className={cx(s.nav)} role='navigation'>
        <Link className={cx(s.link)} to='/login'>log in</Link>
      </div>

    </div>
  </div>
)

export default withStyles(s)(Header);
