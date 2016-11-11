import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Home.css';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';
import SantaFeTheme from '../../assets/graph-themes/santa-fe'

const StepsGraph = ({ steps }) => (
  <VictoryChart theme={SantaFeTheme}>
    <VictoryBar data={steps} x='date' y='value' />
  </VictoryChart>
)

const Home = ({ steps }) => (
  <Layout>
    <div className={s.root}>
      <div className={s.container}>
        <p>
          This is a test. I am testing some text here. These are some sentences I'm writing,
          some of which will be long and others will be short. And <b>this text should be bold</b>!
        </p>
        <p>And now here is a second paragraph. I just wanted to see what it would look like.</p>

        <StepsGraph steps={steps.slice(0, 30)} />
      </div>
    </div>
  </Layout>
)

export default withStyles(s)(Home);
