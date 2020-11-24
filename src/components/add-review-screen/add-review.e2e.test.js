import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TEST_MOCKS, TEST_MOCK_COMMENT} from "../../__test-mock.js";
import {AddReviewScreen} from "./add-review-screen";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should value input and textarea review was change`, () => {
  const handleReviewChange = jest.fn();
  const handleRatingChange = jest.fn();

  const wrapper = shallow(
      <AddReviewScreen
        currentMovieId ={`1`}
        currentMovie ={TEST_MOCKS.movie}
        onFormSubmit ={TEST_MOCKS.noop}
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

  const inputReview = wrapper.find(`.add-review__textarea`);
  const inputRating = wrapper.find(`input`).at(1);

  inputReview.simulate(`change`);
  inputRating.simulate(`change`, {target: {checked: true}});
  expect(handleReviewChange).toHaveBeenCalledTimes(1);
  expect(handleRatingChange).toHaveBeenCalledTimes(1);
});


it(`Should review form was submit`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = shallow(
      <AddReviewScreen
        currentMovieId ={`1`}
        currentMovie ={TEST_MOCKS.movie}
        onFormSubmit ={handleFormSubmit}
        onReviewChange ={TEST_MOCKS.noop}
        onRatingChange ={TEST_MOCKS.noop}
        isDataSending={false}
        isDataSendError={false}
        isValid={true}
        rating={TEST_MOCK_COMMENT.rating}
        reviewText={TEST_MOCK_COMMENT.reviewText}
        setCurrentMovie={TEST_MOCKS.noop}
      />
  );

  const formReview = wrapper.find(`form.add-review__form`);

  formReview.simulate(`submit`, {preventDefault() {}});
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});
