const createAction = (type, payload) => {
  return { type: type, payload: payload };
};

export default createAction;
