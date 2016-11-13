import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './BarChart.css'
import { date_str, styles, onMouseOver } from './BarChartStyles'
import { VictoryAxis, VictoryBar } from 'victory'

const get_full_ticks = (ticks, interval) => {
  const full_ticks = [
    Math.min(...ticks) - 0.5,
    ...ticks,
    Math.max(...ticks) + 0.5
  ]
  return full_ticks.map(interval)
}

class BarChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  ticks = get_full_ticks(this.props.ticks, this.props.interval)

  is_bookend = v => v == this.ticks[0] || v == this.ticks.slice(-1)[0]

  render = () => (
    <svg className={s.parent} viewBox='0 0 450 350'>
      <VictoryAxis dependentAxis
        domain     ={this.props.domain}
        offsetX    ={50}
        orientation='left'
        style      ={styles.y_axis({ emphasized: this.props.emphasized })}
      />

      {
        this.state.isMounted &&
        <VictoryBar
          data  ={this.props.data}
          x     ='date'
          y     ='value'
          style ={styles.bar}
          events={[onMouseOver]}
          domain={{
            x: [this.ticks[0], this.ticks.slice(-1)[0]],
            y: this.props.domain,
          }}
        />
      }

      <VictoryAxis
        scale     ='time'
        tickValues={this.ticks}
        style     ={styles.x_axis(this.is_bookend)}
        tickFormat={d => this.is_bookend(d) ? '' : date_str(d)}
      />
    </svg>
  )
}

export default withStyles(s)(BarChart)
