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

export class RobloxGroupsApiShoutResponse {
    /**
    * The shout\'s message
    */
    'body'?: string;
    'poster'?: RobloxGroupsApiModelsResponseUserModel;
    /**
    * The shout\'s created time
    */
    'created'?: Date;
    /**
    * The shout\'s last updated time
    */
    'updated'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "poster",
            "baseName": "poster",
            "type": "RobloxGroupsApiModelsResponseUserModel",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiShoutResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

