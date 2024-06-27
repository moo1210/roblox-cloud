import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxEconomyApiRevenueSummaryResponse } from '../models/RobloxEconomyApiRevenueSummaryResponse';

/**
 * no description
 */
export class RevenueSummaryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets recent Robux revenue summary for a group.
     * @param groupId The group id to get Robux summary for.
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     */
    public async v1GroupsGroupIdRevenueSummaryTimeFrameGet(groupId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError("RevenueSummaryApi", "v1GroupsGroupIdRevenueSummaryTimeFrameGet", "groupId");
        }


        // verify required parameter 'timeFrame' is not null or undefined
        if (timeFrame === null || timeFrame === undefined) {
            throw new RequiredError("RevenueSummaryApi", "v1GroupsGroupIdRevenueSummaryTimeFrameGet", "timeFrame");
        }


        // Path Params
        const localVarPath = '/v1/groups/{groupId}/revenue/summary/{timeFrame}'
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)))
            .replace('{' + 'timeFrame' + '}', encodeURIComponent(String(timeFrame)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RevenueSummaryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1GroupsGroupIdRevenueSummaryTimeFrameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxEconomyApiRevenueSummaryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxEconomyApiRevenueSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiRevenueSummaryResponse", ""
            ) as RobloxEconomyApiRevenueSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: The group is invalid.  4: The time frame is not supported or is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Insufficient permissions.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxEconomyApiRevenueSummaryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiRevenueSummaryResponse", ""
            ) as RobloxEconomyApiRevenueSummaryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
