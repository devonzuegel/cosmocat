import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {

    // const steps_response = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({query: '{fitbit_steps { value, date }}'}),
    //   credentials: 'include',
    // })

    // const steps = await steps_response.json()
    // steps.data.fitbit_steps

    return {
      title: 'Home',
      component: <Home steps={[]} />,
    }

  },

};
