import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withLogin from "./with-login";
import {TEST_MOCKS, TEST_MOCK_USER} from "../../__test-mock.js";

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
  const tree = renderer.create((
    <MockComponentWrapped
      email={TEST_MOCK_USER.email}
      password={TEST_MOCK_USER.password}
      handleChange={TEST_MOCKS.noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
