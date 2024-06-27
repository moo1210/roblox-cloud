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

import { GroupJoinRequest } from '../models/GroupJoinRequest';
import { HttpFile } from '../../../common/http/http';

/**
* A list of GroupJoinRequests in the parent collection.
*/
export class ListGroupJoinRequestsResponse {
    /**
    * The GroupJoinRequests from the specified Group.
    */
    'groupJoinRequests'?: Array<GroupJoinRequest>;
    /**
    * A token that you can send as a `pageToken` parameter to retrieve the next  page. If this field is omitted, there are no subsequent pages.
    */
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupJoinRequests",
            "baseName": "groupJoinRequests",
            "type": "Array<GroupJoinRequest>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "nextPageToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListGroupJoinRequestsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
