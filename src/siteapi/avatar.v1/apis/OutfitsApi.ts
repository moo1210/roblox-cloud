import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiAvatarModelsAvatarApiSuccessResponse } from '../models/RobloxApiAvatarModelsAvatarApiSuccessResponse';
import { RobloxApiAvatarModelsOutfitDetailsModel } from '../models/RobloxApiAvatarModelsOutfitDetailsModel';
import { RobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsOutfitUpdateModelV1 } from '../models/RobloxApiAvatarModelsOutfitUpdateModelV1';
import { RobloxApiAvatarModelsWearResponseModel } from '../models/RobloxApiAvatarModelsWearResponseModel';

/**
 * no description
 */
export class OutfitsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public async v1OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'outfitUpdateModel' is not null or undefined
        if (outfitUpdateModel === null || outfitUpdateModel === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsCreatePost", "outfitUpdateModel");
        }


        // Path Params
        const localVarPath = '/v1/outfits/create';

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
            ObjectSerializer.serialize(outfitUpdateModel, "RobloxApiAvatarModelsOutfitUpdateModelV1", ""),
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
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param userOutfitId The user outfit id
     */
    public async v1OutfitsUserOutfitIdDeletePost(userOutfitId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdDeletePost", "userOutfitId");
        }


        // Path Params
        const localVarPath = '/v1/outfits/{userOutfitId}/delete'
            .replace('{' + 'userOutfitId' + '}', encodeURIComponent(String(userOutfitId)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param userOutfitId 
     */
    public async v1OutfitsUserOutfitIdDetailsGet(userOutfitId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdDetailsGet", "userOutfitId");
        }


        // Path Params
        const localVarPath = '/v1/outfits/{userOutfitId}/details'
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
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public async v1OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdPatch", "userOutfitId");
        }


        // verify required parameter 'outfitUpdateModel' is not null or undefined
        if (outfitUpdateModel === null || outfitUpdateModel === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdPatch", "outfitUpdateModel");
        }


        // Path Params
        const localVarPath = '/v1/outfits/{userOutfitId}'
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
            ObjectSerializer.serialize(outfitUpdateModel, "RobloxApiAvatarModelsOutfitUpdateModelV1", ""),
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
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public async v1OutfitsUserOutfitIdUpdatePost(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdUpdatePost", "userOutfitId");
        }


        // verify required parameter 'outfitUpdateModel' is not null or undefined
        if (outfitUpdateModel === null || outfitUpdateModel === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdUpdatePost", "outfitUpdateModel");
        }


        // Path Params
        const localVarPath = '/v1/outfits/{userOutfitId}/update'
            .replace('{' + 'userOutfitId' + '}', encodeURIComponent(String(userOutfitId)));

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
            ObjectSerializer.serialize(outfitUpdateModel, "RobloxApiAvatarModelsOutfitUpdateModelV1", ""),
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
     * Applies the outfit\'s appearance to your avatar  If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.
     * Wears the outfit
     * @param userOutfitId The user outfit id
     */
    public async v1OutfitsUserOutfitIdWearPost(userOutfitId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userOutfitId' is not null or undefined
        if (userOutfitId === null || userOutfitId === undefined) {
            throw new RequiredError("OutfitsApi", "v1OutfitsUserOutfitIdWearPost", "userOutfitId");
        }


        // Path Params
        const localVarPath = '/v1/outfits/{userOutfitId}/wear'
            .replace('{' + 'userOutfitId' + '}', encodeURIComponent(String(userOutfitId)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OutfitsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OutfitsCreatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OutfitsCreatePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Body colors must be valid BrickColor IDs  4: Invalid outfit name  5: Asset is not wearable by you and was not added to the outfit  7: Invalid Player Avatar Type. Valid types are R6 and R15  8: Invalid assetIds", undefined, response.headers);
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
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OutfitsUserOutfitIdDeletePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OutfitsUserOutfitIdDeletePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified userOutfitId is invalid!", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You don\&#39;t have permission to delete this outfit.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: An error occurred while deleting the outfit.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OutfitsUserOutfitIdDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsOutfitDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitDetailsModel", ""
            ) as RobloxApiAvatarModelsOutfitDetailsModel;
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
            const body: RobloxApiAvatarModelsOutfitDetailsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitDetailsModel", ""
            ) as RobloxApiAvatarModelsOutfitDetailsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OutfitsUserOutfitIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OutfitsUserOutfitIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified userOutfit does not exist!  1: Must provide both assetIds and bodyColors in to update outfit contents.  3: Body colors must be valid BrickColor IDs  4: Invalid outfit name  5: Asset is not wearable by you  8: Invalid Player Avatar Type. Valid types are R6 and R15", undefined, response.headers);
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OutfitsUserOutfitIdUpdatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified userOutfit does not exist!  3: Body colors must be valid BrickColor IDs  4: Invalid outfit name  5: Asset is not wearable by you  7: Invalid assetIds  8: Invalid Player Avatar Type. Valid types are R6 and R15", undefined, response.headers);
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
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OutfitsUserOutfitIdWearPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OutfitsUserOutfitIdWearPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsWearResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsWearResponseModel", ""
            ) as RobloxApiAvatarModelsWearResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified userOutfitId is invalid!", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You don\&#39;t have permission to wear this outfit!", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: The flood limit has been exceeded!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsWearResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsWearResponseModel", ""
            ) as RobloxApiAvatarModelsWearResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
