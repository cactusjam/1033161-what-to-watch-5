import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`VideoPlayer`, () => {
  it(`Should VideoPlayer render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <VideoPlayer
              currentMovie={TEST_MOCKS.movie}
            />
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
