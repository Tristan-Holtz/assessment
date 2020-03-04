export const urls = (state = [], action) => {
  switch (action.type) {
    case 'SET_URLS':
      return action.urls;
    case 'ADD_URL':
      return [...state, action.url];
    default:
      return state;
  }
};
