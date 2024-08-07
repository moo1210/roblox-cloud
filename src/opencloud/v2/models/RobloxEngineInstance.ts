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

import { RobloxEngineInstanceDetails } from '../models/RobloxEngineInstanceDetails';
import { HttpFile } from '../../../common/http/http';

/**
* Instance is the base class for all classes in the Roblox class hierarchy.
*/
export class RobloxEngineInstance {
    /**
    * The unique identifier for an instance.   Format: lower-case hexadecimal characters  Example: 44b188da-ce63-2b47-02e9-c68d004b5664
    */
    'id'?: string;
    /**
    * The parent of the Instance.  Format: lower-case hexadecimal characters  Example: 44b188da-ce63-2b47-02e9-c68d004b5664
    */
    'parent'?: string;
    /**
    * A non-unique identifier of the Instance.
    */
    'name'?: string;
    'details'?: RobloxEngineInstanceDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string",
            "format": ""
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "Details",
            "type": "RobloxEngineInstanceDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxEngineInstance.attributeTypeMap;
    }

    public constructor() {
    }
}

