/**
 * ItemConfiguration Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxItemConfigurationApiAllowedPriceRange } from '../models/RobloxItemConfigurationApiAllowedPriceRange';
import { HttpFile } from '../../../common/http/http';

/**
* Defines the metadata for reading about allowed premium pricing rules
*/
export class RobloxItemConfigurationApiAllowedPremiumPricingMetadata {
    /**
    * The allowed discount percentages for a Premium discount
    */
    'allowedDiscountPercentages'?: Array<number>;
    'allowedPriceRange'?: RobloxItemConfigurationApiAllowedPriceRange;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowedDiscountPercentages",
            "baseName": "allowedDiscountPercentages",
            "type": "Array<number>",
            "format": "int32"
        },
        {
            "name": "allowedPriceRange",
            "baseName": "allowedPriceRange",
            "type": "RobloxItemConfigurationApiAllowedPriceRange",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxItemConfigurationApiAllowedPremiumPricingMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

