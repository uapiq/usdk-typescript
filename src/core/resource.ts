// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { uAPI } from '../client';

export abstract class APIResource {
  protected _client: uAPI;

  constructor(client: uAPI) {
    this._client = client;
  }
}
