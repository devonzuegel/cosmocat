import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';

function Home({ users }) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <p>
            This is a test. I am testing some text here. These are some sentences I'm writing,
            some of which will be long and others will be short. And <b>this text should be bold</b>!
          </p>
          <p>And now here is a second paragraph. I just wanted to see what it would look like.</p>
          <pre className={s.codeblock}>
            {JSON.stringify(users, null, '  ')}
          </pre>
        </div>
      </div>
    </Layout>
  );
}

export default withStyles(s)(Home);
