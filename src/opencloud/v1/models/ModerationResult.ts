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
* The moderation result of the asset. 
*/
export class ModerationResult {
    /**
    * The moderation state of the asset. Can be `MODERATION_STATE_REVIEWING`, `MODERATION_STATE_REJECTED`, or `MODERATION_STATE_APPROVED`.
    */
    'moderationState'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "moderationState",
            "baseName": "moderationState",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModerationResult.attributeTypeMap;
    }

    public constructor() {
    }
}
