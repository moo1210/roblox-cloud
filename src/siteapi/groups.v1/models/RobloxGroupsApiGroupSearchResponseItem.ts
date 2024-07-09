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

import { HttpFile } from '../../../common/http/http';

/**
* A group search response
*/
export class RobloxGroupsApiGroupSearchResponseItem {
    /**
    * The group id
    */
    'id'?: number;
    /**
    * The group name
    */
    'name'?: string;
    /**
    * The group description
    */
    'description'?: string;
    /**
    * The number of members in the group
    */
    'memberCount'?: number;
    'previousName'?: string;
    /**
    * When true anyone can join the group. When false manual approval  is required to join the group
    */
    'publicEntryAllowed'?: boolean;
    /**
    * When the group was created
    */
    'created'?: Date;
    /**
    * When the group was last updated
    */
    'updated'?: Date;
    /**
    * The group\'s verified badge status
    */
    'hasVerifiedBadge'?: boolean;

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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "memberCount",
            "baseName": "memberCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "previousName",
            "baseName": "previousName",
            "type": "string",
            "format": ""
        },
        {
            "name": "publicEntryAllowed",
            "baseName": "publicEntryAllowed",
            "type": "boolean",
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
        },
        {
            "name": "hasVerifiedBadge",
            "baseName": "hasVerifiedBadge",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiGroupSearchResponseItem.attributeTypeMap;
    }

    public constructor() {
    }
}

