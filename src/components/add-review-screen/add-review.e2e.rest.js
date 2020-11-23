import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TEST_MOCKS, TEST_MOCK_COMMENT} from "../../__test-mock.js";
import GenresList from "./genres-list";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should genres button be pressed`, () => {
  const handleReviewChange = jest.fn();
  const handleRatingChange = jest.fn();

  const wrapper = shallow(
      <GenresList
        currentMovieId ={`1`}
        currentMovie ={TEST_MOCKS.MOVIE}
        onSubmit ={TEST_MOCKS.noop}
        onReviewChange ={handleReviewChange}
        onRatingChange ={handleRatingChange}
        isDataSending={false}
        isDataSendError={false}
        isValid={true}
        rating={TEST_MOCK_COMMENT.rating}
        reviewText={TEST_MOCK_COMMENT.reviewText}
        setCurrentMovie={TEST_MOCKS.noop}
      />
  );

  const showMore = wrapper.find(`.btn--list`);
  showMore.simulate(`click`);
  expect(handleReviewChange).toHaveBeenCalledTimes(1);
  expect(handleRatingChange).toHaveBeenCalledTimes(1);
});
