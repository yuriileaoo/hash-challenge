export default class AlreadyExist extends Error {
  public type: string;
  public status: number;
  constructor(message: string) {
    super(message);

    this.name = "UserAlreadyExist";
    this.type = "ALREADY_EXIST";
    this.status = 409;
  }
}
