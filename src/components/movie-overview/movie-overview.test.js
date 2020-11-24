import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";
import {TEST_MOCKS, TEST_MOCK_STORE} from "../../__test-mock.js";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MovieOverview`, () => {
  it(`Should MovieOverview render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MovieOverview
            movie={TEST_MOCKS.movie}
          />
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
