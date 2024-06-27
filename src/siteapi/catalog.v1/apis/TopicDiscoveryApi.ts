import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxCatalogApiTopicsTopicRequestModel } from '../models/RobloxCatalogApiTopicsTopicRequestModel';
import { RobloxCatalogApiTopicsTopicResponse } from '../models/RobloxCatalogApiTopicsTopicResponse';

/**
 * no description
 */
export class TopicDiscoveryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param model 
     */
    public async v1TopicGetTopicsPost(model: RobloxCatalogApiTopicsTopicRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("TopicDiscoveryApi", "v1TopicGetTopicsPost", "model");
        }


        // Path Params
        const localVarPath = '/v1/topic/get-topics';

        // Make Request Context
        const requestContext = _config.getServer('https://catalog.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(model, "RobloxCatalogApiTopicsTopicRequestModel", ""),
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

export class TopicDiscoveryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1TopicGetTopicsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1TopicGetTopicsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxCatalogApiTopicsTopicResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxCatalogApiTopicsTopicResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiTopicsTopicResponse", ""
            ) as RobloxCatalogApiTopicsTopicResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxCatalogApiTopicsTopicResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxCatalogApiTopicsTopicResponse", ""
            ) as RobloxCatalogApiTopicsTopicResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
