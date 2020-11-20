import React from "react";
import renderer from "react-test-renderer";
import MoreMoviesButton from "./more-movies-button";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`MoreMoviesButton`, () => {
  it(`Should MoreMoviesButton render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MoreMoviesButton
              handleMoreButtonClick={TEST_MOCKS.noop}
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
