import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`GenresList`, () => {
  it(`Should GenresList render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList
            activeFilter={TEST_MOCKS.genreFilter}
            genres={TEST_MOCKS.genresFilter}
            onFilterChange={TEST_MOCKS.noop}
          />,
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
