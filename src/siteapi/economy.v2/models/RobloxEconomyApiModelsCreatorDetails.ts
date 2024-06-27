/**
 * Economy Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

export class RobloxEconomyApiModelsCreatorDetails {
    /**
    * Id of the Creator
    */
    'id'?: number;
    /**
    * Name of the Creator
    */
    'name'?: string;
    /**
    * Type of the Creator
    */
    'creatorType'?: string;
    /**
    * TargetId for the Creator
    */
    'creatorTargetId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatorType",
            "baseName": "CreatorType",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatorTargetId",
            "baseName": "CreatorTargetId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxEconomyApiModelsCreatorDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
