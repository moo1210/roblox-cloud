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
import { ObservableAvatarApi } from './ObservableAPI';

import { AvatarApiRequestFactory, AvatarApiResponseProcessor} from "../apis/AvatarApi";
export class PromiseAvatarApi {
    private api: ObservableAvatarApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AvatarApiRequestFactory,
        responseProcessor?: AvatarApiResponseProcessor
    ) {
        this.api = new ObservableAvatarApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdRemovePostWithHttpInfo(assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1AvatarAssetsAssetIdRemovePostWithHttpInfo(assetId, _options);
        return result.toPromise();
    }

    /**
     * Removes the asset from the authenticated user\'s avatar.
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdRemovePost(assetId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1AvatarAssetsAssetIdRemovePost(assetId, _options);
        return result.toPromise();
    }

    /**
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdWearPostWithHttpInfo(assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1AvatarAssetsAssetIdWearPostWithHttpInfo(assetId, _options);
        return result.toPromise();
    }

    /**
     * Puts the asset on the authenticated user\'s avatar.  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetId The asset id.
     */
    public v1AvatarAssetsAssetIdWearPost(assetId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1AvatarAssetsAssetIdWearPost(assetId, _options);
        return result.toPromise();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v1AvatarGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV2>> {
        const result = this.api.v1AvatarGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns details about the authenticated user\'s avatar
     */
    public v1AvatarGet(_options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV2> {
        const result = this.api.v1AvatarGet(_options);
        return result.toPromise();
    }

    /**
     * Returns metadata used by the avatar page of the website
     */
    public v1AvatarMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarMetadataModel>> {
        const result = this.api.v1AvatarMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns metadata used by the avatar page of the website
     */
    public v1AvatarMetadataGet(_options?: Configuration): Promise<RobloxApiAvatarModelsAvatarMetadataModel> {
        const result = this.api.v1AvatarMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Requests the authenticated user\'s thumbnail be redrawn
     */
    public v1AvatarRedrawThumbnailPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1AvatarRedrawThumbnailPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Requests the authenticated user\'s thumbnail be redrawn
     */
    public v1AvatarRedrawThumbnailPost(_options?: Configuration): Promise<any> {
        const result = this.api.v1AvatarRedrawThumbnailPost(_options);
        return result.toPromise();
    }

    /**
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     */
    public v1AvatarRulesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarRulesModel>> {
        const result = this.api.v1AvatarRulesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * BodyColorsPalette is a list of valid brickColors you can choose for your avatar.  WearableAssetTypes contains a list of asset types with names, ids, and the maximum number that you can wear at a time.  Does not include packages because they cannot be worn on your avatar directly.  PlayerAvatarTypes are the types of avatars you can choose between.
     * Returns the business rules related to avatars
     */
    public v1AvatarRulesGet(_options?: Configuration): Promise<RobloxApiAvatarModelsAvatarRulesModel> {
        const result = this.api.v1AvatarRulesGet(_options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v1AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel: RobloxApiAvatarModelsBodyColorsModel, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1AvatarSetBodyColorsPostWithHttpInfo(bodyColorsModel, _options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s body colors
     * @param bodyColorsModel 
     */
    public v1AvatarSetBodyColorsPost(bodyColorsModel: RobloxApiAvatarModelsBodyColorsModel, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1AvatarSetBodyColorsPost(bodyColorsModel, _options);
        return result.toPromise();
    }

    /**
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param playerAvatarTypeModel R6 or R15
     */
    public v1AvatarSetPlayerAvatarTypePostWithHttpInfo(playerAvatarTypeModel: RobloxApiAvatarModelsPlayerAvatarTypeModel, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1AvatarSetPlayerAvatarTypePostWithHttpInfo(playerAvatarTypeModel, _options);
        return result.toPromise();
    }

    /**
     * This is the avatar type chosen on the Avatar page. Some games can override this and force your character to be R6 or R15.
     * Sets the authenticated user\'s player avatar type (e.g. R6 or R15).
     * @param playerAvatarTypeModel R6 or R15
     */
    public v1AvatarSetPlayerAvatarTypePost(playerAvatarTypeModel: RobloxApiAvatarModelsPlayerAvatarTypeModel, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1AvatarSetPlayerAvatarTypePost(playerAvatarTypeModel, _options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s scales
     * @param scalesModel 
     */
    public v1AvatarSetScalesPostWithHttpInfo(scalesModel: RobloxWebResponsesAvatarScaleModel, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1AvatarSetScalesPostWithHttpInfo(scalesModel, _options);
        return result.toPromise();
    }

    /**
     * Sets the authenticated user\'s scales
     * @param scalesModel 
     */
    public v1AvatarSetScalesPost(scalesModel: RobloxWebResponsesAvatarScaleModel, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1AvatarSetScalesPost(scalesModel, _options);
        return result.toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetIdsModel The list of asset IDs
     */
    public v1AvatarSetWearingAssetsPostWithHttpInfo(assetIdsModel: RobloxApiAvatarModelsAssetIdListModel, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        const result = this.api.v1AvatarSetWearingAssetsPostWithHttpInfo(assetIdsModel, _options);
        return result.toPromise();
    }

    /**
     * Only allows items that you own, are not expired, and are wearable asset types.  Any assets being worn before this method is called are automatically removed.
     * Sets the avatar\'s current assets to the list  - Flagged as obsolete, does not support layered clothing meta params
     * @param assetIdsModel The list of asset IDs
     */
    public v1AvatarSetWearingAssetsPost(assetIdsModel: RobloxApiAvatarModelsAssetIdListModel, _options?: Configuration): Promise<RobloxApiAvatarModelsWearResponseModel> {
        const result = this.api.v1AvatarSetWearingAssetsPost(assetIdsModel, _options);
        return result.toPromise();
    }

    /**
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param universeId 
     */
    public v1GameStartInfoGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsGameStartInfoResponse>> {
        const result = this.api.v1GameStartInfoGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * The server will call this on game server start to request general information about the universe  This is version 1.1, which returns an entry from the UniverseAvatarType enum.  During mixed mode this may return unreliable results.
     * @param universeId 
     */
    public v1GameStartInfoGet(universeId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsGameStartInfoResponse> {
        const result = this.api.v1GameStartInfoGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v1UsersUserIdAvatarGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarModelV2>> {
        const result = this.api.v1UsersUserIdAvatarGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Includes assets, bodycolors, and playerAvatarType.
     * Returns details about a specified user\'s avatar
     * @param userId 
     */
    public v1UsersUserIdAvatarGet(userId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarModelV2> {
        const result = this.api.v1UsersUserIdAvatarGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of asset ids that the user is currently wearing
     * @param userId The user id.
     */
    public v1UsersUserIdCurrentlyWearingGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAssetIdListModel>> {
        const result = this.api.v1UsersUserIdCurrentlyWearingGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of asset ids that the user is currently wearing
     * @param userId The user id.
     */
    public v1UsersUserIdCurrentlyWearingGet(userId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsAssetIdListModel> {
        const result = this.api.v1UsersUserIdCurrentlyWearingGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public v1UsersUserIdOutfitsGetWithHttpInfo(userId: number, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel>> {
        const result = this.api.v1UsersUserIdOutfitsGetWithHttpInfo(userId, outfitType, page, itemsPerPage, isEditable, _options);
        return result.toPromise();
    }

    /**
     * Deprecated, user v2.  Gets a list of outfits for the specified user.
     * @param userId The user id.
     * @param outfitType The outfit type being searched for, null will return all outfitTypes
     * @param page The page number of the current page of requests, default is 1.
     * @param itemsPerPage The max number of outfits that can be returned.
     * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
     */
    public v1UsersUserIdOutfitsGet(userId: number, outfitType?: string, page?: number, itemsPerPage?: number, isEditable?: boolean, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarFilteredPageResponseRobloxApiAvatarModelsOutfitModel> {
        const result = this.api.v1UsersUserIdOutfitsGet(userId, outfitType, page, itemsPerPage, isEditable, _options);
        return result.toPromise();
    }


}



import { ObservableOutfitsApi } from './ObservableAPI';

import { OutfitsApiRequestFactory, OutfitsApiResponseProcessor} from "../apis/OutfitsApi";
export class PromiseOutfitsApi {
    private api: ObservableOutfitsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OutfitsApiRequestFactory,
        responseProcessor?: OutfitsApiResponseProcessor
    ) {
        this.api = new ObservableOutfitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v1OutfitsCreatePostWithHttpInfo(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1OutfitsCreatePostWithHttpInfo(outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if any of the assetIds are not owned by the user, or not wearable types.  The name property of the request is optional as one will be auto-generated when the request has a null name.
     * Creates a new outfit.
     * @param outfitUpdateModel The new outfit
     */
    public v1OutfitsCreatePost(outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1OutfitsCreatePost(outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdDeletePostWithHttpInfo(userOutfitId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1OutfitsUserOutfitIdDeletePostWithHttpInfo(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * You are only allowed to delete outfits you created.
     * Deletes the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdDeletePost(userOutfitId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1OutfitsUserOutfitIdDeletePost(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * @param userOutfitId 
     */
    public v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitDetailsModel>> {
        const result = this.api.v1OutfitsUserOutfitIdDetailsGetWithHttpInfo(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * @param userOutfitId 
     */
    public v1OutfitsUserOutfitIdDetailsGet(userOutfitId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsOutfitDetailsModel> {
        const result = this.api.v1OutfitsUserOutfitIdDetailsGet(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsOutfitModel>> {
        const result = this.api.v1OutfitsUserOutfitIdPatchWithHttpInfo(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types. Accepts partial updates.
     * Updates the contents of an outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdPatch(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<RobloxApiAvatarModelsOutfitModel> {
        const result = this.api.v1OutfitsUserOutfitIdPatch(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsAvatarApiSuccessResponse>> {
        const result = this.api.v1OutfitsUserOutfitIdUpdatePostWithHttpInfo(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Fails if the user does not own any of the assetIds or if they are not wearable asset types.
     * Updates the contents of the outfit. Deprecated. There are no calls to this API
     * @param userOutfitId The user outfit id.
     * @param outfitUpdateModel The updated outfit
     */
    public v1OutfitsUserOutfitIdUpdatePost(userOutfitId: number, outfitUpdateModel: RobloxApiAvatarModelsOutfitUpdateModelV1, _options?: Configuration): Promise<RobloxApiAvatarModelsAvatarApiSuccessResponse> {
        const result = this.api.v1OutfitsUserOutfitIdUpdatePost(userOutfitId, outfitUpdateModel, _options);
        return result.toPromise();
    }

    /**
     * Applies the outfit\'s appearance to your avatar  If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.
     * Wears the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdWearPostWithHttpInfo(userOutfitId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiAvatarModelsWearResponseModel>> {
        const result = this.api.v1OutfitsUserOutfitIdWearPostWithHttpInfo(userOutfitId, _options);
        return result.toPromise();
    }

    /**
     * Applies the outfit\'s appearance to your avatar  If the user no longer owns one or more of the assets, invalidAssetIds will be populated with the unwearable assets.
     * Wears the outfit
     * @param userOutfitId The user outfit id
     */
    public v1OutfitsUserOutfitIdWearPost(userOutfitId: number, _options?: Configuration): Promise<RobloxApiAvatarModelsWearResponseModel> {
        const result = this.api.v1OutfitsUserOutfitIdWearPost(userOutfitId, _options);
        return result.toPromise();
    }


}



import { ObservableRecentItemApi } from './ObservableAPI';

import { RecentItemApiRequestFactory, RecentItemApiResponseProcessor} from "../apis/RecentItemApi";
export class PromiseRecentItemApi {
    private api: ObservableRecentItemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RecentItemApiRequestFactory,
        responseProcessor?: RecentItemApiResponseProcessor
    ) {
        this.api = new ObservableRecentItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param recentItemListType 
     */
    public v1RecentItemsRecentItemListTypeListGetWithHttpInfo(recentItemListType: 0 | 1 | 2 | 3 | 4 | 5 | 6, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel>> {
        const result = this.api.v1RecentItemsRecentItemListTypeListGetWithHttpInfo(recentItemListType, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of recent items  Recent items can be Assets or Outfits
     * @param recentItemListType 
     */
    public v1RecentItemsRecentItemListTypeListGet(recentItemListType: 0 | 1 | 2 | 3 | 4 | 5 | 6, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiLegacyPageResponseRobloxApiAvatarModelsRecentItemModel> {
        const result = this.api.v1RecentItemsRecentItemListTypeListGet(recentItemListType, _options);
        return result.toPromise();
    }


}



