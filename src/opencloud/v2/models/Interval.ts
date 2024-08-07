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
* Represents a time interval, encoded as a Timestamp start (inclusive) and a  Timestamp end (exclusive).   The start must be less than or equal to the end.  When the start equals the end, the interval is empty (matches no time).  When both start and end are unspecified, the interval matches any time.
*/
export class Interval {
    /**
    * Optional. Inclusive start of the interval.   If specified, a Timestamp matching this interval will have to be the same  or after the start.
    */
    'startTime'?: Date;
    /**
    * Optional. Exclusive end of the interval.   If specified, a Timestamp matching this interval will have to be before the  end.
    */
    'endTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return Interval.attributeTypeMap;
    }

    public constructor() {
    }
}

