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
* Response model for games.
*/
export class RobloxGamesApiModelsResponseGameResponseModel {
    /**
    * Creator Id
    */
    'creatorId'?: number;
    /**
    * Creator name
    */
    'creatorName'?: string;
    /**
    * Creator type
    */
    'creatorType'?: string;
    /**
    * Creator verified badge status
    */
    'creatorHasVerifiedBadge'?: boolean;
    /**
    * Total up votes
    */
    'totalUpVotes'?: number;
    /**
    * Total down votes
    */
    'totalDownVotes'?: number;
    /**
    * Universe id
    */
    'universeId'?: number;
    /**
    * Game name
    */
    'name'?: string;
    /**
    * Place Id
    */
    'placeId'?: number;
    /**
    * Player count
    */
    'playerCount'?: number;
    /**
    * Place image token
    */
    'imageToken'?: string;
    /**
    * Is sponsored
    */
    'isSponsored'?: boolean;
    /**
    * Native ad data
    */
    'nativeAdData'?: string;
    /**
    * Show the sponsored label
    */
    'isShowSponsoredLabel'?: boolean;
    /**
    * The game paid access price
    */
    'price'?: number;
    /**
    * Provide all necessary information which helps analytics for improvement, for example, the algorithm, dataset version, position, etc..
    */
    'analyticsIdentifier'?: string;
    /**
    * Provide all necessary information which helps analytics for improvement, for example, the algorithm, dataset version, position, etc..
    */
    'gameDescription'?: string;
    /**
    * The game genre display name
    */
    'genre'?: string;
    /**
    * Age Recommendation minimum age.
    */
    'minimumAge'?: number;
    /**
    * Age Recommendation display name.
    */
    'ageRecommendationDisplayName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creatorId",
            "baseName": "creatorId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "creatorName",
            "baseName": "creatorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatorType",
            "baseName": "creatorType",
            "type": "string",
            "format": ""
        },
        {
            "name": "creatorHasVerifiedBadge",
            "baseName": "creatorHasVerifiedBadge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "totalUpVotes",
            "baseName": "totalUpVotes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalDownVotes",
            "baseName": "totalDownVotes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "universeId",
            "baseName": "universeId",
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
            "name": "placeId",
            "baseName": "placeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "playerCount",
            "baseName": "playerCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "imageToken",
            "baseName": "imageToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSponsored",
            "baseName": "isSponsored",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nativeAdData",
            "baseName": "nativeAdData",
            "type": "string",
            "format": ""
        },
        {
            "name": "isShowSponsoredLabel",
            "baseName": "isShowSponsoredLabel",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "analyticsIdentifier",
            "baseName": "analyticsIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "gameDescription",
            "baseName": "gameDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "genre",
            "baseName": "genre",
            "type": "string",
            "format": ""
        },
        {
            "name": "minimumAge",
            "baseName": "minimumAge",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "ageRecommendationDisplayName",
            "baseName": "ageRecommendationDisplayName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiModelsResponseGameResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}
