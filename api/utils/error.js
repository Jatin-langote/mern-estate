export const errorHandler = (statusCode, message) => {
    const error = new Error();
    errorHandler.message = message;
    error.message = message;
    return error;
}