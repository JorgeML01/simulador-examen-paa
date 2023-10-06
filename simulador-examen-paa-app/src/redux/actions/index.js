const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const reset = () => {
  return {
    type: "RESET",
  };
};

const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

module.exports = {
  increment,
  decrement,
  reset,
  logIn,
  logOut,
};
