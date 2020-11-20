import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {TEST_MOCK_STORE} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`Header`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Header
              background={``}
              title={``}
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
