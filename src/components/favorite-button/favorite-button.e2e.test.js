import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButton} from "./favorite-button";
import {TEST_MOCKS} from "../../__test-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should FavoriteButton be pressed`, () => {
  const handleButtonClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        onFavoriteClick={handleButtonClick}
        id={1}
        isFavorite={true}
        onUnauthorizedClick={handleButtonClick}
        userData={TEST_MOCKS.userData}
      />
  );

  const showMore = wrapper.find(`button`);

  showMore.simulate(`click`);
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});
