/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import { mockServer } from 'graphql-tools'
import { expect } from 'chai'
import { transform_response } from './fitbit_steps'
import schema from '../schema'

const mock_date    = '2016-11-11T06:58:19.000Z'
const mock_value   = 123123
const myMockServer = mockServer(schema, {
  FitbitStep: () => ({
    value: mock_value,
    date:  new Date(mock_date)
  })
})

describe('transform_response', () => {
  it('transforms a Fitbit JSON response into objects', () => {
    const activities_steps = [
      {
        dateTime: '2016-11-03',
        value:    '123123',
      }, {
        dateTime: '2010-11-08',
        value:    '1000',
      }
    ]
    const raw_response = [{ 'activities-steps': activities_steps }]
    const month        = 11

    expect(transform_response(raw_response)).to.eql([
      {
        date:  new Date(Date.UTC(2016, month - 1, 3)),
        value: 123123,
      }, {
        date:  new Date(Date.UTC(2010, month - 1, 8)),
        value: 1000,
      }
    ])
  })
})

describe('fitbit_steps query', () => {
  it('returns an array of FitbitSteps', () => {
    const fields = ['value', 'date'].join(' ')
    const query  = `{ fitbit_steps { ${fields} } }`

    myMockServer.query(query).then((r) => {
      expect(r.data).to.eql({
        fitbit_steps: [
          { value: mock_value, date: mock_date },
          { value: mock_value, date: mock_date },
        ]
      })
    })
  })

})
