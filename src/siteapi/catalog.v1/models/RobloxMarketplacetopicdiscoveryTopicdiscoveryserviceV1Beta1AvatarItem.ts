/**
 * Catalog Api v1
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

export class RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItem {
    'targetId'?: number;
    /**
    *  [\'Invalid\' = 0, \'Asset\' = 1, \'Bundle\' = 2]
    */
    'itemType'?: RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItemItemTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "targetId",
            "baseName": "TargetId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "itemType",
            "baseName": "ItemType",
            "type": "RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItemItemTypeEnum",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItem.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItemItemTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
