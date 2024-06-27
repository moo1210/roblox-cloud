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

import { RobloxGamesApiModelsResponseGameResponseModel } from '../models/RobloxGamesApiModelsResponseGameResponseModel';
import { HttpFile } from '../../../common/http/http';

/**
* Game recommendations response model.
*/
export class RobloxGamesApiModelsResponseGameRecommendationsResponse {
    /**
    * The recommended games.
    */
    'games'?: Array<RobloxGamesApiModelsResponseGameResponseModel>;
    /**
    * The pagination key for next page query.  It will be null if there is no more data.
    */
    'nextPaginationKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "games",
            "baseName": "games",
            "type": "Array<RobloxGamesApiModelsResponseGameResponseModel>",
            "format": ""
        },
        {
            "name": "nextPaginationKey",
            "baseName": "nextPaginationKey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiModelsResponseGameRecommendationsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

