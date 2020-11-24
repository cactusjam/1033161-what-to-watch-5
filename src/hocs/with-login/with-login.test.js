import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withLogin from "./with-login";
import {TEST_MOCKS, TEST_MOCK_USER, TEST_MOCK_STORE} from "../../__test-mock.js";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withLogin(MockComponent);

it(`withLogin is rendered correctly`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <MockComponentWrapped
          email={TEST_MOCK_USER.email}
          password={TEST_MOCK_USER.password}
          handleInputChange={TEST_MOCKS.noop}
          authorizationStatus={`NO_AUTH`}
          errorEmail={TEST_MOCK_USER.errorEmail}
          errorPassword={TEST_MOCK_USER.errorPassword}
          handleFormSubmit={TEST_MOCKS.noop}
        >
          <React.Fragment />
        </MockComponentWrapped>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
