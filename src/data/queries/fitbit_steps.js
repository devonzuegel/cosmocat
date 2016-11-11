import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import FitbitStepType from '../types/FitbitStepType';
import FitbitApiClient from 'fitbit-node'

const url = '/activities/steps/date/today/7d.json'

const client = new FitbitApiClient(
  process.env.FITBIT_OAUTH_CLIENT_ID,
  process.env.FITBIT_OAUTH_CLIENT_SECRET
)

const transform_date_str = date_str => {
  return new Date(new Date(date_str).toUTCString())
}

export const transform_response = response =>
  response[0]['activities-steps'].map(s => ({
    value: parseInt(s.value),
    date:  transform_date_str(s.dateTime),
  }))


const fitbit_steps = {
  type: new List(FitbitStepType),
  resolve() {
    return client
      .get(url, process.env.FITBIT_ACCESS_TOKEN_DEVON)
      .then(transform_response)
  },
}

export default fitbit_steps
