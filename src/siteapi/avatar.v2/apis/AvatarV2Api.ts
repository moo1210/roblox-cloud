import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiAvatarModelsAvatarApiSuccessResponse } from '../models/RobloxApiAvatarModelsAvatarApiSuccessResponse';
import { RobloxApiAvatarModelsAvatarModelV3 } from '../models/RobloxApiAvatarModelsAvatarModelV3';
import { RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsWearRequestModel } from '../models/RobloxApiAvatarModelsWearRequestModel';
import { RobloxApiAvatarModelsWearResponseModel } from '../models/RobloxApiAvatarModelsWearResponseModel';
import { RobloxPlatformAvatarBodyColorsModelV2 } from '../models/RobloxPlatformAvatarBodyColorsModelV2';

/**
 * no description
 */
export class AvatarV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public async v2AvatarAvatarGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v2/avatar/avatar';

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
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public async v2AvatarSetBodyColorsPost(bodyColorsModel: RobloxPlatformAvatarBodyColorsModelV2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyColorsModel' is not null or undefined
        if (bodyColorsModel === null || bodyColorsModel === undefined) {
            throw new RequiredError("AvatarV2Api", "v2AvatarSetBodyColorsPost", "bodyColorsModel");
        }


        // Path Params
        const localVarPath = '/v2/avatar/set-body-colors';

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
            ObjectSerializer.serialize(bodyColorsModel, "RobloxPlatformAvatarBodyColorsModelV2", ""),
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
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list
     * @param wearRequestModel Model of assets to be worn
     */
    public async v2AvatarSetWearingAssetsPost(wearRequestModel: RobloxApiAvatarModelsWearRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'wearRequestModel' is not null or undefined
        if (wearRequestModel === null || wearRequestModel === undefined) {
            throw new RequiredError("AvatarV2Api", "v2AvatarSetWearingAssetsPost", "wearRequestModel");
        }


        // Path Params
        const localVarPath = '/v2/avatar/set-wearing-assets';

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
            ObjectSerializer.serialize(wearRequestModel, "RobloxApiAvatarModelsWearRequestModel", ""),
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
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public async v2AvatarUsersUserIdAvatarGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AvatarV2Api", "v2AvatarUsersUserIdAvatarGet", "userId");
        }


        // Path Params
        const localVarPath = '/v2/avatar/users/{userId}/avatar'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

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
     * Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param paginationToken The token received from the response to get the next page. For the first request, this value should be empty. Note : If no value is sent the 1st page will be returned.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public async v2AvatarUsersUserIdOutfitsGet(userId: number, paginationToken?: string, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AvatarV2Api", "v2AvatarUsersUserIdOutfitsGet", "userId");
        }







        // Path Params
        const localVarPath = '/v2/avatar/users/{userId}/outfits'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (paginationToken !== undefined) {
            requestContext.setQueryParam("paginationToken", ObjectSerializer.serialize(paginationToken, "string", ""));
        }

        // Query Params
        if (outfitType !== undefined) {
            requestContext.setQueryParam("outfitType", ObjectSerializer.serialize(outfitType, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (itemsPerPage !== undefined) {
            requestContext.setQueryParam("itemsPerPage", ObjectSerializer.serialize(itemsPerPage, "number", "int32"));
        }

        // Query Params
        if (isEditable !== undefined) {
            requestContext.setQueryParam("isEditable", ObjectSerializer.serialize(isEditable, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AvatarV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AvatarAvatarGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AvatarAvatarGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV3 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarModelV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV3", ""
            ) as RobloxApiAvatarModelsAvatarModelV3;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarModelV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV3", ""
            ) as RobloxApiAvatarModelsAvatarModelV3;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AvatarSetBodyColorsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AvatarSetBodyColorsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v2AvatarSetWearingAssetsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AvatarSetWearingAssetsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsWearResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsWearResponseModel", ""
            ) as RobloxApiAvatarModelsWearResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid assetId  5: Meta does not apply to specified asset type  7: Required meta is not provided for the specific asset type", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Failed to wear asset.", undefined, response.headers);
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AvatarUsersUserIdAvatarGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AvatarUsersUserIdAvatarGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV3 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarModelV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV3", ""
            ) as RobloxApiAvatarModelsAvatarModelV3;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist.  2: An account for the given userId does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarModelV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV3", ""
            ) as RobloxApiAvatarModelsAvatarModelV3;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AvatarUsersUserIdOutfitsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AvatarUsersUserIdOutfitsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist.  2: An account for the given userId does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsAvatarPageResponseRobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
