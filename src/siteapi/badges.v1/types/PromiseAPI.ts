import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxBadgesApiBadgeAwardResponse } from '../models/RobloxBadgesApiBadgeAwardResponse';
import { RobloxBadgesApiBadgeMetadataResponse } from '../models/RobloxBadgesApiBadgeMetadataResponse';
import { RobloxBadgesApiBadgeResponse } from '../models/RobloxBadgesApiBadgeResponse';
import { RobloxBadgesApiUniverseResponse } from '../models/RobloxBadgesApiUniverseResponse';
import { RobloxBadgesApiUpdateBadgeRequest } from '../models/RobloxBadgesApiUpdateBadgeRequest';
import { RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/RobloxPagingExclusiveStartKeyCursorSystemString';
import { RobloxWebResponsesBadgesBadgeAwardStatisticsResponse } from '../models/RobloxWebResponsesBadgesBadgeAwardStatisticsResponse';
import { RobloxWebResponsesBadgesBadgeResponseV2 } from '../models/RobloxWebResponsesBadgesBadgeResponseV2';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformBadgesBadgeAwarderType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformBadgesBadgeAwarderType';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2 } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2';
import { SystemIOStream } from '../models/SystemIOStream';
import { ObservableBadgeAwardsApi } from './ObservableAPI';

import { BadgeAwardsApiRequestFactory, BadgeAwardsApiResponseProcessor} from "../apis/BadgeAwardsApi";
export class PromiseBadgeAwardsApi {
    private api: ObservableBadgeAwardsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgeAwardsApiRequestFactory,
        responseProcessor?: BadgeAwardsApiResponseProcessor
    ) {
        this.api = new ObservableBadgeAwardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes a badge from the authenticated user.
     * @param badgeId The badge Id.
     */
    public v1UserBadgesBadgeIdDeleteWithHttpInfo(badgeId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UserBadgesBadgeIdDeleteWithHttpInfo(badgeId, _options);
        return result.toPromise();
    }

    /**
     * Removes a badge from the authenticated user.
     * @param badgeId The badge Id.
     */
    public v1UserBadgesBadgeIdDelete(badgeId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UserBadgesBadgeIdDelete(badgeId, _options);
        return result.toPromise();
    }

    /**
     * Removes a badge from the user.
     * @param userId 
     * @param badgeId The badge Id.
     */
    public v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(userId: number, badgeId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(userId, badgeId, _options);
        return result.toPromise();
    }

    /**
     * Removes a badge from the user.
     * @param userId 
     * @param badgeId The badge Id.
     */
    public v1UserUserIdBadgesBadgeIdDelete(userId: number, badgeId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UserUserIdBadgesBadgeIdDelete(userId, badgeId, _options);
        return result.toPromise();
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param userId The user Id.
     * @param badgeIds The CSV of badge Ids.
     */
    public v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(userId: number, badgeIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse>> {
        const result = this.api.v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(userId, badgeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param userId The user Id.
     * @param badgeIds The CSV of badge Ids.
     */
    public v1UsersUserIdBadgesAwardedDatesGet(userId: number, badgeIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse> {
        const result = this.api.v1UsersUserIdBadgesAwardedDatesGet(userId, badgeIds, _options);
        return result.toPromise();
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param userId User id.
     * @param badgeId Badge id.
     */
    public v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(userId: number, badgeId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(userId, badgeId, _options);
        return result.toPromise();
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param userId User id.
     * @param badgeId Badge id.
     */
    public v1UsersUserIdBadgesBadgeIdAwardedDateGet(userId: number, badgeId: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1UsersUserIdBadgesBadgeIdAwardedDateGet(userId, badgeId, _options);
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
     * Gets badge information by the badge Id.
     * @param badgeId The badge Id.
     */
    public v1BadgesBadgeIdGetWithHttpInfo(badgeId: number, _options?: Configuration): Promise<HttpInfo<RobloxBadgesApiBadgeResponse>> {
        const result = this.api.v1BadgesBadgeIdGetWithHttpInfo(badgeId, _options);
        return result.toPromise();
    }

    /**
     * Gets badge information by the badge Id.
     * @param badgeId The badge Id.
     */
    public v1BadgesBadgeIdGet(badgeId: number, _options?: Configuration): Promise<RobloxBadgesApiBadgeResponse> {
        const result = this.api.v1BadgesBadgeIdGet(badgeId, _options);
        return result.toPromise();
    }

    /**
     * Updates badge configuration.
     * @param badgeId The badge Id.
     * @param request The request body.
     */
    public v1BadgesBadgeIdPatchWithHttpInfo(badgeId: number, request: RobloxBadgesApiUpdateBadgeRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1BadgesBadgeIdPatchWithHttpInfo(badgeId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates badge configuration.
     * @param badgeId The badge Id.
     * @param request The request body.
     */
    public v1BadgesBadgeIdPatch(badgeId: number, request: RobloxBadgesApiUpdateBadgeRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1BadgesBadgeIdPatch(badgeId, request, _options);
        return result.toPromise();
    }

    /**
     * Gets metadata about the badges system.
     */
    public v1BadgesMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxBadgesApiBadgeMetadataResponse>> {
        const result = this.api.v1BadgesMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets metadata about the badges system.
     */
    public v1BadgesMetadataGet(_options?: Configuration): Promise<RobloxBadgesApiBadgeMetadataResponse> {
        const result = this.api.v1BadgesMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Gets badges by their awarding game.
     * @param universeId The universe Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UniversesUniverseIdBadgesGetWithHttpInfo(universeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse>> {
        const result = this.api.v1UniversesUniverseIdBadgesGetWithHttpInfo(universeId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets badges by their awarding game.
     * @param universeId The universe Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UniversesUniverseIdBadgesGet(universeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse> {
        const result = this.api.v1UniversesUniverseIdBadgesGet(universeId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Creates a new badge.
     * @param universeId The ID of the universe to create the badge for.
     * @param name The badge name.
     * @param description The badge description.
     * @param paymentSourceType Whether or not to pay for the badge with user funds, or group funds. [\\\&#39;User\\\&#39; &#x3D; 1, \\\&#39;Group\\\&#39; &#x3D; 2]
     * @param files The badge icon.
     * @param expectedCost User expected cost of a badge.
     * @param isActive Whether or not the badge should be created in the active state.
     */
    public v1UniversesUniverseIdBadgesPostWithHttpInfo(universeId: number, name?: string, description?: string, paymentSourceType?: number, files?: HttpFile, expectedCost?: number, isActive?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesBadgesBadgeResponseV2>> {
        const result = this.api.v1UniversesUniverseIdBadgesPostWithHttpInfo(universeId, name, description, paymentSourceType, files, expectedCost, isActive, _options);
        return result.toPromise();
    }

    /**
     * Creates a new badge.
     * @param universeId The ID of the universe to create the badge for.
     * @param name The badge name.
     * @param description The badge description.
     * @param paymentSourceType Whether or not to pay for the badge with user funds, or group funds. [\\\&#39;User\\\&#39; &#x3D; 1, \\\&#39;Group\\\&#39; &#x3D; 2]
     * @param files The badge icon.
     * @param expectedCost User expected cost of a badge.
     * @param isActive Whether or not the badge should be created in the active state.
     */
    public v1UniversesUniverseIdBadgesPost(universeId: number, name?: string, description?: string, paymentSourceType?: number, files?: HttpFile, expectedCost?: number, isActive?: boolean, _options?: Configuration): Promise<RobloxWebResponsesBadgesBadgeResponseV2> {
        const result = this.api.v1UniversesUniverseIdBadgesPost(universeId, name, description, paymentSourceType, files, expectedCost, isActive, _options);
        return result.toPromise();
    }

    /**
     * Gets the number of free badges left for the current UTC day by their awarding game.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<number>> {
        const result = this.api.v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets the number of free badges left for the current UTC day by their awarding game.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdFreeBadgesQuotaGet(universeId: number, _options?: Configuration): Promise<number> {
        const result = this.api.v1UniversesUniverseIdFreeBadgesQuotaGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of badges a user has been awarded.
     * @param userId The user Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBadgesGetWithHttpInfo(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2>> {
        const result = this.api.v1UsersUserIdBadgesGetWithHttpInfo(userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of badges a user has been awarded.
     * @param userId The user Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBadgesGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2> {
        const result = this.api.v1UsersUserIdBadgesGet(userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



