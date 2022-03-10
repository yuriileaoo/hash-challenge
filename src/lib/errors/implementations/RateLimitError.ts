export default class RateLimitError extends Error {
  public type: string;
  public status: number;
  constructor() {
    super("Too Many Requests.");

    this.name = "rateLimitError";
    this.type = "RATE_LIMIT";
    this.status = 429;
  }
}
