import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiDevelopModelsPlaceConfigurationModel } from '../models/RobloxApiDevelopModelsPlaceConfigurationModel';
import { RobloxApiDevelopModelsPlaceModel } from '../models/RobloxApiDevelopModelsPlaceModel';

/**
 * no description
 */
export class PlacesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public async v1PlacesPlaceIdPatch(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("PlacesApi", "v1PlacesPlaceIdPatch", "placeId");
        }


        // verify required parameter 'configuration' is not null or undefined
        if (configuration === null || configuration === undefined) {
            throw new RequiredError("PlacesApi", "v1PlacesPlaceIdPatch", "configuration");
        }


        // Path Params
        const localVarPath = '/v1/places/{placeId}'
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
            ObjectSerializer.serialize(configuration, "RobloxApiDevelopModelsPlaceConfigurationModel", ""),
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
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public async v1PlacesPlaceIdPost(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("PlacesApi", "v1PlacesPlaceIdPost", "placeId");
        }


        // verify required parameter 'configuration' is not null or undefined
        if (configuration === null || configuration === undefined) {
            throw new RequiredError("PlacesApi", "v1PlacesPlaceIdPost", "configuration");
        }


        // Path Params
        const localVarPath = '/v1/places/{placeId}'
            .replace('{' + 'placeId' + '}', encodeURIComponent(String(placeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(configuration, "RobloxApiDevelopModelsPlaceConfigurationModel", ""),
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

export class PlacesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PlacesPlaceIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PlacesPlaceIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiDevelopModelsPlaceModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModel", ""
            ) as RobloxApiDevelopModelsPlaceModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "placeId is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Authenticated user is not authorized to manage this place.  0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiDevelopModelsPlaceModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModel", ""
            ) as RobloxApiDevelopModelsPlaceModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PlacesPlaceIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PlacesPlaceIdPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiDevelopModelsPlaceModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModel", ""
            ) as RobloxApiDevelopModelsPlaceModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "placeId is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Authenticated user is not authorized to manage this place.  0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiDevelopModelsPlaceModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsPlaceModel", ""
            ) as RobloxApiDevelopModelsPlaceModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
