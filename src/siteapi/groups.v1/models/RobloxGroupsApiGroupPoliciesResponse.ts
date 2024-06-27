/**
 * Groups Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxGroupsApiGroupPolicyResponse } from '../models/RobloxGroupsApiGroupPolicyResponse';
import { HttpFile } from '../../../common/http/http';

export class RobloxGroupsApiGroupPoliciesResponse {
    'groups'?: Array<RobloxGroupsApiGroupPolicyResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<RobloxGroupsApiGroupPolicyResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiGroupPoliciesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
