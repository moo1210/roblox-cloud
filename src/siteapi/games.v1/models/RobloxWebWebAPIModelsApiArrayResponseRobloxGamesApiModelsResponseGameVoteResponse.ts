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

import { RobloxGamesApiModelsResponseGameVoteResponse } from '../models/RobloxGamesApiModelsResponseGameVoteResponse';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse {
    'data'?: Array<RobloxGamesApiModelsResponseGameVoteResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<RobloxGamesApiModelsResponseGameVoteResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIModelsApiArrayResponseRobloxGamesApiModelsResponseGameVoteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

