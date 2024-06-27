/**
 * Assets API
 * You can send and receive the following request and response payloads to create assets on Roblox. For information on the usage of the API, see the [Usage Guide](../../../cloud/open-cloud/usage-assets.md).
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Any } from '../models/Any';
import { Status } from '../models/Status';
import { HttpFile } from '../../../common/http/http';

/**
* This resource represents a long-running operation that is the result of a network API call.
*/
export class Operation {
    /**
    * The server-assigned resource path. The default format is `operations/{operation_id}`.
    */
    'path'?: string;
    'metadata'?: Any;
    /**
    * If `false`, the operation is still in progress. If `true`, the operation is completed.
    */
    'done'?: boolean;
    'error'?: Status;
    'response'?: Any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "Any",
            "format": ""
        },
        {
            "name": "done",
            "baseName": "done",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "Status",
            "format": ""
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "Any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Operation.attributeTypeMap;
    }

    public constructor() {
    }
}

