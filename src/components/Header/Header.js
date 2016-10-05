/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import logoUrl from './logo-small.png';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>

        <div className={cx(s.root, s.nav)} role="navigation">
          <Link className={s.link} to="/about">About</Link>
          <Link className={s.link} to="/contact">Contact</Link>
          <Link className={cx(s.link, s.highlight)} to="/login">Log in</Link>
        </div>

        <Link className={s.link} to="/">Dashboard</Link>

      </div>
    </div>
  );
}

export default withStyles(s)(Header);
