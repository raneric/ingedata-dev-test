class AppError extends Error {
  constructor(error) {
    const code = error.status || error.statusCode || 500;
    const message = (error.response) ? error.response.data.message : error.message
    super(message);
    this.statusCode = code;
  }
}

export default AppError;