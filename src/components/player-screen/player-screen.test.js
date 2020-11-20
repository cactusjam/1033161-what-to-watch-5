import React from "react";
import renderer from "react-test-renderer";
import PlayerScreen from "./player-screen";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`PlayerScreen`, () => {
  it(`Should PlayerScreen render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PlayerScreen
              setCurrentMovie={TEST_MOCKS.noop}
              currentMovieId={TEST_MOCKS.match}
              currentMovie={TEST_MOCKS.movie}
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
