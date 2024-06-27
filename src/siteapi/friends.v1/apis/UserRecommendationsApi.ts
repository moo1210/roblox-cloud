import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxFriendsApiModelsResponseUserRecommendationsResponse } from '../models/RobloxFriendsApiModelsResponseUserRecommendationsResponse';

/**
 * no description
 */
export class UserRecommendationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Return a list of Recommendations for the Authenticated User.  V1 API to just return list of existing friends for the Authenticated user.
     */
    public async v1RecommendedUsersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/recommended-users';

        // Make Request Context
        const requestContext = _config.getServer('https://friends.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class UserRecommendationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RecommendedUsersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RecommendedUsersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxFriendsApiModelsResponseUserRecommendationsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxFriendsApiModelsResponseUserRecommendationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseUserRecommendationsResponse", ""
            ) as RobloxFriendsApiModelsResponseUserRecommendationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxFriendsApiModelsResponseUserRecommendationsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxFriendsApiModelsResponseUserRecommendationsResponse", ""
            ) as RobloxFriendsApiModelsResponseUserRecommendationsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
