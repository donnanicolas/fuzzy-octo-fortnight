const merge = () => {}; // Recursive non destructive merge

const data = (state, action) => {
  if (action.type.endsWith('_FETCH_SUCCEDDED')) {
    return merge(state, action.payload);
  }
  // Special cases
  return state;
};

export default data;
