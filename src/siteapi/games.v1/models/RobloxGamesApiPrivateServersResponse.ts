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

import { RobloxWebResponsesGamesGameServerResponse } from '../models/RobloxWebResponsesGamesGameServerResponse';
import { HttpFile } from '../../../common/http/http';

/**
* User Presences Response model
*/
export class RobloxGamesApiPrivateServersResponse {
    /**
    * A collection of game server responses
    */
    'privateServerResponses'?: Array<RobloxWebResponsesGamesGameServerResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "privateServerResponses",
            "baseName": "privateServerResponses",
            "type": "Array<RobloxWebResponsesGamesGameServerResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiPrivateServersResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
