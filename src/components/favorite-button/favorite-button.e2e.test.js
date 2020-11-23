import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButton} from "./favorite-button";
import {TEST_MOCKS} from "../../__test-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should FavoriteButton be pressed`, () => {
  // const handleButtonClick = jest.fn();
  const handleFavoriteClick = jest.fn();
  const handleUnauthorizedClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        onFavoriteClick={handleFavoriteClick}
        id={1}
        isFavorite={true}
        onUnauthorizedClick={handleUnauthorizedClick}
        userData={TEST_MOCKS.userData}
      />
  );

  const showMore = wrapper.find(`button`);

  showMore.simulate(`click`);
  expect(handleFavoriteClick).toHaveBeenCalledTimes(1);
  expect(handleUnauthorizedClick).toHaveBeenCalledTimes(0);
});

it(`Should FavoriteButton be pressed and user will be redirected to log-in page`, () => {
  // const handleButtonClick = jest.fn();
  const handleFavoriteClick = jest.fn();
  const handleUnauthorizedClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        onFavoriteClick={handleFavoriteClick}
        id={1}
        isFavorite={true}
        onUnauthorizedClick={handleUnauthorizedClick}
        userData={TEST_MOCKS.unauthorizedUserData}
      />
  );

  const showMore = wrapper.find(`button`);

  showMore.simulate(`click`);

  expect(handleUnauthorizedClick).toHaveBeenCalledTimes(1);
  expect(handleFavoriteClick).toHaveBeenCalledTimes(0);
});
