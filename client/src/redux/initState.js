const initState = () => {
  const state = {
    // jokes: {},
    jokes_favorite: [],
  };

  const fromLS = JSON.parse(window.localStorage.getItem("myApp"));
  return fromLS ? fromLS : state;
};

export default initState;
