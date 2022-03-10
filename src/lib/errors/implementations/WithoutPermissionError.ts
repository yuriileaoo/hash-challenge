export default class WithoutPermissionError extends Error {
  public type: string;
  public status: number;
  constructor(message: string) {
    super(message);

    this.name = "WithoutPermissionError";
    this.type = "WITHOUT_PERMISSION";
    this.status = 401;
  }
}
