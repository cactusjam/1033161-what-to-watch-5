import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import {MemoryRouter} from "react-router-dom";

describe(`Footer`, () => {
  it(`Should Footer render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Footer/>,
        </MemoryRouter>
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
