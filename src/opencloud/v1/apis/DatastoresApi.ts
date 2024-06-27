import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { DatastoresListDatastoresAsync200Response } from '../models/DatastoresListDatastoresAsync200Response';

/**
 * no description
 */
export class DatastoresApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a list of an experience\'s data stores.
     * List data stores in an experience
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param cursor Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     * @param prefix Provide to return only data stores with this prefix. 
     */
    public async datastoresListDatastoresAsync(universeId: number, cursor?: string, limit?: number, prefix?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("DatastoresApi", "datastoresListDatastoresAsync", "universeId");
        }





        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Query Params
        if (prefix !== undefined) {
            requestContext.setQueryParam("prefix", ObjectSerializer.serialize(prefix, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DatastoresApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to datastoresListDatastoresAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async datastoresListDatastoresAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DatastoresListDatastoresAsync200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DatastoresListDatastoresAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DatastoresListDatastoresAsync200Response", ""
            ) as DatastoresListDatastoresAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DatastoresListDatastoresAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DatastoresListDatastoresAsync200Response", ""
            ) as DatastoresListDatastoresAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
