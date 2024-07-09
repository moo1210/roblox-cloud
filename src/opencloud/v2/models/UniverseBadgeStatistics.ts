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
* Statistics about a badge.
*/
export class UniverseBadgeStatistics {
    /**
    * The total number of times the badge has been awarded.
    */
    'awardCount'?: number;
    /**
    * The number of times the badge has been awarded in the past 24 whole  hours.
    */
    'pastDayAwardCount'?: number;
    /**
    * The fraction of users of the experience who have been awarded the badge,  on a scale from 0.0 to 1.0.
    */
    'awardRate'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "awardCount",
            "baseName": "awardCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pastDayAwardCount",
            "baseName": "pastDayAwardCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "awardRate",
            "baseName": "awardRate",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return UniverseBadgeStatistics.attributeTypeMap;
    }

    public constructor() {
    }
}
