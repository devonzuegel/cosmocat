import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import FitbitStepType from '../types/FitbitStepType';
import FitbitApiClient from 'fitbit-node'

const DEFAULT_SCOPE = 'activity heartrate location nutrition profile settings sleep social weight'

const url = '/activities/steps/date/today/6m.json'

const client = new FitbitApiClient(
  process.env.FITBIT_OAUTH_CLIENT_ID,
  process.env.FITBIT_OAUTH_CLIENT_SECRET
)

const fitbit_steps = {
  type: new List(FitbitStepType),
  resolve() {
    client
      .get(url, process.env.FITBIT_ACCESS_TOKEN_DEVON)
      .then(data => data[0]['activities-steps'])
  },
};

export default fitbit_steps;
