import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';

function Home({ users }) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>React.js News!!</h1>
          <pre>
            {JSON.stringify(users, null, '  ')}
          </pre>
        </div>
      </div>
    </Layout>
  );
}

export default withStyles(s)(Home);
