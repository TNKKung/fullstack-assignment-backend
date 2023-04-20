/**
 * A ApiError class
 */
class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  /**
   * @param {number} statusCode
   * @param {string} message
   * @param {boolean} isOperational
   * @param {string} stack
   */
  constructor(
    statusCode: number,
    message?: string,
    isOperational = true,
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
