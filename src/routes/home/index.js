import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';
// import { User, UserLogin, UserClaim, UserProfile } from '../../data/models';

export default {

  path: '/',

  async action() {
    // const resp = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: '{news{title,link,contentSnippet}}',
    //   }),
    //   credentials: 'include',
    // });
    // const { data } = await resp.json();
    // if (!data || !data.news) throw new Error('Failed to load the news feed.');
    //
    //
    // const users = await User.findAll({
    //   where: {},
    //   include: [
    //     {
    //       attributes: ['name', 'key'],
    //       model: UserLogin,
    //       as: 'logins',
    //       required: true,
    //     },
    //     { model: UserProfile, as: 'profile' },
    //   ],
    // });

    return {
      title: 'React Starter Kit',
      component: <Home users={[]} />,
    };
  },

};
