import React from "react";
import renderer from "react-test-renderer";
import LoginScreen from "./login-screen";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`LoginScreen`, () => {
  it(`Should LoginScreen render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <LoginScreen
              email={``}
              handleChange={TEST_MOCKS.noop}
              onSubmit={TEST_MOCKS.noop}
              password={``}
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
