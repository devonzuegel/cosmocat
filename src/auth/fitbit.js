import FitbitApiClient from 'fitbit-node'

const CALLBACK_URI  = '/fitbit/callback'
const AUTHORIZE_URI = '/fitbit/authorize'
const STEPS_URI     = '/fitbit/steps'
const DEFAULT_SCOPE = 'activity heartrate location nutrition profile settings sleep social weight'

const url = '/activities/steps/date/today/6m.json'

const full_url = (path) =>
  `${process.env.WEBSITE_HOSTNAME_PREFIX}${process.env.WEBSITE_HOSTNAME}${path}`

const initialize = (app) => {
  const client = new FitbitApiClient(
    process.env.FITBIT_OAUTH_CLIENT_ID,
    process.env.FITBIT_OAUTH_CLIENT_SECRET
  )

  // redirect the user to the Fitbit authorization page
  app.get(AUTHORIZE_URI, (req, res) => {
    res.redirect(client.getAuthorizeUrl(DEFAULT_SCOPE, full_url(CALLBACK_URI),))
  })

  app.get(CALLBACK_URI, (req, res) =>
    client
      .getAccessToken(req.query.code, full_url(CALLBACK_URI))
      .then((r) => res.send({ token: r.access_token }))
      .catch((e) => res.send(e))
  )

  app.get(STEPS_URI, (req, res) =>
    client
      .get(url, process.env.FITBIT_ACCESS_TOKEN_DEVON)
      .then((data) => res.send(data[0]['activities-steps']))
      .catch((e) => res.send(e))
  )
}

export default { initialize: initialize }
