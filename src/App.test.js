import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from "enzyme";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('handleClick', () => {
  const component = mount(<App/>);
  const button = component.find('button.load');

  button.simulate('click');

  expect(component.state().loading).toBe(true);
});

test('unload', () => {
  const component = mount(<App/>);
  const button = component.find('button.load');
  button.simulate('click');
  const unloadButton = component.find('button.unload');
  unloadButton.simulate('click');
  expect(component.state().loading).toBe(false);
});

test('returnTrue', () => {
  const component = mount(<App/>);
  expect(component.instance().returnTrue()).toBe(true);
});

test('returnFalse', () => {
  const component = mount(<App/>);
  expect(component.instance().returnFalse()).toBe(false);
});

test('TDD', () => {
  const component = mount(<App/>);
  const result = component.instance().multiply(5);
  expect(result).toBe(25);
});