import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import SantaFeTheme from '../../assets/graph-themes/santa-fe'

const StepsGraph = ({ steps }) => (
  <VictoryChart theme={SantaFeTheme}>
    <VictoryBar data={steps} x='dateTime' y='value' />
  </VictoryChart>
)

const Home = ({ users }) => {
  const steps = [
    {
      dateTime: "2016-05-07",
      value: 8133,
    }, {
      dateTime: "2016-05-08",
      value: 12316,
    }, {
      dateTime: "2016-05-09",
      value: 8231,
    }, {
      dateTime: "2016-05-10",
      value: 10503,
    }, {
      dateTime: "2016-05-11",
      value: 21446,
    }, {
      dateTime: "2016-05-12",
      value: 20860,
    }, {
      dateTime: "2016-05-13",
      value: 19852,
    }, {
      dateTime: "2016-05-14",
      value: 13384,
    }
  ]
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
          <StepsGraph steps={steps} />
        </div>
      </div>
    </Layout>
  );
}

export default withStyles(s)(Home);
