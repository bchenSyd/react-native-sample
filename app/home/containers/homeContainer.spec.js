// @flow
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { HomeContainer }
  from './homeContainer';

describe('HomeContainer', () => {
  it('renders correctly', () => {
    const carOfTheWeek = {
      review: 'test review',
    }
    const navigate = jest.fn();
    const tree = renderer.create(<HomeContainer carOfTheWeek={carOfTheWeek} 
          navigation={{ navigate }} isFetching={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
