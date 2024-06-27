import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel } from '../models/RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel';

/**
 * no description
 */
export class GroupPayoutsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the group payout eligibility for a group of users.
     * @param groupId 
     * @param userIds 
     */
    public async v1GroupsGroupIdUsersPayoutEligibilityGet(groupId: number, userIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("GroupPayoutsApi", "v1GroupsGroupIdUsersPayoutEligibilityGet", "groupId");
        }


        // verify required parameter 'userIds' is not null or undefined
        if (userIds === null || userIds === undefined) {
            throw new RequiredError("GroupPayoutsApi", "v1GroupsGroupIdUsersPayoutEligibilityGet", "userIds");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/users-payout-eligibility'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (userIds !== undefined) {
            requestContext.setQueryParam("userIds", ObjectSerializer.serialize(userIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class GroupPayoutsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdUsersPayoutEligibilityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel", ""
            ) as RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel", ""
            ) as RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
