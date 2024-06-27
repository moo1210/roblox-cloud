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
import { ObservableGamesV2Api } from './ObservableAPI';

import { GamesV2ApiRequestFactory, GamesV2ApiResponseProcessor} from "../apis/GamesV2Api";
export class PromiseGamesV2Api {
    private api: ObservableGamesV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: GamesV2ApiRequestFactory,
        responseProcessor?: GamesV2ApiResponseProcessor
    ) {
        this.api = new ObservableGamesV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v2GamesUniverseIdMediaGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2>> {
        const result = this.api.v2GamesUniverseIdMediaGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get the game media data
     * @param universeId The id of the universe we get media data from.
     */
    public v2GamesUniverseIdMediaGet(universeId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesGamesGameMediaItemResponseV2> {
        const result = this.api.v2GamesUniverseIdMediaGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets games created by the specified group.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesGetWithHttpInfo(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const result = this.api.v2GroupsGroupIdGamesGetWithHttpInfo(groupId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets games created by the specified group.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesGet(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        const result = this.api.v2GroupsGroupIdGamesGet(groupId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesV2GetWithHttpInfo(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const result = this.api.v2GroupsGroupIdGamesV2GetWithHttpInfo(groupId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
     * @param groupId The group Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdGamesV2Get(groupId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        const result = this.api.v2GroupsGroupIdGamesV2Get(groupId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets users favorite games.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdFavoriteGamesGetWithHttpInfo(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const result = this.api.v2UsersUserIdFavoriteGamesGetWithHttpInfo(userId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets users favorite games.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdFavoriteGamesGet(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        const result = this.api.v2UsersUserIdFavoriteGamesGet(userId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets games created by the specified user.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdGamesGetWithHttpInfo(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2>> {
        const result = this.api.v2UsersUserIdGamesGetWithHttpInfo(userId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets games created by the specified user.
     * @param userId The user Id.
     * @param accessFilter Filtering option via access level.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdGamesGet(userId: number, accessFilter?: 1 | 2 | 4, limit?: 10 | 25 | 50, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesGamesGameResponseV2> {
        const result = this.api.v2UsersUserIdGamesGet(userId, accessFilter, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



