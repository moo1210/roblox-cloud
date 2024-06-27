import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxPublishApiPublishAudioResponse } from '../models/RobloxPublishApiPublishAudioResponse';
import { RobloxPublishApiUploadAudioRequest } from '../models/RobloxPublishApiUploadAudioRequest';
import { RobloxPublishApiVerifyAudioRequest } from '../models/RobloxPublishApiVerifyAudioRequest';
import { RobloxPublishApiVerifyAudioResponse } from '../models/RobloxPublishApiVerifyAudioResponse';

/**
 * no description
 */
export class AudioApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Published an audio file and returns the new asset info.
     * @param request The file upload request body. Roblox.Publish.Api.UploadAudioRequest
     */
    public async v1AudioPost(request: RobloxPublishApiUploadAudioRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("AudioApi", "v1AudioPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/audio';

        // Make Request Context
        const requestContext = _config.getServer('https://publish.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxPublishApiUploadAudioRequest", ""),
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
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param request The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
     */
    public async v1AudioVerifyPost(request: RobloxPublishApiVerifyAudioRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("AudioApi", "v1AudioVerifyPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/audio/verify';

        // Make Request Context
        const requestContext = _config.getServer('https://publish.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxPublishApiVerifyAudioRequest", ""),
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

export class AudioApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AudioPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AudioPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPublishApiPublishAudioResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPublishApiPublishAudioResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPublishApiPublishAudioResponse", ""
            ) as RobloxPublishApiPublishAudioResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The request did not contain a file to be uploaded.  4: The file in the request is too large.  5: The duration of the audio file is too long.  8: The file type is not supported.  9: The file is corrupted  11: Missing permissions to spend group funds.  14: The user/group does not have suffiecient funds to publish.  14: The user/group does not have suffiecient funds to publish.  15: The audio file has already been reviewed and rejected.  18: Too many requests. Try again later.  20: Error while trying to purchase the product.  22: The file size estimation error was greater than the acceptable margin of error.  23: The duration estimation error was greater than the acceptable margin of error.  24: Asset privacy is invalid.  29: Invalid argument in the request.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.  1: The request did not include an authorization.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: Failed to parse the file.  19: Asset creation was unavailable. Please try again.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPublishApiPublishAudioResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPublishApiPublishAudioResponse", ""
            ) as RobloxPublishApiPublishAudioResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AudioVerifyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AudioVerifyPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxPublishApiVerifyAudioResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxPublishApiVerifyAudioResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPublishApiVerifyAudioResponse", ""
            ) as RobloxPublishApiVerifyAudioResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The request did not contain a file to be uploaded.  4: The file in the request is too large.  5: The duration of the audio file is too long.  8: The file type is not supported.  9: The file is corrupted  18: Too many requests. Try again later.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.  1: The request did not include an authorization.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "7: Failed to parse the file.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxPublishApiVerifyAudioResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxPublishApiVerifyAudioResponse", ""
            ) as RobloxPublishApiVerifyAudioResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
