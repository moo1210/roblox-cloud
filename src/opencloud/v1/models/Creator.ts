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

import { HttpFile } from '../../../common/http/http';

/**
* Represents a creator.
*/
export class Creator {
    /**
    * The User ID the creator. Required if the asset is individual-user-owned.
    */
    'userId'?: number;
    /**
    * The Group ID. Required if the asset is group-owned.
    */
    'groupId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Creator.attributeTypeMap;
    }

    public constructor() {
    }
}
