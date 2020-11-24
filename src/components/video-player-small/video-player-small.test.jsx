import React from "react";
import renderer from "react-test-renderer";
import VideoPlayerSmall from "./video-player-small";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`VideoPlayerSmall`, () => {
  it(`Should VideoPlayerSmall render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <VideoPlayerSmall
            movie={TEST_MOCKS.movie}
          />
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
