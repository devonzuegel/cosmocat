import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{users{id,email,picture,name}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();

    return {
      title: 'React Starter Kit',
      component: <Home users={data} />,
    };
  },

};
