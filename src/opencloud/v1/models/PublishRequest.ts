/**
 * Messaging Service
 * You can send and receive the following request and response to broadcast messages across servers of your experience. For information on the usage of the API, see [Messaging Usage Guide](../../../cloud/open-cloud/usage-messaging.md).
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
* The request body object with the message string that you want to publish to the live server.
*/
export class PublishRequest {
    /**
    * The message content that you want to publish to the live server.
    */
    'message'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublishRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

