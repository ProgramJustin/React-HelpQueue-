const persistDataLocally = store => next => action => {
  return next(action)
}

export default persistDataLocally;
