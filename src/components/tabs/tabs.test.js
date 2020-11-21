import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {TEST_MOCKS} from "../../__test-mock.js";
import {TabName} from "../../constants/constants";


describe(`Tabs`, () => {
  it(`Should Tabs render correctly`, () => {
    const tree = renderer
    .create(
        <Tabs
          activeTab={TabName.OVERVIEW}
          onActiveMovieChange={TEST_MOCKS.noop}
          movie={TEST_MOCKS.movie}
          reviews={TEST_MOCKS.reviews}
        />
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
