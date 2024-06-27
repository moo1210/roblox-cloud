import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { PublishRequest } from '../models/PublishRequest';

/**
 * no description
 */
export class CrossServerMessagingApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Publish a message to a pre-defined topic of an experience, with the size of the message up to 1,024 characters (1 KB). Requires the **Publish** permission for API keys and the **universe-messaging-service:publish** scope for OAuth 2.0 apps. See [Cross-Server Messaging](../../../cloud-services/cross-server-messaging.md#subscribe-users-to-receive-messages) for defining and subscribing users to a topic.
     * @param universeId The identifier of the experience in which you want to send your messages to. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-messaging.md#publishing-messages-to-live-servers) on **Creator Dashboard**.
     * @param topic The topic that you want to publish your message to, with up to 80 characters.
     * @param publishRequest 
     */
    public async crossServerMessagingPublish(universeId: number, topic: string, publishRequest?: PublishRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("CrossServerMessagingApi", "crossServerMessagingPublish", "universeId");
        }


        // verify required parameter 'topic' is not null or undefined
        if (topic === null || topic === undefined) {
            throw new RequiredError("CrossServerMessagingApi", "crossServerMessagingPublish", "topic");
        }



        // Path Params
        const localVarPath = '/v1/universes/{universeId}/topics/{topic}'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)))
            .replace('{' + 'topic' + '}', encodeURIComponent(String(topic)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/messaging-service').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(publishRequest, "PublishRequest", ""),
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

export class CrossServerMessagingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to crossServerMessagingPublish
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async crossServerMessagingPublishWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid request.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The API key is not valid for this operation / You don\&#39;t have the authorization.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Publishing is not allowed on this experience.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server internal error / Unknown error.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
