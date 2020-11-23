import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MovieReviews`, () => {
  it(`Should MovieReviews render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MovieReviews
            reviews={TEST_MOCKS.reviews}
          />
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
