import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxDevelopApiUpdatePluginRequest } from '../models/RobloxDevelopApiUpdatePluginRequest';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse';

/**
 * no description
 */
export class PluginsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets plugin details by ids.
     * @param pluginIds The plugin ids.
     */
    public async v1PluginsGet(pluginIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pluginIds' is not null or undefined
        if (pluginIds === null || pluginIds === undefined) {
            throw new RequiredError("PluginsApi", "v1PluginsGet", "pluginIds");
        }


        // Path Params
        const localVarPath = '/v1/plugins';

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pluginIds !== undefined) {
            requestContext.setQueryParam("pluginIds", ObjectSerializer.serialize(pluginIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates a plugin.
     * @param pluginId The id of the plugin.
     * @param request The Roblox.Develop.Api.UpdatePluginRequest.
     */
    public async v1PluginsPluginIdPatch(pluginId: number, request: RobloxDevelopApiUpdatePluginRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pluginId' is not null or undefined
        if (pluginId === null || pluginId === undefined) {
            throw new RequiredError("PluginsApi", "v1PluginsPluginIdPatch", "pluginId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("PluginsApi", "v1PluginsPluginIdPatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/plugins/{pluginId}'
            .replace('{' + 'pluginId' + '}', encodeURIComponent(String(pluginId)));

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
            ObjectSerializer.serialize(request, "RobloxDevelopApiUpdatePluginRequest", ""),
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

export class PluginsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PluginsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PluginsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Too many ids.  2: The format of the ids are invalid.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PluginsPluginIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PluginsPluginIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: Description too long.  6: Text moderated.  7: Invalid name.  8: The request body is missing.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  4: Insufficient permissions.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The id is invalid.", undefined, response.headers);
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

}
