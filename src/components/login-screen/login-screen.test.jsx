import React from "react";
import renderer from "react-test-renderer";
import LoginScreen from "./login-screen";
import {TEST_MOCK_STORE, TEST_MOCKS, TEST_MOCK_USER} from "../../__test-mock.js";
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
              handleInputChange={TEST_MOCKS.noop}
              authorizationStatus={`NO_AUTH`}
              onSuccessAuthorization={TEST_MOCKS.noop}
              errorEmail={TEST_MOCK_USER.errorEmail}
              errorPassword={TEST_MOCK_USER.errorPassword}
              handleFormSubmit={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
