const CreatError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };
  
  module.exports = CreatError;
  