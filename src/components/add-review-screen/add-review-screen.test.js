import React from "react";
import renderer from "react-test-renderer";
import AddReviewScreen from "./add-review-screen";
import {TEST_MOCK_STORE, TEST_MOCKS, TEST_MOCK_COMMENT} from "../../__test-mock.js";
import {MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore(TEST_MOCK_STORE);

describe(`AddReviewScreen`, () => {
  it(`Should PageMain render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <AddReviewScreen
              currentMovieId ={`1`}
              currentMovie ={TEST_MOCKS.MOVIE}
              onSubmit ={TEST_MOCKS.noop}
              onReviewChange ={TEST_MOCKS.noop}
              onRatingChange ={TEST_MOCKS.noop}
              isDataSending={false}
              isDataSendError={false}
              isValid={true}
              rating={TEST_MOCK_COMMENT.rating}
              reviewText={TEST_MOCK_COMMENT.reviewText}
              setCurrentMovie={TEST_MOCKS.noop}
            />,
          </MemoryRouter>
        </Provider>
    )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
