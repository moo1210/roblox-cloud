/**
 * Develop Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* Represents a universe moderation policy status
*/
export class RobloxApiDevelopModelsUniverseModerationPolicyStatus {
    /**
    * The region policy label [\'Unknown\' = 0, \'China\' = 1]
    */
    'region'?: RobloxApiDevelopModelsUniverseModerationPolicyStatusRegionEnum;
    /**
    * The status of the universe
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "region",
            "baseName": "region",
            "type": "RobloxApiDevelopModelsUniverseModerationPolicyStatusRegionEnum",
            "format": "int32"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsUniverseModerationPolicyStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxApiDevelopModelsUniverseModerationPolicyStatusRegionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

