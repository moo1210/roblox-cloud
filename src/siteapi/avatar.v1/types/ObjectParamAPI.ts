import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxApiAvatarModelsAssetIdListModel } from '../models/RobloxApiAvatarModelsAssetIdListModel';
import { RobloxApiAvatarModelsAssetMetaModelV1 } from '../models/RobloxApiAvatarModelsAssetMetaModelV1';
import { RobloxApiAvatarModelsAssetModelV2 } from '../models/RobloxApiAvatarModelsAssetModelV2';
import { RobloxApiAvatarModelsAssetTypeModel } from '../models/RobloxApiAvatarModelsAssetTypeModel';
import { RobloxApiAvatarModelsAssetTypeRulesModel } from '../models/RobloxApiAvatarModelsAssetTypeRulesModel';
import { RobloxApiAvatarModelsAvatarApiSuccessResponse } from '../models/RobloxApiAvatarModelsAvatarApiSuccessResponse';
import { RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsAvatarMetadataModel } from '../models/RobloxApiAvatarModelsAvatarMetadataModel';
import { RobloxApiAvatarModelsAvatarModelV2 } from '../models/RobloxApiAvatarModelsAvatarModelV2';
import { RobloxApiAvatarModelsAvatarRulesModel } from '../models/RobloxApiAvatarModelsAvatarRulesModel';
import { RobloxApiAvatarModelsAvatarRulesModelAccessoryRefinementLowerBounds } from '../models/RobloxApiAvatarModelsAvatarRulesModelAccessoryRefinementLowerBounds';
import { RobloxApiAvatarModelsBodyColorModel } from '../models/RobloxApiAvatarModelsBodyColorModel';
import { RobloxApiAvatarModelsBodyColorsModel } from '../models/RobloxApiAvatarModelsBodyColorsModel';
import { RobloxApiAvatarModelsDefaultClothingAssets } from '../models/RobloxApiAvatarModelsDefaultClothingAssets';
import { RobloxApiAvatarModelsEmoteResponseModel } from '../models/RobloxApiAvatarModelsEmoteResponseModel';
import { RobloxApiAvatarModelsGameStartInfoResponse } from '../models/RobloxApiAvatarModelsGameStartInfoResponse';
import { RobloxApiAvatarModelsOutfitDetailsModel } from '../models/RobloxApiAvatarModelsOutfitDetailsModel';
import { RobloxApiAvatarModelsOutfitModel } from '../models/RobloxApiAvatarModelsOutfitModel';
import { RobloxApiAvatarModelsOutfitUpdateModelV1 } from '../models/RobloxApiAvatarModelsOutfitUpdateModelV1';
import { RobloxApiAvatarModelsPlayerAvatarTypeModel } from '../models/RobloxApiAvatarModelsPlayerAvatarTypeModel';
import { RobloxApiAvatarModelsRecentItemModel } from '../models/RobloxApiAvatarModelsRecentItemModel';
import { RobloxApiAvatarModelsScaleRulesModel } from '../models/RobloxApiAvatarModelsScaleRulesModel';
import { RobloxApiAvatarModelsUniverseAvatarAssetOverrideResponseModel } from '../models/RobloxApiAvatarModelsUniverseAvatarAssetOverrideResponseModel';
import { RobloxApiAvatarModelsWearResponseModel } from '../models/RobloxApiAvatarModelsWearResponseModel';
import { RobloxAvatarcoreCommonModelsAccessoryPositionModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryPositionModel';
import { RobloxAvatarcoreCommonModelsAccessoryRefinementModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryRefinementModel';
import { RobloxAvatarcoreCommonModelsAccessoryRotationModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryRotationModel';
import { RobloxAvatarcoreCommonModelsAccessoryScaleModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryScaleModel';
import { RobloxAvatarcoreSharedV3Beta1AssetPosition } from '../models/RobloxAvatarcoreSharedV3Beta1AssetPosition';
import { RobloxAvatarcoreSharedV3Beta1AssetRotation } from '../models/RobloxAvatarcoreSharedV3Beta1AssetRotation';
import { RobloxAvatarcoreSharedV3Beta1AssetScale } from '../models/RobloxAvatarcoreSharedV3Beta1AssetScale';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';
import { RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel } from '../models/RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel';

import { ObservableAvatarApi } from "./ObservableAPI";
import { AvatarApiRequestFactory, AvatarApiResponseProcessor} from "../apis/AvatarApi";

export interface AvatarApiV1AvatarAssetsAssetIdRemovePostRequest {
    /**
     * The asset id.
     * @type number
     * @memberof AvatarApiv1AvatarAssetsAssetIdRemovePost
     */
    assetId: number
}

export interface AvatarApiV1AvatarAssetsAssetIdWearPostRequest {
    /**
     * The asset id.
     * @type number
     * @memberof AvatarApiv1AvatarAssetsAssetIdWearPost
     */
    assetId: number
}

export interface AvatarApiV1AvatarGetRequest {
}

export interface AvatarApiV1AvatarMetadataGetRequest {
}

export interface AvatarApiV1AvatarRedrawThumbnailPostRequest {
}

export interface AvatarApiV1AvatarRulesGetRequest {
}

export interface AvatarApiV1AvatarSetBodyColorsPostRequest {
    /**
     * 
     * @type RobloxApiAvatarModelsBodyColorsModel
     * @memberof AvatarApiv1AvatarSetBodyColorsPost
     */
    bodyColorsModel: RobloxApiAvatarModelsBodyColorsModel
}

export interface AvatarApiV1AvatarSetPlayerAvatarTypePostRequest {
    /**
     * R6 or R15
     * @type RobloxApiAvatarModelsPlayerAvatarTypeModel
     * @memberof AvatarApiv1AvatarSetPlayerAvatarTypePost
     */
    playerAvatarTypeModel: RobloxApiAvatarModelsPlayerAvatarTypeModel
}

export interface AvatarApiV1AvatarSetScalesPostRequest {
    /**
     * 
     * @type RobloxWebResponsesAvatarScaleModel
     * @memberof AvatarApiv1AvatarSetScalesPost
     */
    scalesModel: RobloxWebResponsesAvatarScaleModel
}

export interface AvatarApiV1AvatarSetWearingAssetsPostRequest {
    /**
     * The list of asset IDs
     * @type RobloxApiAvatarModelsAssetIdListModel
     * @memberof AvatarApiv1AvatarSetWearingAssetsPost
     */
    assetIdsModel: RobloxApiAvatarModelsAssetIdListModel
}

export interface AvatarApiV1GameStartInfoGetRequest {
    /**
     * 
     * @type number
     * @memberof AvatarApiv1GameStartInfoGet
     */
    universeId: number
}

export interface AvatarApiV1UsersUserIdAvatarGetRequest {
    /**
     * 
     * @type number
     * @memberof AvatarApiv1UsersUserIdAvatarGet
     */
    userId: number
}

export interface AvatarApiV1UsersUserIdCurrentlyWearingGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof AvatarApiv1UsersUserIdCurrentlyWearingGet
     */
    userId: number
}

export interface AvatarApiV1UsersUserIdOutfitsGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof AvatarApiv1UsersUserIdOutfitsGet
     */
    userId: number
    /**
     * The outfit type being searched for, null will return all outfitTypes
     * @type string
     * @memberof AvatarApiv1UsersUserIdOutfitsGet
     */
    outfitType?: string
    /**
     * The page number of the current page of requests, default is 1.
     * @type number
     * @memberof AvatarApiv1UsersUserIdOutfitsGet
     */
    page?: number
    /**
     * The max number of outfits that can be returned.
     * @type number
     * @memberof AvatarApiv1UsersUserIdOutfitsGet
     */
    itemsPerPage?: number
    /**
     * Whether the outfits are editable. A null value will lead to no filtering.
     * @type boolean
     * @memberof AvatarApiv1UsersUserIdOutfitsGet
     */
    isEditable?: boolean
}

export class ObjectAvatarApi {
    private api: ObservableAvatarApi

    public constructor(configuration: Configuration, requestFactory?: AvatarApiRequestFactory, responseProcessor?: AvatarApiResponseProcessor) {
        this.api = new ObservableAvatarApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param param the request object
     */
    public v1AvatarAssetsAssetIdRemovePostWithHttpInfo(param: AvatarApiV1AvatarAssetsAssetIdRemovePostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1AvatarAssetsAssetIdRemovePostWithHttpInfo(param.assetId,  options).toPromise();
    }

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param param the request object
     */
    public v1AvatarAssetsAssetIdRemovePost(param: AvatarApiV1AvatarAssetsAssetIdRemovePostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1AvatarAssetsAssetIdRemovePost(param.assetId,  options).toPromise();
    }

    /**
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param param the request object
     */
    public v1AvatarAssetsAssetIdWearPostWithHttpInfo(param: AvatarApiV1AvatarAssetsAssetIdWearPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1AvatarAssetsAssetIdWearPostWithHttpInfo(param.assetId,  options).toPromise();
    }

    /**
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param param the request object
     */
    public v1AvatarAssetsAssetIdWearPost(param: AvatarApiV1AvatarAssetsAssetIdWearPostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1AvatarAssetsAssetIdWearPost(param.assetId,  options).toPromise();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     * @param param the request object
     */
    public v1AvatarGetWithHttpInfo(param: AvatarApiV1AvatarGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV2>> {
        return this.api.v1AvatarGetWithHttpInfo( options).toPromise();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     * @param param the request object
     */
    public v1AvatarGet(param: AvatarApiV1AvatarGetRequest = {}, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV2> {
        return this.api.v1AvatarGet( options).toPromise();
    }

    /**
     * Returns metadata used by the avatar page of the website
     * @param param the request object
     */
    public v1AvatarMetadataGetWithHttpInfo(param: AvatarApiV1AvatarMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarMetadataModel>> {
        return this.api.v1AvatarMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Returns metadata used by the avatar page of the website
     * @param param the request object
     */
    public v1AvatarMetadataGet(param: AvatarApiV1AvatarMetadataGetRequest = {}, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarMetadataModel> {
        return this.api.v1AvatarMetadataGet( options).toPromise();
    }

    /**
     * Requests the authenticated user\'s thumbnail be redrawn
     * @param param the request object
     */
    public v1AvatarRedrawThumbnailPostWithHttpInfo(param: AvatarApiV1AvatarRedrawThumbnailPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1AvatarRedrawThumbnailPostWithHttpInfo( options).toPromise();
    }

    /**
     * Requests the authenticated user\'s thumbnail be redrawn
     * @param param the request object
     */
    public v1AvatarRedrawThumbnailPost(param: AvatarApiV1AvatarRedrawThumbnailPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.v1AvatarRedrawThumbnailPost( options).toPromise();
    }

    /**
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     * @param param the request object
     */
    public v1AvatarRulesGetWithHttpInfo(param: AvatarApiV1AvatarRulesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarRulesModel>> {
        return this.api.v1AvatarRulesGetWithHttpInfo( options).toPromise();
    }

    /**
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     * @param param the request object
     */
    public v1AvatarRulesGet(param: AvatarApiV1AvatarRulesGetRequest = {}, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarRulesModel> {
        return this.api.v1AvatarRulesGet( options).toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param param the request object
     */
    public v1AvatarSetBodyColorsPostWithHttpInfo(param: AvatarApiV1AvatarSetBodyColorsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1AvatarSetBodyColorsPostWithHttpInfo(param.bodyColorsModel,  options).toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param param the request object
     */
    public v1AvatarSetBodyColorsPost(param: AvatarApiV1AvatarSetBodyColorsPostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1AvatarSetBodyColorsPost(param.bodyColorsModel,  options).toPromise();
    }

    /**
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param param the request object
     */
    public v1AvatarSetPlayerAvatarTypePostWithHttpInfo(param: AvatarApiV1AvatarSetPlayerAvatarTypePostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1AvatarSetPlayerAvatarTypePostWithHttpInfo(param.playerAvatarTypeModel,  options).toPromise();
    }

    /**
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param param the request object
     */
    public v1AvatarSetPlayerAvatarTypePost(param: AvatarApiV1AvatarSetPlayerAvatarTypePostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1AvatarSetPlayerAvatarTypePost(param.playerAvatarTypeModel,  options).toPromise();
    }

    /**
     * Sets the authenticated user\'s scales
     * @param param the request object
     */
    public v1AvatarSetScalesPostWithHttpInfo(param: AvatarApiV1AvatarSetScalesPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1AvatarSetScalesPostWithHttpInfo(param.scalesModel,  options).toPromise();
    }

    /**
     * Sets the authenticated user\'s scales
     * @param param the request object
     */
    public v1AvatarSetScalesPost(param: AvatarApiV1AvatarSetScalesPostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1AvatarSetScalesPost(param.scalesModel,  options).toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param param the request object
     */
    public v1AvatarSetWearingAssetsPostWithHttpInfo(param: AvatarApiV1AvatarSetWearingAssetsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        return this.api.v1AvatarSetWearingAssetsPostWithHttpInfo(param.assetIdsModel,  options).toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param param the request object
     */
    public v1AvatarSetWearingAssetsPost(param: AvatarApiV1AvatarSetWearingAssetsPostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsWearResponseModel> {
        return this.api.v1AvatarSetWearingAssetsPost(param.assetIdsModel,  options).toPromise();
    }

    /**
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param param the request object
     */
    public v1GameStartInfoGetWithHttpInfo(param: AvatarApiV1GameStartInfoGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsGameStartInfoResponse>> {
        return this.api.v1GameStartInfoGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param param the request object
     */
    public v1GameStartInfoGet(param: AvatarApiV1GameStartInfoGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsGameStartInfoResponse> {
        return this.api.v1GameStartInfoGet(param.universeId,  options).toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param param the request object
     */
    public v1UsersUserIdAvatarGetWithHttpInfo(param: AvatarApiV1UsersUserIdAvatarGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV2>> {
        return this.api.v1UsersUserIdAvatarGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param param the request object
     */
    public v1UsersUserIdAvatarGet(param: AvatarApiV1UsersUserIdAvatarGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV2> {
        return this.api.v1UsersUserIdAvatarGet(param.userId,  options).toPromise();
    }

    /**
     * Gets a list of asset ids that the user is currently wearing
     * @param param the request object
     */
    public v1UsersUserIdCurrentlyWearingGetWithHttpInfo(param: AvatarApiV1UsersUserIdCurrentlyWearingGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAssetIdListModel>> {
        return this.api.v1UsersUserIdCurrentlyWearingGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Gets a list of asset ids that the user is currently wearing
     * @param param the request object
     */
    public v1UsersUserIdCurrentlyWearingGet(param: AvatarApiV1UsersUserIdCurrentlyWearingGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAssetIdListModel> {
        return this.api.v1UsersUserIdCurrentlyWearingGet(param.userId,  options).toPromise();
    }

    /**
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdOutfitsGetWithHttpInfo(param: AvatarApiV1UsersUserIdOutfitsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel>> {
        return this.api.v1UsersUserIdOutfitsGetWithHttpInfo(param.userId, param.outfitType, param.page, param.itemsPerPage, param.isEditable,  options).toPromise();
    }

    /**
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdOutfitsGet(param: AvatarApiV1UsersUserIdOutfitsGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel> {
        return this.api.v1UsersUserIdOutfitsGet(param.userId, param.outfitType, param.page, param.itemsPerPage, param.isEditable,  options).toPromise();
    }

}

import { ObservableOutfitsApi } from "./ObservableAPI";
import { OutfitsApiRequestFactory, OutfitsApiResponseProcessor} from "../apis/OutfitsApi";

export interface OutfitsApiV1OutfitsCreatePostRequest {
    /**
     * The new outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV1
     * @memberof OutfitsApiv1OutfitsCreatePost
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1
}

export interface OutfitsApiV1OutfitsUserOutfitIdDeletePostRequest {
    /**
     * The user outfit id
     * @type number
     * @memberof OutfitsApiv1OutfitsUserOutfitIdDeletePost
     */
    userOutfitId: number
}

export interface OutfitsApiV1OutfitsUserOutfitIdDetailsGetRequest {
    /**
     * 
     * @type number
     * @memberof OutfitsApiv1OutfitsUserOutfitIdDetailsGet
     */
    userOutfitId: number
}

export interface OutfitsApiV1OutfitsUserOutfitIdPatchRequest {
    /**
     * The user outfit id.
     * @type number
     * @memberof OutfitsApiv1OutfitsUserOutfitIdPatch
     */
    userOutfitId: number
    /**
     * The updated outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV1
     * @memberof OutfitsApiv1OutfitsUserOutfitIdPatch
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1
}

export interface OutfitsApiV1OutfitsUserOutfitIdUpdatePostRequest {
    /**
     * The user outfit id.
     * @type number
     * @memberof OutfitsApiv1OutfitsUserOutfitIdUpdatePost
     */
    userOutfitId: number
    /**
     * The updated outfit
     * @type RobloxApiAvatarModelsOutfitUpdateModelV1
     * @memberof OutfitsApiv1OutfitsUserOutfitIdUpdatePost
     */
    outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1
}

export class ObjectOutfitsApi {
    private api: ObservableOutfitsApi

    public constructor(configuration: Configuration, requestFactory?: OutfitsApiRequestFactory, responseProcessor?: OutfitsApiResponseProcessor) {
        this.api = new ObservableOutfitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param param the request object
     */
    public v1OutfitsCreatePostWithHttpInfo(param: OutfitsApiV1OutfitsCreatePostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1OutfitsCreatePostWithHttpInfo(param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param param the request object
     */
    public v1OutfitsCreatePost(param: OutfitsApiV1OutfitsCreatePostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1OutfitsCreatePost(param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdDeletePostWithHttpInfo(param: OutfitsApiV1OutfitsUserOutfitIdDeletePostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1OutfitsUserOutfitIdDeletePostWithHttpInfo(param.userOutfitId,  options).toPromise();
    }

    /**
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdDeletePost(param: OutfitsApiV1OutfitsUserOutfitIdDeletePostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1OutfitsUserOutfitIdDeletePost(param.userOutfitId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(param: OutfitsApiV1OutfitsUserOutfitIdDetailsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModel>> {
        return this.api.v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(param.userOutfitId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdDetailsGet(param: OutfitsApiV1OutfitsUserOutfitIdDetailsGetRequest, options?: Configuration): Promise<RobloxApiAvatarModelsOutfitDetailsModel> {
        return this.api.v1OutfitsUserOutfitIdDetailsGet(param.userOutfitId,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdPatchWithHttpInfo(param: OutfitsApiV1OutfitsUserOutfitIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        return this.api.v1OutfitsUserOutfitIdPatchWithHttpInfo(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdPatch(param: OutfitsApiV1OutfitsUserOutfitIdPatchRequest, options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        return this.api.v1OutfitsUserOutfitIdPatch(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(param: OutfitsApiV1OutfitsUserOutfitIdUpdatePostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        return this.api.v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param param the request object
     */
    public v1OutfitsUserOutfitIdUpdatePost(param: OutfitsApiV1OutfitsUserOutfitIdUpdatePostRequest, options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        return this.api.v1OutfitsUserOutfitIdUpdatePost(param.userOutfitId, param.outfitUpdateModel,  options).toPromise();
    }

}

import { ObservableRecentItemApi } from "./ObservableAPI";
import { RecentItemApiRequestFactory, RecentItemApiResponseProcessor} from "../apis/RecentItemApi";

export interface RecentItemApiV1RecentItemsRecentItemListTypeListGetRequest {
    /**
     * 
     * @type 0 | 1 | 2 | 3 | 4 | 5 | 6
     * @memberof RecentItemApiv1RecentItemsRecentItemListTypeListGet
     */
    recentItemListType: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export class ObjectRecentItemApi {
    private api: ObservableRecentItemApi

    public constructor(configuration: Configuration, requestFactory?: RecentItemApiRequestFactory, responseProcessor?: RecentItemApiResponseProcessor) {
        this.api = new ObservableRecentItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param param the request object
     */
    public v1RecentItemsRecentItemListTypeListGetWithHttpInfo(param: RecentItemApiV1RecentItemsRecentItemListTypeListGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel>> {
        return this.api.v1RecentItemsRecentItemListTypeListGetWithHttpInfo(param.recentItemListType,  options).toPromise();
    }

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param param the request object
     */
    public v1RecentItemsRecentItemListTypeListGet(param: RecentItemApiV1RecentItemsRecentItemListTypeListGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel> {
        return this.api.v1RecentItemsRecentItemListTypeListGet(param.recentItemListType,  options).toPromise();
    }

}
