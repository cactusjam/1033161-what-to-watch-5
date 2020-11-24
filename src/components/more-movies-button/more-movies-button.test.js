import React from "react";
import renderer from "react-test-renderer";
import MoreMoviesButton from "./more-movies-button";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MoreMoviesButton`, () => {
  it(`Should MoreMoviesButton render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MoreMoviesButton
            handleMoreButtonClick={TEST_MOCKS.noop}
          />
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
