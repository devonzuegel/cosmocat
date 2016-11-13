const LIGHT_GRAY_COLOR = '#eee'
const GRAY_COLOR       = '#ccc'
const DARK_GRAY_COLOR  = '#aaa'
const BLACK_COLOR      = '#333'

const labels_base = {
  fill: BLACK_COLOR,
  fontFamily: 'inherit',
  fontSize: 7,
}

const bar_data_base = {
  stroke:      BLACK_COLOR,
  fill:        LIGHT_GRAY_COLOR,
  strokeWidth: 0.1,
  width:       12,
}

const bar_data_on_hover = {
  ...bar_data_base,
  fill: GRAY_COLOR,
}

const bar_label_base = {
  ...labels_base,
  fill: 'transparent',
}

const bar_label_on_hover = {
  ...bar_label_base,
  fill: BLACK_COLOR,
}

export const styles = {
  x_axis: is_bookend => ({
    axis: { stroke: BLACK_COLOR, strokeWidth: 1},
    ticks: {
      size:        tick => is_bookend(tick) ? 0 : 3,
      stroke:      DARK_GRAY_COLOR,
      strokeWidth: 1
    },
    tickLabels: labels_base
  }),

  y_axis: ({ emphasized = [] }) => ({
    grid: {
      stroke:      LIGHT_GRAY_COLOR,
      strokeWidth: val => (emphasized.indexOf(val) > -1) ? 4 : 1,
    },
    axis: { stroke: 'transparent' },
    tickLabels: labels_base
  }),
  bar: {
    data: bar_data_base,
    labels: bar_label_base,
  },
}

export const onMouseOver = {
  target: 'data',
  eventHandlers: {
    onMouseOver: () => (
      [
        {
          target: 'data',
          mutation: props => ({ style: bar_data_on_hover })
        }, {
          target: 'labels',
          mutation: props => ({ style: bar_label_on_hover })
        }
      ]
    ),
    onMouseOut: () => (
      [
        {
          target: 'data',
          mutation: props => ({ style: bar_data_base })
        }, {
          target: 'labels',
          mutation: props => ({ style: bar_label_base })
        }
      ]
    )
  }
}

export const date_str = raw_date => {
  const d     = new Date(raw_date)
  const day   = d.getDate()
  const month = d.getMonth() + 1
  const year  = d.getFullYear()
  return `${day}/${month}/${year}`
}
