import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import s from './Home.css'
import BarChart from '../../components/BarChart'

const StepsGraph = ({ steps }) => {
  const transformed_steps = steps.map(s => (
    {
      date:  new Date(s.date),
      value: s.value,
      label: s.value.toLocaleString(),
    }
  ))

  const one_day   = 1000 * 60 * 60 * 24
  const max_value = Math.max(...steps.map(datum => datum.value))
  const range_max = Math.ceil(max_value / 5000.0) * 5000
  const interval  = day => new Date(new Date().getTime() - (8 - day)*one_day)

  return (
    <BarChart
      x          ='date'
      y          ='value'
      data       ={transformed_steps}
      domain     ={[0, range_max]}
      ticks      ={[1, 2, 3, 4, 5, 6, 7]}
      interval   ={interval}
      emphasized ={[10000]}
    />
  )
}

const Home = ({ steps }) => (
  <Layout>
    <div className={s.root}>
      <div className={s.container}>
        <StepsGraph steps={steps} />
      </div>
    </div>
  </Layout>
)

export default withStyles(s)(Home)
