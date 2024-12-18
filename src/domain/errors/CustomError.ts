export class CustomError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
  ) {
    super(message);
  }

  static badRequest(message?: string) {
    return new CustomError(400, message ? message : 'Bad Request');
  }

  static unauthorized(message?: string) {
    return new CustomError(401, message ? message : 'Unauthorized');
  }

  static forbidden(message?: string) {
    return new CustomError(403, message ? message : 'Forbidden');
  }

  static notFound(message?: string) {
    return new CustomError(404, message ? message : 'Bad Request');
  }

  static internalServerError(message?: string) {
    return new CustomError(500, message ? message : 'Internal server');
  }
}
