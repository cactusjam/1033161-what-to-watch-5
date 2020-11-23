import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveMovie from "./with-active-movie";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveMovie(MockComponent);

it.skip(`Should`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activeMovie).toEqual(-1);
});
