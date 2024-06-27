/**
 * Develop Api v1
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
* Asset voting information
*/
export class RobloxApiDevelopModelsResponseAssetVotingModel {
    /**
    * The !:IAsset\'s id.
    */
    'assetId'?: number;
    /**
    * Whether the user has voted on this !:IAsset.
    */
    'hasUserVoted'?: boolean;
    /**
    * Whether the user can vote on this !:IAsset.
    */
    'canUserVote'?: boolean;
    /**
    * Whether votes should be shown.
    */
    'shouldShowVotes'?: boolean;
    /**
    * The number of up votes.
    */
    'upVotes'?: number;
    /**
    * The number of down votes.
    */
    'downVotes'?: number;
    /**
    * The reason this !:IAsset cannot be voted on.
    */
    'reasonForNotAbleToVote'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "hasUserVoted",
            "baseName": "hasUserVoted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canUserVote",
            "baseName": "canUserVote",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shouldShowVotes",
            "baseName": "shouldShowVotes",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "upVotes",
            "baseName": "upVotes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "downVotes",
            "baseName": "downVotes",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "reasonForNotAbleToVote",
            "baseName": "reasonForNotAbleToVote",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsResponseAssetVotingModel.attributeTypeMap;
    }

    public constructor() {
    }
}
