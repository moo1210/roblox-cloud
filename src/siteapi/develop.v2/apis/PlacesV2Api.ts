import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiDevelopModelsPlaceConfigurationModelV2 } from '../models/RobloxApiDevelopModelsPlaceConfigurationModelV2';
import { RobloxApiDevelopModelsPlaceModelV2 } from '../models/RobloxApiDevelopModelsPlaceModelV2';

/**
 * no description
 */
export class PlacesV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     */
    public async v2PlacesPlaceIdGet(placeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("PlacesV2Api", "v2PlacesPlaceIdGet", "placeId");
        }


        // Path Params
        const localVarPath = '/v2/places/{placeId}'
            .replace('{' + 'placeId' + '}', encodeURIComponent(String(placeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public async v2PlacesPlaceIdPatch(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModelV2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("PlacesV2Api", "v2PlacesPlaceIdPatch", "placeId");
        }


        // verify required parameter 'configuration' is not null or undefined
        if (configuration === null || configuration === undefined) {
            throw new RequiredError("PlacesV2Api", "v2PlacesPlaceIdPatch", "configuration");
        }


        // Path Params
        const localVarPath = '/v2/places/{placeId}'
            .replace('{' + 'placeId' + '}', encodeURIComponent(String(placeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(configuration, "RobloxApiDevelopModelsPlaceConfigurationModelV2", ""),
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

export class PlacesV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2PlacesPlaceIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2PlacesPlaceIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModelV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiDevelopModelsPlaceModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModelV2", ""
            ) as RobloxApiDevelopModelsPlaceModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Authenticated user is not authorized to manage this place.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "placeId Place not found.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiDevelopModelsPlaceModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModelV2", ""
            ) as RobloxApiDevelopModelsPlaceModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2PlacesPlaceIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2PlacesPlaceIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModelV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiDevelopModelsPlaceModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModelV2", ""
            ) as RobloxApiDevelopModelsPlaceModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Authenticated user is not authorized to manage this place.  0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "placeId Place not found.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiDevelopModelsPlaceModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModelV2", ""
            ) as RobloxApiDevelopModelsPlaceModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
