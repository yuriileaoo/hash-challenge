export default class AuthorizationError extends Error {
  public type: string;
  public status: number;
  constructor(message?: string) {
    super(message || "Requires authentication");

    this.name = "AuthorizationError";
    this.type = "UNAUTHORIZED";
    this.status = 401;
  }
}
