export default class ValidationError extends Error {
  public type: string;
  public status: number;
  constructor(message: string) {
    super(message);

    this.name = "ValidationError";
    this.type = "validation";
    this.status = 409;
  }
}
