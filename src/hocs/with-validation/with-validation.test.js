import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withValidation from "./with-validation";
import {TEST_MOCK_COMMENT} from "../../__test-mock.js";

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

const MockComponentWrapped = withValidation(MockComponent);

it(`withValidation is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      rating= {TEST_MOCK_COMMENT.rating}
      reviewText= {TEST_MOCK_COMMENT.reviewText}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
