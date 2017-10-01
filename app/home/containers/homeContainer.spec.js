// @flow
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HomeContainer } from './homeContainer';


describe('HomeContainer', () => {
  it('renders correctly', () => {
    const carOfTheWeek = {
      review: 'test review',
    }
    const tree = renderer.create(<HomeContainer carOfTheWeek={carOfTheWeek}
      navigation={{}} isFetching={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it.skip('got to playground', () => {
    const navigate = jest.fn();
    const getCarOfTheWeek = jest.fn();
    const testRenderer = renderer.create(
      <HomeContainer carOfTheWeek={null}
        getCarOfTheWeek={getCarOfTheWeek}
        navigation={{ navigate }} isFetching={true} />
    )

    //https://reactjs.org/docs/test-renderer.html#testinstancefindbytype
    const testInstance = testRenderer.getInstance();
    const myBtn = testInstance.findByType('Button') //we only render the fist level components
    myBtn.simulate('click');

    //assert
    expect(navigate.mock.calls.length).toBe(1)
    expect(navigate).toBeCalled()
  });
});
