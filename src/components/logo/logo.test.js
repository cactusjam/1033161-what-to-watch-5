import React from "react";
import renderer from "react-test-renderer";
import Logo from "./logo";
import {MemoryRouter} from "react-router-dom";

describe(`Logo`, () => {
  it(`Should Logo render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <Logo
            isFooter={false}
          />
        </MemoryRouter>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
