import React from "react";
import renderer from "react-test-renderer";
import MovieCardSmall from "./movie-card-small";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MovieCardSmall`, () => {
  it(`Should MovieCardSmall render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MovieCardSmall
              movie={TEST_MOCKS.movie}
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
