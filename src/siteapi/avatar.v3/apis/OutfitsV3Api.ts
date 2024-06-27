import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiAvatarModelsOutfitDetailsModelV2 } from '../models/RobloxApiAvatarModelsOutfitDetailsModelV2';
import { RobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsOutfitUpdateModelV3 } from '../models/RobloxApiAvatarModelsOutfitUpdateModelV3';

/**
 * no description
 */
export class OutfitsV3ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public async v3OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'outfitUpdateModel' is not null or undefined
        if (outfitUpdateModel === null || outfitUpdateModel === undefined) {
            throw new RequiredError("OutfitsV3Api", "v3OutfitsCreatePost", "outfitUpdateModel");
        }


        // Path Params
        const localVarPath = '/v3/outfits/create';

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(outfitUpdateModel, "RobloxApiAvatarModelsOutfitUpdateModelV3", ""),
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
     * Gets details about the contents of an outfit.
     * @param userOutfitId The user outfit id.
     */
    public async v3OutfitsUserOutfitIdDetailsGet(userOutfitId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsV3Api", "v3OutfitsUserOutfitIdDetailsGet", "userOutfitId");
        }


        // Path Params
        const localVarPath = '/v3/outfits/{userOutfitId}/details'
            .replace('{' + 'userOutfitId' + '}', encodeURIComponent(String(userOutfitId)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.  Accepts partial updates.
     * Updates the contents of an outfit.
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public async v3OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV3, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsV3Api", "v3OutfitsUserOutfitIdPatch", "userOutfitId");
        }


        // verify required parameter 'outfitUpdateModel' is not null or undefined
        if (outfitUpdateModel === null || outfitUpdateModel === undefined) {
            throw new RequiredError("OutfitsV3Api", "v3OutfitsUserOutfitIdPatch", "outfitUpdateModel");
        }


        // Path Params
        const localVarPath = '/v3/outfits/{userOutfitId}'
            .replace('{' + 'userOutfitId' + '}', encodeURIComponent(String(userOutfitId)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(outfitUpdateModel, "RobloxApiAvatarModelsOutfitUpdateModelV3", ""),
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

export class OutfitsV3ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OutfitsCreatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OutfitsCreatePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Body colors must be valid BrickColor IDs  4: Invalid outfit name  5: Asset is not wearable by you and was not added to the outfit  7: Invalid Player Avatar Type. Valid types are R6 and R15  8: Invalid assetIds  9: Meta does not apply to specified asset type  10: Required meta is not provided for the specific asset type", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  1: You already have the maximum number of outfits", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: An error occurred while creating the outfit", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OutfitsUserOutfitIdDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OutfitsUserOutfitIdDetailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModelV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsOutfitDetailsModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitDetailsModelV2", ""
            ) as RobloxApiAvatarModelsOutfitDetailsModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified userOutfitId is invalid.  2: The outfit for the specified userOutfit is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The requester does not have access to the details for the given user outfit.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsOutfitDetailsModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitDetailsModelV2", ""
            ) as RobloxApiAvatarModelsOutfitDetailsModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OutfitsUserOutfitIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OutfitsUserOutfitIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified userOutfit does not exist!  1: Must provide both assetIds and bodyColors in to update outfit contents.  3: Body colors must be valid BrickColor IDs  4: Invalid outfit name  5: Asset is not wearable by you  8: Invalid Player Avatar Type. Valid types are R6 and R15  11: Meta does not apply to specified asset type  12: Meta is required for this specific asset type", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You don\&#39;t have permission to update this outfit.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: An error occurred while trying to update the outfit", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
