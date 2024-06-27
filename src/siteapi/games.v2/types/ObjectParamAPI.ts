import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebResponsesGamesGameMediaItemResponseV2 } from '../models/RobloxWebResponsesGamesGameMediaItemResponseV2';
import { RobloxWebResponsesGamesGameResponseV2 } from '../models/RobloxWebResponsesGamesGameResponseV2';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetType';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformCoreCreatorType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformCoreCreatorType';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt32 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt32';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2 } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2';
import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2 } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2';

import { ObservableGamesV2Api } from "./ObservableAPI";
import { GamesV2ApiRequestFactory, GamesV2ApiResponseProcessor} from "../apis/GamesV2Api";

export interface GamesV2ApiV2GamesUniverseIdMediaGetRequest {
    /**
     * The id of the universe we get media data from.
     * @type number
     * @memberof GamesV2Apiv2GamesUniverseIdMediaGet
     */
    universeId: number
}

export interface GamesV2ApiV2GroupsGroupIdGamesGetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof GamesV2Apiv2GroupsGroupIdGamesGet
     */
    groupId: number
    /**
     * Filtering option via access level.
     * @type 1 | 2 | 4
     * @memberof GamesV2Apiv2GroupsGroupIdGamesGet
     */
    accessFilter?: 1 | 2 | 4
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GamesV2Apiv2GroupsGroupIdGamesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GamesV2Apiv2GroupsGroupIdGamesGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GamesV2Apiv2GroupsGroupIdGamesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface GamesV2ApiV2GroupsGroupIdGamesV2GetRequest {
    /**
     * The group Id.
     * @type number
     * @memberof GamesV2Apiv2GroupsGroupIdGamesV2Get
     */
    groupId: number
    /**
     * Filtering option via access level.
     * @type 1 | 2 | 4
     * @memberof GamesV2Apiv2GroupsGroupIdGamesV2Get
     */
    accessFilter?: 1 | 2 | 4
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GamesV2Apiv2GroupsGroupIdGamesV2Get
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GamesV2Apiv2GroupsGroupIdGamesV2Get
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GamesV2Apiv2GroupsGroupIdGamesV2Get
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface GamesV2ApiV2UsersUserIdFavoriteGamesGetRequest {
    /**
     * The user Id.
     * @type number
     * @memberof GamesV2Apiv2UsersUserIdFavoriteGamesGet
     */
    userId: number
    /**
     * Filtering option via access level.
     * @type 1 | 2 | 4
     * @memberof GamesV2Apiv2UsersUserIdFavoriteGamesGet
     */
    accessFilter?: 1 | 2 | 4
    /**
     * The number of results per request.
     * @type 10 | 25 | 50
     * @memberof GamesV2Apiv2UsersUserIdFavoriteGamesGet
     */
    limit?: 10 | 25 | 50
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GamesV2Apiv2UsersUserIdFavoriteGamesGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GamesV2Apiv2UsersUserIdFavoriteGamesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface GamesV2ApiV2UsersUserIdGamesGetRequest {
    /**
     * The user Id.
     * @type number
     * @memberof GamesV2Apiv2UsersUserIdGamesGet
     */
    userId: number
    /**
     * Filtering option via access level.
     * @type 1 | 2 | 4
     * @memberof GamesV2Apiv2UsersUserIdGamesGet
     */
    accessFilter?: 1 | 2 | 4
    /**
     * The number of results per request.
     * @type 10 | 25 | 50
     * @memberof GamesV2Apiv2UsersUserIdGamesGet
     */
    limit?: 10 | 25 | 50
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GamesV2Apiv2UsersUserIdGamesGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GamesV2Apiv2UsersUserIdGamesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectGamesV2Api {
    private api: ObservableGamesV2Api

    public constructor(configuration: Configuration, requestFactory?: GamesV2ApiRequestFactory, responseProcessor?: GamesV2ApiResponseProcessor) {
        this.api = new ObservableGamesV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the game media data
     * @param param the request object
     */
    public v2GamesUniverseIdMediaGetWithHttpInfo(param: GamesV2ApiV2GamesUniverseIdMediaGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2>> {
        return this.api.v2GamesUniverseIdMediaGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get the game media data
     * @param param the request object
     */
    public v2GamesUniverseIdMediaGet(param: GamesV2ApiV2GamesUniverseIdMediaGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2> {
        return this.api.v2GamesUniverseIdMediaGet(param.universeId,  options).toPromise();
    }

    /**
     * Gets games created by the specified group.
     * @param param the request object
     */
    public v2GroupsGroupIdGamesGetWithHttpInfo(param: GamesV2ApiV2GroupsGroupIdGamesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        return this.api.v2GroupsGroupIdGamesGetWithHttpInfo(param.groupId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets games created by the specified group.
     * @param param the request object
     */
    public v2GroupsGroupIdGamesGet(param: GamesV2ApiV2GroupsGroupIdGamesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.api.v2GroupsGroupIdGamesGet(param.groupId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param param the request object
     */
    public v2GroupsGroupIdGamesV2GetWithHttpInfo(param: GamesV2ApiV2GroupsGroupIdGamesV2GetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        return this.api.v2GroupsGroupIdGamesV2GetWithHttpInfo(param.groupId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param param the request object
     */
    public v2GroupsGroupIdGamesV2Get(param: GamesV2ApiV2GroupsGroupIdGamesV2GetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.api.v2GroupsGroupIdGamesV2Get(param.groupId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets users favorite games.
     * @param param the request object
     */
    public v2UsersUserIdFavoriteGamesGetWithHttpInfo(param: GamesV2ApiV2UsersUserIdFavoriteGamesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        return this.api.v2UsersUserIdFavoriteGamesGetWithHttpInfo(param.userId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets users favorite games.
     * @param param the request object
     */
    public v2UsersUserIdFavoriteGamesGet(param: GamesV2ApiV2UsersUserIdFavoriteGamesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.api.v2UsersUserIdFavoriteGamesGet(param.userId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets games created by the specified user.
     * @param param the request object
     */
    public v2UsersUserIdGamesGetWithHttpInfo(param: GamesV2ApiV2UsersUserIdGamesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        return this.api.v2UsersUserIdGamesGetWithHttpInfo(param.userId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets games created by the specified user.
     * @param param the request object
     */
    public v2UsersUserIdGamesGet(param: GamesV2ApiV2UsersUserIdGamesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        return this.api.v2UsersUserIdGamesGet(param.userId, param.accessFilter, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}
