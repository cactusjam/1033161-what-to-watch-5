import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MainScreen`, () => {
  it(`Should PageMain render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MainScreen
              defaultFilmsCount={8}
              filteredMovies={TEST_MOCKS.movies}
              genreFilter={TEST_MOCKS.genreFilter}
              movies={TEST_MOCKS.movies}
              onPlayButtonClick={TEST_MOCKS.noop}
              onGenreFilterChange={TEST_MOCKS.noop}
              promoMovie={TEST_MOCKS.movie}
            />,
          </MemoryRouter>
        </Provider>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
