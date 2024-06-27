import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxPresenceApiModelsRequestLastOnlineRequest } from '../models/RobloxPresenceApiModelsRequestLastOnlineRequest';
import { RobloxPresenceApiModelsRequestRegisterAppPresenceRequest } from '../models/RobloxPresenceApiModelsRequestRegisterAppPresenceRequest';
import { RobloxPresenceApiModelsRequestUserPresenceRequest } from '../models/RobloxPresenceApiModelsRequestUserPresenceRequest';
import { RobloxPresenceApiModelsResponseLastOnlineResponse } from '../models/RobloxPresenceApiModelsResponseLastOnlineResponse';
import { RobloxPresenceApiModelsResponseUserPresencesResponse } from '../models/RobloxPresenceApiModelsResponseUserPresencesResponse';

/**
 * no description
 */
export class PresenceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get last online timestamps for a list of users.
     * @param lastOnlineRequest 
     */
    public async v1PresenceLastOnlinePost(lastOnlineRequest: RobloxPresenceApiModelsRequestLastOnlineRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'lastOnlineRequest' is not null or undefined
        if (lastOnlineRequest === null || lastOnlineRequest === undefined) {
            throw new RequiredError("PresenceApi", "v1PresenceLastOnlinePost", "lastOnlineRequest");
        }


        // Path Params
        const localVarPath = '/v1/presence/last-online';

        // Make Request Context
        const requestContext = _config.getServer('https://presence.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(lastOnlineRequest, "RobloxPresenceApiModelsRequestLastOnlineRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param registerAppPresenceRequest 
     */
    public async v1PresenceRegisterAppPresencePost(registerAppPresenceRequest: RobloxPresenceApiModelsRequestRegisterAppPresenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'registerAppPresenceRequest' is not null or undefined
        if (registerAppPresenceRequest === null || registerAppPresenceRequest === undefined) {
            throw new RequiredError("PresenceApi", "v1PresenceRegisterAppPresencePost", "registerAppPresenceRequest");
        }


        // Path Params
        const localVarPath = '/v1/presence/register-app-presence';

        // Make Request Context
        const requestContext = _config.getServer('https://presence.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(registerAppPresenceRequest, "RobloxPresenceApiModelsRequestRegisterAppPresenceRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Presence for a list of users
     * @param userPresenceRequest 
     */
    public async v1PresenceUsersPost(userPresenceRequest: RobloxPresenceApiModelsRequestUserPresenceRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userPresenceRequest' is not null or undefined
        if (userPresenceRequest === null || userPresenceRequest === undefined) {
            throw new RequiredError("PresenceApi", "v1PresenceUsersPost", "userPresenceRequest");
        }


        // Path Params
        const localVarPath = '/v1/presence/users';

        // Make Request Context
        const requestContext = _config.getServer('https://presence.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(userPresenceRequest, "RobloxPresenceApiModelsRequestUserPresenceRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class PresenceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PresenceLastOnlinePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PresenceLastOnlinePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPresenceApiModelsResponseLastOnlineResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPresenceApiModelsResponseLastOnlineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPresenceApiModelsResponseLastOnlineResponse", ""
            ) as RobloxPresenceApiModelsResponseLastOnlineResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPresenceApiModelsResponseLastOnlineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPresenceApiModelsResponseLastOnlineResponse", ""
            ) as RobloxPresenceApiModelsResponseLastOnlineResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PresenceRegisterAppPresencePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PresenceRegisterAppPresencePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PresenceUsersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PresenceUsersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPresenceApiModelsResponseUserPresencesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPresenceApiModelsResponseUserPresencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPresenceApiModelsResponseUserPresencesResponse", ""
            ) as RobloxPresenceApiModelsResponseUserPresencesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPresenceApiModelsResponseUserPresencesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPresenceApiModelsResponseUserPresencesResponse", ""
            ) as RobloxPresenceApiModelsResponseUserPresencesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
