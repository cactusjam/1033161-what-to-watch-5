import React from "react";
import renderer from "react-test-renderer";
import UserBlock from "./user-block";
import {TEST_MOCK_STORE, TEST_MOCK_USER} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`UserBlock`, () => {
  it(`Should UserBlock render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <UserBlock
              authorizationStatus={TEST_MOCK_USER.authorizationStatus}
              userAvatar={TEST_MOCK_USER.userAvatar}
            />
          </MemoryRouter>,
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
