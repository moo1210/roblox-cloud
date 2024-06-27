import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel';

/**
 * no description
 */
export class AssetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the voting information of the given assets
     * @param assetIds The ids of the Roblox.Platform.Assets.IAsset.
     */
    public async v1AssetsVotingGet(assetIds: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetIds' is not null or undefined
        if (assetIds === null || assetIds === undefined) {
            throw new RequiredError("AssetsApi", "v1AssetsVotingGet", "assetIds");
        }


        // Path Params
        const localVarPath = '/v1/assets/voting';

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (assetIds !== undefined) {
            requestContext.setQueryParam("assetIds", ObjectSerializer.serialize(assetIds, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetsVotingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetsVotingGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
