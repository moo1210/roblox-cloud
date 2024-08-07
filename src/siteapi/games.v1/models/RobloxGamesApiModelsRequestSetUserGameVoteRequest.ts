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

import { HttpFile } from '../../../common/http/http';

/**
* A request for set user\'s vote for a game
*/
export class RobloxGamesApiModelsRequestSetUserGameVoteRequest {
    /**
    * The vote to set
    */
    'vote'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "vote",
            "baseName": "vote",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiModelsRequestSetUserGameVoteRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

