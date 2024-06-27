/**
 * Games Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxGamesApiPlaceResponse } from '../models/RobloxGamesApiPlaceResponse';
import { HttpFile } from '../../../common/http/http';

/**
* Response model for a VIP server game.
*/
export class RobloxGamesApiGameResponse {
    /**
    * Game id
    */
    'id'?: number;
    /**
    * Game name
    */
    'name'?: string;
    'rootPlace'?: RobloxGamesApiPlaceResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "rootPlace",
            "baseName": "rootPlace",
            "type": "RobloxGamesApiPlaceResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiGameResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
