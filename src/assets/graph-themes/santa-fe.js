// Colors
const colors = [
  "#3b7be2",
  "#37517C",
  "#74D8E2",
  "#E69A7D",
  "#AF5548",
];

const charcoal = "#252525";

// Typography
const sansSerif = "'Roboto', sans-serif";
const letterSpacing = "normal";
const fontSize = 8;

// Layout
const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};

const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Create the theme
const theme = {
  area: Object.assign({
    style: {
      data: {
        fill: charcoal
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: Object.assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "transparent",
        stroke: "transparent"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: charcoal,
        padding: 10,
        stroke: "transparent",
        strokeWidth: 0,
        width: 8
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  candlestick: Object.assign({
    style: {
      data: {
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: charcoal
    }
  }, baseProps),
  chart: baseProps,
  errorbar: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  group: Object.assign({
    colorScale: colors
  }, baseProps),
  line: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: Object.assign({}, baseLabelStyles, {
        textAnchor: "start"
      })
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: Object.assign({}, baseLabelStyles, {
        padding: 20
      })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: Object.assign({
    style: {
      data: {
        fill: charcoal,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  stack: Object.assign({
    colorScale: colors
  }, baseProps),
  tooltip: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: charcoal,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    }
  }, baseProps),
  voronoi: Object.assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps)
};

export default theme;
