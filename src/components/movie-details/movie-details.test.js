import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";
import {TEST_MOCKS} from "../../__test-mock.js";

describe(`MovieDetails`, () => {
  it(`Should MovieDetails render correctly`, () => {
    const tree = renderer
    .create(
        <MovieDetails
          movie={TEST_MOCKS.movie}
        />
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
