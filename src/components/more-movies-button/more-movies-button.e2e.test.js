import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoreMoviesButton from "./more-movies-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should more button be pressed`, () => {
  const handleMoreButtonClick = jest.fn();

  const wrapper = shallow(
      <MoreMoviesButton
        handleMoreButtonClick={handleMoreButtonClick}
      />
  );

  const showMore = wrapper.find(`.catalog__button`);
  showMore.simulate(`click`);
  expect(handleMoreButtonClick).toHaveBeenCalledTimes(1);
});
