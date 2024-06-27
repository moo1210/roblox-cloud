/**
 * Groups Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxGroupsApiModelsResponseUserModel } from '../models/RobloxGroupsApiModelsResponseUserModel';
import { HttpFile } from '../../../common/http/http';

/**
* Response model for !:GroupJoinRequests
*/
export class RobloxGroupsApiGroupJoinRequestResponse {
    'requester'?: RobloxGroupsApiModelsResponseUserModel;
    /**
    * The DateTime the request was created
    */
    'created'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "requester",
            "baseName": "requester",
            "type": "RobloxGroupsApiModelsResponseUserModel",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiGroupJoinRequestResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

