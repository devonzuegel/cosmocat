import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Layout from '../../components/Layout'
import s from './Home.css'
import { VictoryLine, VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from 'victory'
import SantaFeTheme from '../../assets/graph-themes/santa-fe'


const GRAY_COLOR = '#eeeeee'
const BLACK_COLOR = '#000000'
const tickValues = [
  new Date(1999, 1, 1),
  new Date(2000, 1, 1),
  new Date(2001, 1, 1),
  new Date(2002, 1, 1),
  new Date(2003, 1, 1),
  new Date(2004, 1, 1),
  new Date(2005, 1, 1),
  new Date(2006, 1, 1),
  new Date(2007, 1, 1),
  new Date(2008, 1, 1),
  new Date(2009, 1, 1),
  new Date(2010, 1, 1),
  new Date(2011, 1, 1),
  new Date(2012, 1, 1),
  new Date(2013, 1, 1),
  new Date(2014, 1, 1),
  new Date(2015, 1, 1),
  new Date(2016, 1, 1)
]
const data = [
  {x: new Date(2000, 1, 1), y: 12},
  {x: new Date(2000, 6, 1), y: 10},
  {x: new Date(2000, 12, 1), y: 11},
  {x: new Date(2001, 1, 1), y: 5},
  {x: new Date(2002, 1, 1), y: 4},
  {x: new Date(2003, 1, 1), y: 6},
  {x: new Date(2004, 1, 1), y: 5},
  {x: new Date(2005, 1, 1), y: 7},
  {x: new Date(2006, 1, 1), y: 8},
  {x: new Date(2007, 1, 1), y: 9},
  {x: new Date(2008, 1, 1), y: -8.5},
  {x: new Date(2009, 1, 1), y: -9},
  {x: new Date(2010, 1, 1), y: 5},
  {x: new Date(2013, 1, 1), y: 1},
  {x: new Date(2014, 1, 1), y: 2},
  {x: new Date(2015, 1, 1), y: -5}
]
const styles = {
  parent: {
    boxSizing: "border-box",
    display: "inline",
    padding: 0,
    margin: 20,
    fontFamily: "'Roboto', sans-serif",
    width: "100%",
    height: "auto"
  },
  title: {
    textAnchor: "start",
    verticalAnchor: "end",
    fill: BLACK_COLOR,
    fontFamily: "inherit",
    fontSize: 10,
    fontWeight: "bold"
  },
  labelNumber: {
    textAnchor: "middle",
    fill: GRAY_COLOR,
    fontFamily: "inherit",
    fontSize: 10,
  },

  // INDEPENDENT AXIS
  axisYears: {
    axis: { stroke: "black", strokeWidth: 1},
    ticks: {
      size: (tick) => {
        const tickSize =
          tick.getFullYear() % 5 === 0 ? 10 : 5
        return tickSize
      },
      stroke: "black",
      strokeWidth: 1
    },
    tickLabels: {
      fill: "black",
      fontFamily: "inherit",
      fontSize: 10,
    }
  },

  // DATA SET ONE
  axisOne: {
    grid: {
      stroke: (tick) =>
        tick === -10 ? "transparent" : GRAY_COLOR,
      strokeWidth: 1
    },
    axis: { stroke: GRAY_COLOR, strokeWidth: 0 },
    ticks: { strokeWidth: 0 },
    tickLabels: {
      fill: BLACK_COLOR,
      fontFamily: "inherit",
      fontSize: 10,
    }
  },
  labelOne: {
    fill: BLACK_COLOR,
    fontFamily: "inherit",
    fontSize: 10,
    fontStyle: "italic"
  },
  lineOne: {
    data: { stroke: BLACK_COLOR, fill: GRAY_COLOR, strokeWidth: 1 }
  },
  axisOneCustomLabel: {
    fill: BLACK_COLOR,
    fontFamily: "inherit",
    fontWeight: 300,
    fontSize: 10,
  },
}

const date_str = datum => {
  const date = new Date(datum["date"])
  return `${date.getDay()} ${date.getMonth()} ${date.getYear()}`
}

const StepsGraph = ({ steps }) => (
  <svg style={styles.parent} viewBox="0 0 450 350">

    {/* Define labels */}
    <VictoryLabel x={25} y={24} style={styles.title}
      text="An outlook"
    />
    <VictoryLabel x={25} y={55} style={styles.labelOne}
      text={"Economy \n % change on a year earlier"}
    />

    <g transform={"translate(0, 40)"}>
      {/* Add shared independent axis */}
      <VictoryAxis
        scale="time"
        standalone={false}
        style={styles.axisYears}
        tickValues={tickValues}
        tickFormat={
          (x) => {
            if (x.getFullYear() === 2000) {
              return x.getFullYear()
            }
            if (x.getFullYear() % 5 === 0) {
              return x.getFullYear().toString().slice(2)
            }
          }
        }
      />

      {/*
        Add the dependent axis for the first data set.
        Note that all components plotted against this axis will have the same y domain
      */}
      <VictoryAxis dependentAxis
        domain={[-10, 15]}
        offsetX={50}
        orientation="left"
        standalone={false}
        style={styles.axisOne}
      />

      {/* dataset one */}
      <VictoryBar
        data={data}
        domain={{
          x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
          y: [-10, 15]
        }}
        interpolation="monotoneX"
        scale={{x: "time", y: "linear"}}
        standalone={false}
        style={styles.lineOne}
      />
    </g>
  </svg>
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

export default withStyles(s)(Home)
