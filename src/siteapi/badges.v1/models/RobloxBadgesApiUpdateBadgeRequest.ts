/**
 * Badges Api v1
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
* A request model used for updating badge information.
*/
export class RobloxBadgesApiUpdateBadgeRequest {
    /**
    * The new badge name.
    */
    'name'?: string;
    /**
    * The new badge description.
    */
    'description'?: string;
    /**
    * The new enabled state of the badge.
    */
    'enabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxBadgesApiUpdateBadgeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

