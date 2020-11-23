import React from "react";
import renderer from "react-test-renderer";
import MovieScreen from "./movie-screen";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MovieScreen`, () => {
  it(`Should MovieScreen render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MovieScreen
              movies={TEST_MOCKS.movies}
              reviews={TEST_MOCKS.reviews}
              setCurrentMovie={TEST_MOCKS.noop}
              currentMovieId={`1`}
              currentMovie={TEST_MOCKS.movie}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
