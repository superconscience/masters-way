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

import { exists, mapValues } from '../runtime';
import type { SchemasUserPlainResponse } from './SchemasUserPlainResponse';
import {
    SchemasUserPlainResponseFromJSON,
    SchemasUserPlainResponseFromJSONTyped,
    SchemasUserPlainResponseToJSON,
} from './SchemasUserPlainResponse';

/**
 * 
 * @export
 * @interface SchemasPlanPlainResponse
 */
export interface SchemasPlanPlainResponse {
    /**
     * 
     * @type {number}
     * @memberof SchemasPlanPlainResponse
     */
    estimationTime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SchemasPlanPlainResponse
     */
    isDone?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SchemasPlanPlainResponse
     */
    job?: string;
    /**
     * 
     * @type {SchemasUserPlainResponse}
     * @memberof SchemasPlanPlainResponse
     */
    owner?: SchemasUserPlainResponse;
}

/**
 * Check if a given object implements the SchemasPlanPlainResponse interface.
 */
export function instanceOfSchemasPlanPlainResponse(
    value: object
): boolean {
    let isInstance = true;

    return isInstance;
}

export function SchemasPlanPlainResponseFromJSON(json: any): SchemasPlanPlainResponse {
    return SchemasPlanPlainResponseFromJSONTyped(json, false);
}

export function SchemasPlanPlainResponseFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SchemasPlanPlainResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'estimationTime': !exists(json, 'estimationTime') ? undefined : json['estimationTime'],
        'isDone': !exists(json, 'isDone') ? undefined : json['isDone'],
        'job': !exists(json, 'job') ? undefined : json['job'],
        'owner': !exists(json, 'owner') ? undefined : SchemasUserPlainResponseFromJSON(json['owner']),
    };
}


export function SchemasPlanPlainResponseToJSON(value?: SchemasPlanPlainResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'estimationTime': value.estimationTime,
        'isDone': value.isDone,
        'job': value.job,
        'owner': SchemasUserPlainResponseToJSON(value.owner),
    };
}
