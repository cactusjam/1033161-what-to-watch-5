import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MoviesList`, () => {
  it(`Should MoviesList render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MoviesList
              movies={TEST_MOCKS.movies}
            />
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
