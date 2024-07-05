// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';

export class PlayersService extends BaseService {
  /**
   * Retrieve player information. Currently seems to return a truncated list with a total.
   * @param {string} lang - Language code
   * @returns {Promise<HttpResponse<any>>} Successful response
   */
  async getPlayerInformation(lang: string, requestConfig?: RequestConfig): Promise<HttpResponse<any>> {
    const path = this.client.buildPath('/{lang}/players', { lang: lang });
    const options: any = {
      responseSchema: z.any(),
      requestSchema: z.any(),
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.get(path, options);
  }
}