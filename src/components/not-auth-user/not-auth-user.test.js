import React from "react";
import renderer from "react-test-renderer";
import NotAuthUser from "./not-auth-user";
import {MemoryRouter} from "react-router-dom";

describe(`NotAuthUser`, () => {
  it(`Should NotAuthUser render correctly`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <NotAuthUser/>
        </MemoryRouter>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
