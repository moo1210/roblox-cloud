/**
 * Friends Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxFriendsApiModelsResponseUserRecommendation } from '../models/RobloxFriendsApiModelsResponseUserRecommendation';
import { HttpFile } from '../../../common/http/http';

export class RobloxFriendsApiModelsResponseUserRecommendationsResponse {
    /**
    * A collection of User Recommendations for a user.
    */
    'recommendedUsers'?: Array<RobloxFriendsApiModelsResponseUserRecommendation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recommendedUsers",
            "baseName": "recommendedUsers",
            "type": "Array<RobloxFriendsApiModelsResponseUserRecommendation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxFriendsApiModelsResponseUserRecommendationsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

