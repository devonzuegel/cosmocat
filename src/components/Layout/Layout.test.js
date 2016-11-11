/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../App'
import Layout from './Layout'

describe('Layout', () => {

  it('renders children correctly', () => {
    const child = <div className="child" />
    const wrapper = shallow(
      <App context={{ insertCss: () => {} }}>
        <Layout>{child}</Layout>
      </App>
    );

    expect(wrapper.contains(child)).to.be.true
  });

});
