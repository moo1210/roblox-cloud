/**
 * Publish Api v1
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
* Request model to publish an audio asset.
*/
export class RobloxPublishApiVerifyAudioRequest {
    /**
    * Gets or sets the name of the audio asset.
    */
    'name'?: string;
    /**
    * File to be uploaded. Formatted as a base64 string.
    */
    'file'?: string;
    /**
    * Gets or sets the ID of the group if applicable. Optional.
    */
    'groupId'?: number;
    /**
    * Gets or sets the payment source. \'User\' or \'Group\'. Required if Group ID is set.
    */
    'paymentSource'?: string;
    /**
    * Gets or sets the size of the audio file in bytes.
    */
    'fileSize'?: number;
    /**
    * Gets or sets the duration of the audio in seconds.
    */
    'duration'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "paymentSource",
            "baseName": "paymentSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return RobloxPublishApiVerifyAudioRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

