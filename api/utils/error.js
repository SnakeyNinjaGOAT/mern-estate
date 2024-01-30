export const errorHandler = (statusCode, message) => {
  const error = new Error(messge);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
