/**
 * Cloud API
 * Open Cloud 2.0
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* A membership to a group.
*/
export class GroupMembership {
    /**
    * The resource path of the group membership.   Format: groups/{group}/memberships/{group_membership}
    */
    'path'?: string;
    /**
    * The timestamp of when the group membership was created.
    */
    'createTime'?: Date;
    /**
    * The timestamp of when the group membership was last updated.
    */
    'updateTime'?: Date;
    /**
    * The resource path of a member of the group.
    */
    'user'?: string;
    /**
    * The resource path for the role of the group member.
    */
    'role'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GroupMembership.attributeTypeMap;
    }

    public constructor() {
    }
}
