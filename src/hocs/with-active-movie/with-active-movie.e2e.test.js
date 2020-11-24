import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveMovie from "./with-active-movie";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveMovie(MockComponent);

describe(`interactions with activeMovie`, () => {
  it(`Should change activeMovie`, () => {
    const wrapper = shallow(<MockComponentWrapped />);
    const newActiveMovieId = 42;

    expect(wrapper.state().activeMovie).toEqual(-1);

    wrapper.instance()._handleActiveMovieChange(newActiveMovieId);
    expect(wrapper.state().activeMovie).toEqual(newActiveMovieId);
  });
});
