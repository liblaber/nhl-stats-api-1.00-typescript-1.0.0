// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { GetTeamStatsParams } from './request-params';

export class TeamsService extends BaseService {
  /**
   * Retrieve list of all teams.
   * @param {string} lang - Language code
   * @returns {Promise<HttpResponse<any>>} Successful response
   */
  async getTeamInformation(lang: string, requestConfig?: RequestConfig): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'GET',
      path: '/{lang}/team',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lang', lang);
    return this.client.call<any>(request);
  }

  /**
   * Retrieve team stats for a specific report.
   * @param {string} report - Team report
   * @param {string} lang - Language code
   * @param {boolean} [isAggregate] - Optional
   * @param {boolean} [isGame] - Optional
   * @param {string} [factCayenneExp] - Optional
   * @param {string} [include] - Optional
   * @param {string} [exclude] - Optional
   * @param {string} [cayenneExp] - Optional
   * @param {string} [sort] - Optional
   * @param {string} [dir] - Optional
   * @param {number} [start] - Optional
   * @param {number} [limit] - Optional (Note: a limit of -1 will return all results)
   * @returns {Promise<HttpResponse<any>>} Successful response
   */
  async getTeamStats(
    report: string,
    lang: string,
    params?: GetTeamStatsParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'GET',
      path: '/{lang}/team/{report}',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('report', report);
    request.addPathParam('lang', lang);
    request.addQueryParam('isAggregate', params?.isAggregate);
    request.addQueryParam('isGame', params?.isGame);
    request.addQueryParam('factCayenneExp', params?.factCayenneExp);
    request.addQueryParam('include', params?.include);
    request.addQueryParam('exclude', params?.exclude);
    request.addQueryParam('cayenneExp', params?.cayenneExp);
    request.addQueryParam('sort', params?.sort);
    request.addQueryParam('dir', params?.dir);
    request.addQueryParam('start', params?.start);
    request.addQueryParam('limit', params?.limit);
    return this.client.call<any>(request);
  }

  /**
   * Retrieve list of all franchises.
   * @param {string} lang - Language code
   * @returns {Promise<HttpResponse<any>>} Successful response
   */
  async getFranchiseInformation(lang: string, requestConfig?: RequestConfig): Promise<HttpResponse<any>> {
    const request = new Request({
      method: 'GET',
      path: '/{lang}/franchise',
      config: this.config,
      responseSchema: z.any(),
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('lang', lang);
    return this.client.call<any>(request);
  }
}
