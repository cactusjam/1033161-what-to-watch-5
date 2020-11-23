import React from "react";
import renderer from "react-test-renderer";
import AuthUser from "./auth-user";
import {TEST_MOCK_STORE, TEST_MOCK_USER} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`AuthUser`, () => {
  it(`Should AuthUser render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <AuthUser
              userAvatar={TEST_MOCK_USER.userAvatar}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
