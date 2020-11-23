import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {TabName} from "../../constants/constants";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

describe(`interactions with with-active-tab`, () => {
  it(`Should change tab`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.state().activeTab).toEqual(TabName.OVERVIEW);

    wrapper.props().onActiveMovieChange(TabName.DETAILS);
    expect(wrapper.state().activeTab).toEqual(TabName.DETAILS);

    wrapper.props().onActiveMovieChange(TabName.REVIEWS);
    expect(wrapper.state().activeTab).toEqual(TabName.REVIEWS);

    wrapper.props().onActiveMovieChange(TabName.OVERVIEW);
    expect(wrapper.state().activeTab).toEqual(TabName.OVERVIEW);
  });
});

