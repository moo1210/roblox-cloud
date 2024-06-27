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
* Represents a Roblox place.
*/
export class Place {
    /**
    * The resource path of the place.  Format: universes/{universe}/places/{place}
    */
    'path'?: string;
    /**
    * The timestamp at which the place was created.
    */
    'createTime'?: Date;
    /**
    * The timestamp at which the place was updated.
    */
    'updateTime'?: Date;
    /**
    * The name of the place.
    */
    'displayName'?: string;
    /**
    * The description of the place.
    */
    'description'?: string;
    /**
    * The maximum number of allowed users in a single server.
    */
    'serverSize'?: number;

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
            "name": "displayName",
            "baseName": "displayName",
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
            "name": "serverSize",
            "baseName": "serverSize",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return Place.attributeTypeMap;
    }

    public constructor() {
    }
}
