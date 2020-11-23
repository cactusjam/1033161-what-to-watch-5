import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveTab from "./with-active-tab";
import {TabName} from "../../constants/constants";

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

const MockComponentWrapped = withActiveTab(MockComponent);

it(`withActiveTab is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeTab={TabName.OVERVIEW}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
