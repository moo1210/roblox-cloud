import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiAvatarModelsAssetIdListModel } from '../models/RobloxApiAvatarModelsAssetIdListModel';
import { RobloxApiAvatarModelsAvatarApiSuccessResponse } from '../models/RobloxApiAvatarModelsAvatarApiSuccessResponse';
import { RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsAvatarMetadataModel } from '../models/RobloxApiAvatarModelsAvatarMetadataModel';
import { RobloxApiAvatarModelsAvatarModelV2 } from '../models/RobloxApiAvatarModelsAvatarModelV2';
import { RobloxApiAvatarModelsAvatarRulesModel } from '../models/RobloxApiAvatarModelsAvatarRulesModel';
import { RobloxApiAvatarModelsBodyColorsModel } from '../models/RobloxApiAvatarModelsBodyColorsModel';
import { RobloxApiAvatarModelsGameStartInfoResponse } from '../models/RobloxApiAvatarModelsGameStartInfoResponse';
import { RobloxApiAvatarModelsPlayerAvatarTypeModel } from '../models/RobloxApiAvatarModelsPlayerAvatarTypeModel';
import { RobloxApiAvatarModelsWearResponseModel } from '../models/RobloxApiAvatarModelsWearResponseModel';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';

/**
 * no description
 */
export class AvatarApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param assetId The asset id.
     */
    public async v1AvatarAssetsAssetIdRemovePost(assetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AvatarApi", "v1AvatarAssetsAssetIdRemovePost", "assetId");
        }


        // Path Params
        const localVarPath = '/v1/avatar/assets/{assetId}/remove'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

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
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetId The asset id.
     */
    public async v1AvatarAssetsAssetIdWearPost(assetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AvatarApi", "v1AvatarAssetsAssetIdWearPost", "assetId");
        }


        // Path Params
        const localVarPath = '/v1/avatar/assets/{assetId}/wear'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

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
     * Returns details about the authenticated user\'s avatar
     */
    public async v1AvatarGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/avatar';

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
     * Returns metadata used by the avatar page of the website
     */
    public async v1AvatarMetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/avatar/metadata';

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
     * Requests the authenticated user\'s thumbnail be redrawn
     */
    public async v1AvatarRedrawThumbnailPost(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/avatar/redraw-thumbnail';

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
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     */
    public async v1AvatarRulesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/avatar-rules';

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
    public async v1AvatarSetBodyColorsPost(bodyColorsModel: RobloxApiAvatarModelsBodyColorsModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyColorsModel' is not null or undefined
        if (bodyColorsModel === null || bodyColorsModel === undefined) {
            throw new RequiredError("AvatarApi", "v1AvatarSetBodyColorsPost", "bodyColorsModel");
        }


        // Path Params
        const localVarPath = '/v1/avatar/set-body-colors';

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
            ObjectSerializer.serialize(bodyColorsModel, "RobloxApiAvatarModelsBodyColorsModel", ""),
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
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param playerAvatarTypeModel R6 or R15
     */
    public async v1AvatarSetPlayerAvatarTypePost(playerAvatarTypeModel: RobloxApiAvatarModelsPlayerAvatarTypeModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'playerAvatarTypeModel' is not null or undefined
        if (playerAvatarTypeModel === null || playerAvatarTypeModel === undefined) {
            throw new RequiredError("AvatarApi", "v1AvatarSetPlayerAvatarTypePost", "playerAvatarTypeModel");
        }


        // Path Params
        const localVarPath = '/v1/avatar/set-player-avatar-type';

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
            ObjectSerializer.serialize(playerAvatarTypeModel, "RobloxApiAvatarModelsPlayerAvatarTypeModel", ""),
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
     * Sets the authenticated user\'s scales
     * @param scalesModel 
     */
    public async v1AvatarSetScalesPost(scalesModel: RobloxWebResponsesAvatarScaleModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'scalesModel' is not null or undefined
        if (scalesModel === null || scalesModel === undefined) {
            throw new RequiredError("AvatarApi", "v1AvatarSetScalesPost", "scalesModel");
        }


        // Path Params
        const localVarPath = '/v1/avatar/set-scales';

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
            ObjectSerializer.serialize(scalesModel, "RobloxWebResponsesAvatarScaleModel", ""),
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
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetIdsModel The list of asset IDs
     */
    public async v1AvatarSetWearingAssetsPost(assetIdsModel: RobloxApiAvatarModelsAssetIdListModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetIdsModel' is not null or undefined
        if (assetIdsModel === null || assetIdsModel === undefined) {
            throw new RequiredError("AvatarApi", "v1AvatarSetWearingAssetsPost", "assetIdsModel");
        }


        // Path Params
        const localVarPath = '/v1/avatar/set-wearing-assets';

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
            ObjectSerializer.serialize(assetIdsModel, "RobloxApiAvatarModelsAssetIdListModel", ""),
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
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param universeId 
     */
    public async v1GameStartInfoGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("AvatarApi", "v1GameStartInfoGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v1/game-start-info';

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (universeId !== undefined) {
            requestContext.setQueryParam("universeId", ObjectSerializer.serialize(universeId, "number", "int64"));
        }


        
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
    public async v1UsersUserIdAvatarGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AvatarApi", "v1UsersUserIdAvatarGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/avatar'
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
     * Gets a list of asset ids that the user is currently wearing
     * @param userId The user id.
     */
    public async v1UsersUserIdCurrentlyWearingGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AvatarApi", "v1UsersUserIdCurrentlyWearingGet", "userId");
        }


        // Path Params
        const localVarPath = '/v1/users/{userId}/currently-wearing'
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
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public async v1UsersUserIdOutfitsGet(userId: number, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("AvatarApi", "v1UsersUserIdOutfitsGet", "userId");
        }






        // Path Params
        const localVarPath = '/v1/users/{userId}/outfits'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://avatar.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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

export class AvatarApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AvatarAssetsAssetIdRemovePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarAssetsAssetIdRemovePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Failed to remove asset.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  1: You must be wearing the asset to remove it.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1AvatarAssetsAssetIdWearPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarAssetsAssetIdWearPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Failed to wear asset.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  1: You must own an asset to wear it.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1AvatarGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV2", ""
            ) as RobloxApiAvatarModelsAvatarModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV2", ""
            ) as RobloxApiAvatarModelsAvatarModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AvatarMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarMetadataModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarMetadataModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarMetadataModel", ""
            ) as RobloxApiAvatarModelsAvatarMetadataModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarMetadataModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarMetadataModel", ""
            ) as RobloxApiAvatarModelsAvatarMetadataModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AvatarRedrawThumbnailPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarRedrawThumbnailPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Redrawing your avatar thumbnail is floodchecked at this time  1: Redrawing your avatar thumbnail is floodchecked at this time", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed", undefined, response.headers);
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AvatarRulesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarRulesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarRulesModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarRulesModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarRulesModel", ""
            ) as RobloxApiAvatarModelsAvatarRulesModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarRulesModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarRulesModel", ""
            ) as RobloxApiAvatarModelsAvatarRulesModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AvatarSetBodyColorsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarSetBodyColorsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
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
     * @params response Response returned by the server for a request to v1AvatarSetPlayerAvatarTypePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarSetPlayerAvatarTypePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Invalid playerAvatarType. Valid values are: ", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You are not allowed to change player avatar type.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1AvatarSetScalesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarSetScalesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarApiSuccessResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarApiSuccessResponse", ""
            ) as RobloxApiAvatarModelsAvatarApiSuccessResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: Please pass in the scales JSON", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  3: The user does not have permissions to change scales.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1AvatarSetWearingAssetsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AvatarSetWearingAssetsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsWearResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsWearResponseModel", ""
            ) as RobloxApiAvatarModelsWearResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid assetId", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1GameStartInfoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1GameStartInfoGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsGameStartInfoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsGameStartInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsGameStartInfoResponse", ""
            ) as RobloxApiAvatarModelsGameStartInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsGameStartInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsGameStartInfoResponse", ""
            ) as RobloxApiAvatarModelsGameStartInfoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdAvatarGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdAvatarGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV2", ""
            ) as RobloxApiAvatarModelsAvatarModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist.  2: An account for the given userId does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarModelV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarModelV2", ""
            ) as RobloxApiAvatarModelsAvatarModelV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdCurrentlyWearingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdCurrentlyWearingGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAssetIdListModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAssetIdListModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAssetIdListModel", ""
            ) as RobloxApiAvatarModelsAssetIdListModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist.  2: An account for the given userId does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAssetIdListModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAssetIdListModel", ""
            ) as RobloxApiAvatarModelsAssetIdListModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UsersUserIdOutfitsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UsersUserIdOutfitsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The specified user does not exist.  2: An account for the given userId does not exist!", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel", ""
            ) as RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
