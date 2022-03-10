import Axios, { AxiosInstance } from "axios";

import IHttpRequestAdapter from "../models/IHttpRequestAdapter";

class HttpRequestAdapter implements IHttpRequestAdapter {
  private clientRequest: AxiosInstance;
  constructor() {
    this.clientRequest = Axios.create();
  }

  public async get<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.get<T>(url, {
      headers,
      data: body,
    });

    return data;
  }

  public async post<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.post<T>(url, {
      headers,
      data: body,
    });
    return data;
  }

  public async patch<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.patch<T>(url, {
      headers,
      data: body,
    });
    return data;
  }

  public async delete<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.delete<T>(url, {
      headers,
      data: body,
    });
    return data;
  }
}

export default HttpRequestAdapter;
