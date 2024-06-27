import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxThumbnailsApiModelsUniverseThumbnailsResponse } from '../models/RobloxThumbnailsApiModelsUniverseThumbnailsResponse';
import { RobloxThumbnailsApisModelsThumbnailBatchRequest } from '../models/RobloxThumbnailsApisModelsThumbnailBatchRequest';
import { RobloxThumbsFormatType } from '../models/RobloxThumbsFormatType';
import { RobloxThumbsImageParameters } from '../models/RobloxThumbsImageParameters';
import { RobloxWebResponsesThumbnailsThumbnailBatchResponse } from '../models/RobloxWebResponsesThumbnailsThumbnailBatchResponse';
import { RobloxWebResponsesThumbnailsThumbnailResponse } from '../models/RobloxWebResponsesThumbnailsThumbnailResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxThumbnailsApiModelsUniverseThumbnailsResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxThumbnailsApiModelsUniverseThumbnailsResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailBatchResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailBatchResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse';
import { RobloxWebWebAPIModelsApiErrorModel } from '../models/RobloxWebWebAPIModelsApiErrorModel';
import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Thumbnails asset animated.
     * @param assetId The asset id.
     * @param robloxPlaceId (optional) placeid
     */
    public v1AssetThumbnailAnimatedGetWithHttpInfo(assetId: number, robloxPlaceId?: number, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1AssetThumbnailAnimatedGetWithHttpInfo(assetId, robloxPlaceId, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails asset animated.
     * @param assetId The asset id.
     * @param robloxPlaceId (optional) placeid
     */
    public v1AssetThumbnailAnimatedGet(assetId: number, robloxPlaceId?: number, _options?: Configuration): Promise<RobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1AssetThumbnailAnimatedGet(assetId, robloxPlaceId, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails assets.
     * @param assetIds The asset ids.
     * @param robloxPlaceId (optional) placeid
     * @param returnPolicy Optional policy to use in selecting thumbnail to return (default &#x3D; PlaceHolder).
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1AssetsGetWithHttpInfo(assetIds: Array<number>, robloxPlaceId?: number, returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated', size?: '30x30' | '42x42' | '50x50' | '60x62' | '75x75' | '110x110' | '140x140' | '150x150' | '160x100' | '160x600' | '250x250' | '256x144' | '300x250' | '304x166' | '384x216' | '396x216' | '420x420' | '480x270' | '512x512' | '576x324' | '700x700' | '728x90' | '768x432' | '1200x80', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1AssetsGetWithHttpInfo(assetIds, robloxPlaceId, returnPolicy, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails assets.
     * @param assetIds The asset ids.
     * @param robloxPlaceId (optional) placeid
     * @param returnPolicy Optional policy to use in selecting thumbnail to return (default &#x3D; PlaceHolder).
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1AssetsGet(assetIds: Array<number>, robloxPlaceId?: number, returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated', size?: '30x30' | '42x42' | '50x50' | '60x62' | '75x75' | '110x110' | '140x140' | '150x150' | '160x100' | '160x600' | '250x250' | '256x144' | '300x250' | '304x166' | '384x216' | '396x216' | '420x420' | '480x270' | '512x512' | '576x324' | '700x700' | '728x90' | '768x432' | '1200x80', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1AssetsGet(assetIds, robloxPlaceId, returnPolicy, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails assets.
     * @param assetId The asset id.
     * @param robloxPlaceId (optional) placeid
     */
    public v1AssetsThumbnail3dGetWithHttpInfo(assetId: number, robloxPlaceId?: number, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1AssetsThumbnail3dGetWithHttpInfo(assetId, robloxPlaceId, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails assets.
     * @param assetId The asset id.
     * @param robloxPlaceId (optional) placeid
     */
    public v1AssetsThumbnail3dGet(assetId: number, robloxPlaceId?: number, _options?: Configuration): Promise<RobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1AssetsThumbnail3dGet(assetId, robloxPlaceId, _options);
        return result.toPromise();
    }


}



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
     * Get Avatar 3d object for a user
     * @param userId user Id for avatar
     */
    public v1UsersAvatar3dGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1UsersAvatar3dGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar 3d object for a user
     * @param userId user Id for avatar
     */
    public v1UsersAvatar3dGet(userId: number, _options?: Configuration): Promise<RobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1UsersAvatar3dGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar Busts for the given CSV of userIds
     * @param userIds CSV for the userIds to get avatar headshots
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersAvatarBustGetWithHttpInfo(userIds: Array<number>, size?: '48x48' | '50x50' | '60x60' | '75x75' | '100x100' | '150x150' | '180x180' | '352x352' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1UsersAvatarBustGetWithHttpInfo(userIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar Busts for the given CSV of userIds
     * @param userIds CSV for the userIds to get avatar headshots
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersAvatarBustGet(userIds: Array<number>, size?: '48x48' | '50x50' | '60x60' | '75x75' | '100x100' | '150x150' | '180x180' | '352x352' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1UsersAvatarBustGet(userIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar Full body shots for the given CSV of userIds
     * @param userIds CSV for the userIds to get avatar full body shots
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersAvatarGetWithHttpInfo(userIds: Array<number>, size?: '30x30' | '48x48' | '60x60' | '75x75' | '100x100' | '110x110' | '140x140' | '150x150' | '150x200' | '180x180' | '250x250' | '352x352' | '420x420' | '720x720', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1UsersAvatarGetWithHttpInfo(userIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar Full body shots for the given CSV of userIds
     * @param userIds CSV for the userIds to get avatar full body shots
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersAvatarGet(userIds: Array<number>, size?: '30x30' | '48x48' | '60x60' | '75x75' | '100x100' | '110x110' | '140x140' | '150x150' | '150x200' | '180x180' | '250x250' | '352x352' | '420x420' | '720x720', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1UsersAvatarGet(userIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar Headshots for the given CSV of userIds
     * @param userIds CSV for the userIds to get avatar headshots
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersAvatarHeadshotGetWithHttpInfo(userIds: Array<number>, size?: '48x48' | '50x50' | '60x60' | '75x75' | '100x100' | '110x110' | '150x150' | '180x180' | '352x352' | '420x420' | '720x720', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1UsersAvatarHeadshotGetWithHttpInfo(userIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get Avatar Headshots for the given CSV of userIds
     * @param userIds CSV for the userIds to get avatar headshots
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersAvatarHeadshotGet(userIds: Array<number>, size?: '48x48' | '50x50' | '60x60' | '75x75' | '100x100' | '110x110' | '150x150' | '180x180' | '352x352' | '420x420' | '720x720', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1UsersAvatarHeadshotGet(userIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservableBadgesApi } from './ObservableAPI';

import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";
export class PromiseBadgesApi {
    private api: ObservableBadgesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgesApiRequestFactory,
        responseProcessor?: BadgesApiResponseProcessor
    ) {
        this.api = new ObservableBadgesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Thumbnails badge icons.
     * @param badgeIds The badge ids.
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1BadgesIconsGetWithHttpInfo(badgeIds: Array<number>, size?: '150x150', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1BadgesIconsGetWithHttpInfo(badgeIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails badge icons.
     * @param badgeIds The badge ids.
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1BadgesIconsGet(badgeIds: Array<number>, size?: '150x150', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1BadgesIconsGet(badgeIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of thumbnails with varying types and sizes
     * @param requests List of ThumbnailBatchRequest objects, may contain the following request types:              1. Avatar              2. AvatarHeadShot              3. GameIcon              4. BadgeIcon              5. GameThumbnail              6. GamePass              7. Asset              8. BundleThumbnail              9. Outfit              10. GroupIcon              11. DeveloperProduct              12. AutoGeneratedAsset              13. AvatarBust              14. PlaceIcon              15. AutoGeneratedGameIcon              16. ForceAutoGeneratedGameIcon              17. Look
     * @param robloxPlaceId (optional) placeid
     */
    public v1BatchPostWithHttpInfo(requests: Array<RobloxThumbnailsApisModelsThumbnailBatchRequest>, robloxPlaceId?: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailBatchResponse>> {
        const result = this.api.v1BatchPostWithHttpInfo(requests, robloxPlaceId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of thumbnails with varying types and sizes
     * @param requests List of ThumbnailBatchRequest objects, may contain the following request types:              1. Avatar              2. AvatarHeadShot              3. GameIcon              4. BadgeIcon              5. GameThumbnail              6. GamePass              7. Asset              8. BundleThumbnail              9. Outfit              10. GroupIcon              11. DeveloperProduct              12. AutoGeneratedAsset              13. AvatarBust              14. PlaceIcon              15. AutoGeneratedGameIcon              16. ForceAutoGeneratedGameIcon              17. Look
     * @param robloxPlaceId (optional) placeid
     */
    public v1BatchPost(requests: Array<RobloxThumbnailsApisModelsThumbnailBatchRequest>, robloxPlaceId?: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailBatchResponse> {
        const result = this.api.v1BatchPost(requests, robloxPlaceId, _options);
        return result.toPromise();
    }


}



import { ObservableBundlesApi } from './ObservableAPI';

import { BundlesApiRequestFactory, BundlesApiResponseProcessor} from "../apis/BundlesApi";
export class PromiseBundlesApi {
    private api: ObservableBundlesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BundlesApiRequestFactory,
        responseProcessor?: BundlesApiResponseProcessor
    ) {
        this.api = new ObservableBundlesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get bundle thumbnails for the given CSV of bundle ids
     * @param bundleIds CSV for the bundle ids to get bundle thumbnails
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1BundlesThumbnailsGetWithHttpInfo(bundleIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1BundlesThumbnailsGetWithHttpInfo(bundleIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get bundle thumbnails for the given CSV of bundle ids
     * @param bundleIds CSV for the bundle ids to get bundle thumbnails
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1BundlesThumbnailsGet(bundleIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1BundlesThumbnailsGet(bundleIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservableDeveloperProductsApi } from './ObservableAPI';

import { DeveloperProductsApiRequestFactory, DeveloperProductsApiResponseProcessor} from "../apis/DeveloperProductsApi";
export class PromiseDeveloperProductsApi {
    private api: ObservableDeveloperProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeveloperProductsApiRequestFactory,
        responseProcessor?: DeveloperProductsApiResponseProcessor
    ) {
        this.api = new ObservableDeveloperProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Thumbnails developer product icons.
     * @param developerProductIds The developer product ids.
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1DeveloperProductsIconsGetWithHttpInfo(developerProductIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1DeveloperProductsIconsGetWithHttpInfo(developerProductIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails developer product icons.
     * @param developerProductIds The developer product ids.
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1DeveloperProductsIconsGet(developerProductIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1DeveloperProductsIconsGet(developerProductIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservableGamePassesApi } from './ObservableAPI';

import { GamePassesApiRequestFactory, GamePassesApiResponseProcessor} from "../apis/GamePassesApi";
export class PromiseGamePassesApi {
    private api: ObservableGamePassesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GamePassesApiRequestFactory,
        responseProcessor?: GamePassesApiResponseProcessor
    ) {
        this.api = new ObservableGamePassesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Thumbnails game pass icons.
     * @param gamePassIds The game pass ids.
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamePassesGetWithHttpInfo(gamePassIds: Array<number>, size?: '150x150', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1GamePassesGetWithHttpInfo(gamePassIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Thumbnails game pass icons.
     * @param gamePassIds The game pass ids.
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamePassesGet(gamePassIds: Array<number>, size?: '150x150', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1GamePassesGet(gamePassIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservableGamesApi } from './ObservableAPI';

import { GamesApiRequestFactory, GamesApiResponseProcessor} from "../apis/GamesApi";
export class PromiseGamesApi {
    private api: ObservableGamesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GamesApiRequestFactory,
        responseProcessor?: GamesApiResponseProcessor
    ) {
        this.api = new ObservableGamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetches game icon URLs for a list of universes\' root places. Ids that do not correspond to a valid universe will be filtered out.
     * @param universeIds The universe ids.
     * @param returnPolicy Optional policy to use in selecting game icon to return (default &#x3D; PlaceHolder).
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamesIconsGetWithHttpInfo(universeIds: Array<number>, returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated', size?: '50x50' | '128x128' | '150x150' | '256x256' | '420x420' | '512x512', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1GamesIconsGetWithHttpInfo(universeIds, returnPolicy, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetches game icon URLs for a list of universes\' root places. Ids that do not correspond to a valid universe will be filtered out.
     * @param universeIds The universe ids.
     * @param returnPolicy Optional policy to use in selecting game icon to return (default &#x3D; PlaceHolder).
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamesIconsGet(universeIds: Array<number>, returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated', size?: '50x50' | '128x128' | '150x150' | '256x256' | '420x420' | '512x512', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1GamesIconsGet(universeIds, returnPolicy, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetch game thumbnail URLs for a list of universe IDs.
     * @param universeIds comma-delimited list of universe IDs
     * @param countPerUniverse max number of thumbnails to return per universe
     * @param defaults true if defaults (if any) should be returned if no media exists
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamesMultigetThumbnailsGetWithHttpInfo(universeIds: Array<number>, countPerUniverse?: number, defaults?: boolean, size?: '768x432' | '576x324' | '480x270' | '384x216' | '256x144', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxThumbnailsApiModelsUniverseThumbnailsResponse>> {
        const result = this.api.v1GamesMultigetThumbnailsGetWithHttpInfo(universeIds, countPerUniverse, defaults, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetch game thumbnail URLs for a list of universe IDs.
     * @param universeIds comma-delimited list of universe IDs
     * @param countPerUniverse max number of thumbnails to return per universe
     * @param defaults true if defaults (if any) should be returned if no media exists
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamesMultigetThumbnailsGet(universeIds: Array<number>, countPerUniverse?: number, defaults?: boolean, size?: '768x432' | '576x324' | '480x270' | '384x216' | '256x144', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxThumbnailsApiModelsUniverseThumbnailsResponse> {
        const result = this.api.v1GamesMultigetThumbnailsGet(universeIds, countPerUniverse, defaults, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetches game thumbnail URLs for a list of universes\' thumbnail ids. Ids that do not correspond to a valid thumbnail will be filtered out.
     * @param universeId 
     * @param thumbnailIds 
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamesUniverseIdThumbnailsGetWithHttpInfo(universeId: number, thumbnailIds: Array<number>, size?: '768x432' | '576x324' | '480x270' | '384x216' | '256x144', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1GamesUniverseIdThumbnailsGetWithHttpInfo(universeId, thumbnailIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetches game thumbnail URLs for a list of universes\' thumbnail ids. Ids that do not correspond to a valid thumbnail will be filtered out.
     * @param universeId 
     * @param thumbnailIds 
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GamesUniverseIdThumbnailsGet(universeId: number, thumbnailIds: Array<number>, size?: '768x432' | '576x324' | '480x270' | '384x216' | '256x144', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1GamesUniverseIdThumbnailsGet(universeId, thumbnailIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservableGroupEmblemApi } from './ObservableAPI';

import { GroupEmblemApiRequestFactory, GroupEmblemApiResponseProcessor} from "../apis/GroupEmblemApi";
export class PromiseGroupEmblemApi {
    private api: ObservableGroupEmblemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupEmblemApiRequestFactory,
        responseProcessor?: GroupEmblemApiResponseProcessor
    ) {
        this.api = new ObservableGroupEmblemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetches thumbnail URLs for a list of groups. Ids that do not correspond to groups will be filtered out.
     * @param groupIds 
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GroupsIconsGetWithHttpInfo(groupIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1GroupsIconsGetWithHttpInfo(groupIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetches thumbnail URLs for a list of groups. Ids that do not correspond to groups will be filtered out.
     * @param groupIds 
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1GroupsIconsGet(groupIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1GroupsIconsGet(groupIds, size, format, isCircular, _options);
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
     * Get 3d object for an outfit
     * @param outfitId CSV for the userIds to get user outfits
     */
    public v1UsersOutfit3dGetWithHttpInfo(outfitId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1UsersOutfit3dGetWithHttpInfo(outfitId, _options);
        return result.toPromise();
    }

    /**
     * Get 3d object for an outfit
     * @param outfitId CSV for the userIds to get user outfits
     */
    public v1UsersOutfit3dGet(outfitId: number, _options?: Configuration): Promise<RobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1UsersOutfit3dGet(outfitId, _options);
        return result.toPromise();
    }

    /**
     * Get outfits for the given CSV of userOutfitIds
     * @param userOutfitIds CSV for the userOutfitIds to get user outfits
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersOutfitsGetWithHttpInfo(userOutfitIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1UsersOutfitsGetWithHttpInfo(userOutfitIds, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Get outfits for the given CSV of userOutfitIds
     * @param userOutfitIds CSV for the userOutfitIds to get user outfits
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1UsersOutfitsGet(userOutfitIds: Array<number>, size?: '150x150' | '420x420', format?: 'Png' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1UsersOutfitsGet(userOutfitIds, size, format, isCircular, _options);
        return result.toPromise();
    }


}



import { ObservablePlacesApi } from './ObservableAPI';

import { PlacesApiRequestFactory, PlacesApiResponseProcessor} from "../apis/PlacesApi";
export class PromisePlacesApi {
    private api: ObservablePlacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlacesApiRequestFactory,
        responseProcessor?: PlacesApiResponseProcessor
    ) {
        this.api = new ObservablePlacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetches game icon URLs for a list of places. Ids that do not correspond to a valid place will be filtered out.
     * @param placeIds The place ids.
     * @param returnPolicy Optional policy to use in selecting game icon to return (default &#x3D; PlaceHolder).
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1PlacesGameiconsGetWithHttpInfo(placeIds: Array<number>, returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated', size?: '50x50' | '128x128' | '150x150' | '256x256' | '420x420' | '512x512', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse>> {
        const result = this.api.v1PlacesGameiconsGetWithHttpInfo(placeIds, returnPolicy, size, format, isCircular, _options);
        return result.toPromise();
    }

    /**
     * Fetches game icon URLs for a list of places. Ids that do not correspond to a valid place will be filtered out.
     * @param placeIds The place ids.
     * @param returnPolicy Optional policy to use in selecting game icon to return (default &#x3D; PlaceHolder).
     * @param size The thumbnail size, formatted widthxheight
     * @param format The thumbnail format
     * @param isCircular The circle thumbnail output parameter, true or false
     */
    public v1PlacesGameiconsGet(placeIds: Array<number>, returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated', size?: '50x50' | '128x128' | '150x150' | '256x256' | '420x420' | '512x512', format?: 'Png' | 'Jpeg' | 'Webp', isCircular?: boolean, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesThumbnailsThumbnailResponse> {
        const result = this.api.v1PlacesGameiconsGet(placeIds, returnPolicy, size, format, isCircular, _options);
        return result.toPromise();
    }


}



