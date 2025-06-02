class AppError extends Error {
  constructor(error) {
    const code = error.status || error.statusCode || 500;
    let message;
    if (error.response) {
      message = error.response.data.message;
    } else if (error.data) {
      message = error.data.message;
    } else {
      message = "Unexpected error has been thrown";
    }
    super(message);
    this.statusCode = code;
  }
}

export default AppError;