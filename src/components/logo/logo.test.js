import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {TEST_MOCK_STORE} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`Logo`, () => {
  it(`Should Logo render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Logo
              isFooter={false}
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
