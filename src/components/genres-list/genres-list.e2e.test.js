import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TEST_MOCKS} from "../../__test-mock.js";
import GenresList from "./genres-list";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`When user selects GenresList`, () => {
  const onGenreFilterChange = jest.fn();

  const wrapper = shallow(
      <GenresList
        activeFilter={TEST_MOCKS.genreFilter}
        genres={TEST_MOCKS.genresFilter}
        onFilterChange={onGenreFilterChange}
      />
  );

  const genreSelectButton = wrapper.find(`li`).at(2);
  genreSelectButton.simulate(`click`, {preventDefault() {}});
  expect(onGenreFilterChange).toHaveBeenCalledTimes(1);
});
