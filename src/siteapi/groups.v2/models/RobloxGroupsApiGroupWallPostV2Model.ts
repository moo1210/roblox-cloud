/**
 * Groups Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxGroupsApiUserGroupRoleResponse } from '../models/RobloxGroupsApiUserGroupRoleResponse';
import { HttpFile } from '../../../common/http/http';

/**
* A response model for group wall post information
*/
export class RobloxGroupsApiGroupWallPostV2Model {
    /**
    * The group wall post Id.
    */
    'id'?: number;
    'poster'?: RobloxGroupsApiUserGroupRoleResponse;
    /**
    * The group wall post body.
    */
    'body'?: string;
    /**
    * When the group wall post was posted.
    */
    'created'?: Date;
    /**
    * When the group wall post was last updated.
    */
    'updated'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "poster",
            "baseName": "poster",
            "type": "RobloxGroupsApiUserGroupRoleResponse",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
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
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiGroupWallPostV2Model.attributeTypeMap;
    }

    public constructor() {
    }
}
