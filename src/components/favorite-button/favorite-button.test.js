import React from "react";
import renderer from "react-test-renderer";
import FavoriteButton from "./favorite-button";
import {TEST_MOCK_STORE, TEST_MOCKS} from "../../__test-mock.js";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`FavoriteButton`, () => {
  it(`Should FavoriteButton render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <FavoriteButton
            id={TEST_MOCKS.id}
            isFavorite={true}
            onFavoriteClick={TEST_MOCKS.noop}
            onUnauthorizedClick={TEST_MOCKS.noop}
            userData ={TEST_MOCKS.userData}
          />,
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
