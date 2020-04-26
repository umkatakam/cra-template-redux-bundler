import { createSelector } from "redux-bundler";

export default {
  name: "facts",
  getReducer: () => {
    const initialData = {
      facts: null,
      loading: false,
    };

    return (state = initialData, { type, payload }) => {
      switch (type) {
        case "FETCH_FACTS_START":
          return Object.assign({}, state, {
            loading: true,
          });
        case "FETCH_FACTS_SUCCESS":
          return Object.assign({}, state, {
            loading: false,
            facts: payload,
          });
        default:
          return state;
      }
    };
  },
  doFetchFacts: (animal = "cat", amount = 10) => ({ dispatch }) => {
    dispatch({ type: "FETCH_FACTS_START" });
    fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=${amount}`
    )
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        dispatch({ type: "FETCH_FACTS_SUCCESS", payload });
      });
  },
  selectFacts: (state) => {
    return state.facts.facts;
  },
  selectLoading: (state) => {
    return state.facts.loading;
  },
};
