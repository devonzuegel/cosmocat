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
          <ul className={s.news}>
            {users.map((user, index) => (
              <li key={index} className={s.newsItem}>
                <img src={user.profile.picture}></img>
                <pre className={s.codeblock}>{JSON.stringify(user, null, '\t')}</pre>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default withStyles(s)(Home);
