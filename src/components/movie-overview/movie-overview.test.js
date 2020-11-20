import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";
import {TEST_MOCKS} from "../../__test-mock.js";

describe(`MovieOverview`, () => {
  it(`Should MovieOverview render correctly`, () => {
    const tree = renderer
    .create(
        <MovieOverview
          movie={TEST_MOCKS.movie}
        />
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
