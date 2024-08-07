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
* A join request for a group.   Will only be accessible to requesters with the `Accept Join Requests`  permission.
*/
export class GroupJoinRequest {
    /**
    * The resource path of the group_join_request.  Format: groups/{group}/join-requests/{group_join_request}
    */
    'path'?: string;
    /**
    * The timestamp when the group_join_request was created.
    */
    'createTime'?: Date;
    /**
    * The resource path of the user.
    */
    'user'?: string;

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
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GroupJoinRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

