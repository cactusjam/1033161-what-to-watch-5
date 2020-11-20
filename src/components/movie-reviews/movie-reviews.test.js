import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";

describe(`MovieReviews`, () => {
  it(`Should MovieReviews render correctly`, () => {
    const tree = renderer
    .create(
        <MovieReviews
          reviews={[]}
        />
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
