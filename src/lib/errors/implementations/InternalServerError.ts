export default class InternalServerError extends Error {
  public type: string;
  constructor(message: string) {
    super(message);

    this.name = "InternalServerError";
    this.type = "INTERNAL";
  }
}
