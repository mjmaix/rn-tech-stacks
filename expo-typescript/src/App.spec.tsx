import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  it('snapshot test', () => {
    // test auto prettier
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
