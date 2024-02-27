// @ts-nocheck
/* eslint-disable */
/**
 * Masters way API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  SchemasCreateWayTagPayload,
  SchemasUpdateWayTagPayload,
  SchemasWayTagResponse,
} from '../models/index';
import {
    SchemasCreateWayTagPayloadFromJSON,
    SchemasCreateWayTagPayloadToJSON,
    SchemasUpdateWayTagPayloadFromJSON,
    SchemasUpdateWayTagPayloadToJSON,
    SchemasWayTagResponseFromJSON,
    SchemasWayTagResponseToJSON,
} from '../models/index';

export interface CreateWayTagRequest {
    request: SchemasCreateWayTagPayload;
}

export interface DeleteWayTagRequest {
    wayTagId: string;
}

export interface GetWayTagsByWayUuidRequest {
    wayId: string;
}

export interface UpdateWayTagRequest {
    wayTagId: string;
    request: SchemasUpdateWayTagPayload;
}

/**
 * 
 */
export class WayTagApi extends runtime.BaseAPI {

    /**
     * Create a new wayTag
     */
    async createWayTagRaw(requestParameters: CreateWayTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemasWayTagResponse>> {
        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling createWayTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wayTags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SchemasCreateWayTagPayloadToJSON(requestParameters.request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemasWayTagResponseFromJSON(jsonValue));
    }

    /**
     * Create a new wayTag
     */
    async createWayTag(requestParameters: CreateWayTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemasWayTagResponse> {
        const response = await this.createWayTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete wayTag by UUID
     */
    async deleteWayTagRaw(requestParameters: DeleteWayTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.wayTagId === null || requestParameters.wayTagId === undefined) {
            throw new runtime.RequiredError('wayTagId','Required parameter requestParameters.wayTagId was null or undefined when calling deleteWayTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wayTags/{wayTagId}`.replace(`{${"wayTagId"}}`, encodeURIComponent(String(requestParameters.wayTagId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete wayTag by UUID
     */
    async deleteWayTag(requestParameters: DeleteWayTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWayTagRaw(requestParameters, initOverrides);
    }

    /**
     * Get wayTags by way UUID
     */
    async getWayTagsByWayUuidRaw(requestParameters: GetWayTagsByWayUuidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SchemasWayTagResponse>>> {
        if (requestParameters.wayId === null || requestParameters.wayId === undefined) {
            throw new runtime.RequiredError('wayId','Required parameter requestParameters.wayId was null or undefined when calling getWayTagsByWayUuid.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wayTags/{wayId}`.replace(`{${"wayId"}}`, encodeURIComponent(String(requestParameters.wayId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SchemasWayTagResponseFromJSON));
    }

    /**
     * Get wayTags by way UUID
     */
    async getWayTagsByWayUuid(requestParameters: GetWayTagsByWayUuidRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SchemasWayTagResponse>> {
        const response = await this.getWayTagsByWayUuidRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update wayTag by UUID
     */
    async updateWayTagRaw(requestParameters: UpdateWayTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SchemasWayTagResponse>> {
        if (requestParameters.wayTagId === null || requestParameters.wayTagId === undefined) {
            throw new runtime.RequiredError('wayTagId','Required parameter requestParameters.wayTagId was null or undefined when calling updateWayTag.');
        }

        if (requestParameters.request === null || requestParameters.request === undefined) {
            throw new runtime.RequiredError('request','Required parameter requestParameters.request was null or undefined when calling updateWayTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wayTags/{wayTagId}`.replace(`{${"wayTagId"}}`, encodeURIComponent(String(requestParameters.wayTagId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SchemasUpdateWayTagPayloadToJSON(requestParameters.request),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemasWayTagResponseFromJSON(jsonValue));
    }

    /**
     * Update wayTag by UUID
     */
    async updateWayTag(requestParameters: UpdateWayTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SchemasWayTagResponse> {
        const response = await this.updateWayTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}