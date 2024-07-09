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

import { ObservableBadgeAwardsApi } from "./ObservableAPI";
import { BadgeAwardsApiRequestFactory, BadgeAwardsApiResponseProcessor} from "../apis/BadgeAwardsApi";

export interface BadgeAwardsApiV1UserBadgesBadgeIdDeleteRequest {
    /**
     * The badge Id.
     * @type number
     * @memberof BadgeAwardsApiv1UserBadgesBadgeIdDelete
     */
    badgeId: number
}

export interface BadgeAwardsApiV1UserUserIdBadgesBadgeIdDeleteRequest {
    /**
     * 
     * @type number
     * @memberof BadgeAwardsApiv1UserUserIdBadgesBadgeIdDelete
     */
    userId: number
    /**
     * The badge Id.
     * @type number
     * @memberof BadgeAwardsApiv1UserUserIdBadgesBadgeIdDelete
     */
    badgeId: number
}

export interface BadgeAwardsApiV1UsersUserIdBadgesAwardedDatesGetRequest {
    /**
     * The user Id.
     * @type number
     * @memberof BadgeAwardsApiv1UsersUserIdBadgesAwardedDatesGet
     */
    userId: number
    /**
     * The CSV of badge Ids.
     * @type Array&lt;number&gt;
     * @memberof BadgeAwardsApiv1UsersUserIdBadgesAwardedDatesGet
     */
    badgeIds: Array<number>
}

export interface BadgeAwardsApiV1UsersUserIdBadgesBadgeIdAwardedDateGetRequest {
    /**
     * User id.
     * @type number
     * @memberof BadgeAwardsApiv1UsersUserIdBadgesBadgeIdAwardedDateGet
     */
    userId: number
    /**
     * Badge id.
     * @type number
     * @memberof BadgeAwardsApiv1UsersUserIdBadgesBadgeIdAwardedDateGet
     */
    badgeId: number
}

export class ObjectBadgeAwardsApi {
    private api: ObservableBadgeAwardsApi

    public constructor(configuration: Configuration, requestFactory?: BadgeAwardsApiRequestFactory, responseProcessor?: BadgeAwardsApiResponseProcessor) {
        this.api = new ObservableBadgeAwardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes a badge from the authenticated user.
     * @param param the request object
     */
    public v1UserBadgesBadgeIdDeleteWithHttpInfo(param: BadgeAwardsApiV1UserBadgesBadgeIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UserBadgesBadgeIdDeleteWithHttpInfo(param.badgeId,  options).toPromise();
    }

    /**
     * Removes a badge from the authenticated user.
     * @param param the request object
     */
    public v1UserBadgesBadgeIdDelete(param: BadgeAwardsApiV1UserBadgesBadgeIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1UserBadgesBadgeIdDelete(param.badgeId,  options).toPromise();
    }

    /**
     * Removes a badge from the user.
     * @param param the request object
     */
    public v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(param: BadgeAwardsApiV1UserUserIdBadgesBadgeIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UserUserIdBadgesBadgeIdDeleteWithHttpInfo(param.userId, param.badgeId,  options).toPromise();
    }

    /**
     * Removes a badge from the user.
     * @param param the request object
     */
    public v1UserUserIdBadgesBadgeIdDelete(param: BadgeAwardsApiV1UserUserIdBadgesBadgeIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1UserUserIdBadgesBadgeIdDelete(param.userId, param.badgeId,  options).toPromise();
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param param the request object
     */
    public v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(param: BadgeAwardsApiV1UsersUserIdBadgesAwardedDatesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse>> {
        return this.api.v1UsersUserIdBadgesAwardedDatesGetWithHttpInfo(param.userId, param.badgeIds,  options).toPromise();
    }

    /**
     * Gets timestamps for when badges were awarded to a user.
     * @param param the request object
     */
    public v1UsersUserIdBadgesAwardedDatesGet(param: BadgeAwardsApiV1UsersUserIdBadgesAwardedDatesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxBadgesApiBadgeAwardResponse> {
        return this.api.v1UsersUserIdBadgesAwardedDatesGet(param.userId, param.badgeIds,  options).toPromise();
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param param the request object
     */
    public v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(param: BadgeAwardsApiV1UsersUserIdBadgesBadgeIdAwardedDateGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1UsersUserIdBadgesBadgeIdAwardedDateGetWithHttpInfo(param.userId, param.badgeId,  options).toPromise();
    }

    /**
     * Gets timestamp for when a single badge was awarded to a user.
     * @param param the request object
     */
    public v1UsersUserIdBadgesBadgeIdAwardedDateGet(param: BadgeAwardsApiV1UsersUserIdBadgesBadgeIdAwardedDateGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1UsersUserIdBadgesBadgeIdAwardedDateGet(param.userId, param.badgeId,  options).toPromise();
    }

}

import { ObservableBadgesApi } from "./ObservableAPI";
import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";

export interface BadgesApiV1BadgesBadgeIdGetRequest {
    /**
     * The badge Id.
     * @type number
     * @memberof BadgesApiv1BadgesBadgeIdGet
     */
    badgeId: number
}

export interface BadgesApiV1BadgesBadgeIdPatchRequest {
    /**
     * The badge Id.
     * @type number
     * @memberof BadgesApiv1BadgesBadgeIdPatch
     */
    badgeId: number
    /**
     * The request body.
     * @type RobloxBadgesApiUpdateBadgeRequest
     * @memberof BadgesApiv1BadgesBadgeIdPatch
     */
    request: RobloxBadgesApiUpdateBadgeRequest
}

export interface BadgesApiV1BadgesMetadataGetRequest {
}

export interface BadgesApiV1UniversesUniverseIdBadgesGetRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof BadgesApiv1UniversesUniverseIdBadgesGet
     */
    universeId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof BadgesApiv1UniversesUniverseIdBadgesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof BadgesApiv1UniversesUniverseIdBadgesGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof BadgesApiv1UniversesUniverseIdBadgesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface BadgesApiV1UniversesUniverseIdBadgesPostRequest {
    /**
     * The ID of the universe to create the badge for.
     * @type number
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    universeId: number
    /**
     * The badge name.
     * @type string
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    name?: string
    /**
     * The badge description.
     * @type string
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    description?: string
    /**
     * Whether or not to pay for the badge with user funds, or group funds. [\\\&#39;User\\\&#39; &#x3D; 1, \\\&#39;Group\\\&#39; &#x3D; 2]
     * @type number
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    paymentSourceType?: number
    /**
     * The badge icon.
     * @type HttpFile
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    files?: HttpFile
    /**
     * User expected cost of a badge.
     * @type number
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    expectedCost?: number
    /**
     * Whether or not the badge should be created in the active state.
     * @type boolean
     * @memberof BadgesApiv1UniversesUniverseIdBadgesPost
     */
    isActive?: boolean
}

export interface BadgesApiV1UniversesUniverseIdFreeBadgesQuotaGetRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof BadgesApiv1UniversesUniverseIdFreeBadgesQuotaGet
     */
    universeId: number
}

export interface BadgesApiV1UsersUserIdBadgesGetRequest {
    /**
     * The user Id.
     * @type number
     * @memberof BadgesApiv1UsersUserIdBadgesGet
     */
    userId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof BadgesApiv1UsersUserIdBadgesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof BadgesApiv1UsersUserIdBadgesGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof BadgesApiv1UsersUserIdBadgesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectBadgesApi {
    private api: ObservableBadgesApi

    public constructor(configuration: Configuration, requestFactory?: BadgesApiRequestFactory, responseProcessor?: BadgesApiResponseProcessor) {
        this.api = new ObservableBadgesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets badge information by the badge Id.
     * @param param the request object
     */
    public v1BadgesBadgeIdGetWithHttpInfo(param: BadgesApiV1BadgesBadgeIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxBadgesApiBadgeResponse>> {
        return this.api.v1BadgesBadgeIdGetWithHttpInfo(param.badgeId,  options).toPromise();
    }

    /**
     * Gets badge information by the badge Id.
     * @param param the request object
     */
    public v1BadgesBadgeIdGet(param: BadgesApiV1BadgesBadgeIdGetRequest, options?: Configuration): Promise<RobloxBadgesApiBadgeResponse> {
        return this.api.v1BadgesBadgeIdGet(param.badgeId,  options).toPromise();
    }

    /**
     * Updates badge configuration.
     * @param param the request object
     */
    public v1BadgesBadgeIdPatchWithHttpInfo(param: BadgesApiV1BadgesBadgeIdPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1BadgesBadgeIdPatchWithHttpInfo(param.badgeId, param.request,  options).toPromise();
    }

    /**
     * Updates badge configuration.
     * @param param the request object
     */
    public v1BadgesBadgeIdPatch(param: BadgesApiV1BadgesBadgeIdPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1BadgesBadgeIdPatch(param.badgeId, param.request,  options).toPromise();
    }

    /**
     * Gets metadata about the badges system.
     * @param param the request object
     */
    public v1BadgesMetadataGetWithHttpInfo(param: BadgesApiV1BadgesMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxBadgesApiBadgeMetadataResponse>> {
        return this.api.v1BadgesMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets metadata about the badges system.
     * @param param the request object
     */
    public v1BadgesMetadataGet(param: BadgesApiV1BadgesMetadataGetRequest = {}, options?: Configuration): Promise<RobloxBadgesApiBadgeMetadataResponse> {
        return this.api.v1BadgesMetadataGet( options).toPromise();
    }

    /**
     * Gets badges by their awarding game.
     * @param param the request object
     */
    public v1UniversesUniverseIdBadgesGetWithHttpInfo(param: BadgesApiV1UniversesUniverseIdBadgesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse>> {
        return this.api.v1UniversesUniverseIdBadgesGetWithHttpInfo(param.universeId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets badges by their awarding game.
     * @param param the request object
     */
    public v1UniversesUniverseIdBadgesGet(param: BadgesApiV1UniversesUniverseIdBadgesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxBadgesApiBadgeResponse> {
        return this.api.v1UniversesUniverseIdBadgesGet(param.universeId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Creates a new badge.
     * @param param the request object
     */
    public v1UniversesUniverseIdBadgesPostWithHttpInfo(param: BadgesApiV1UniversesUniverseIdBadgesPostRequest, options?: Configuration): Promise<HttpInfo<RobloxWebResponsesBadgesBadgeResponseV2>> {
        return this.api.v1UniversesUniverseIdBadgesPostWithHttpInfo(param.universeId, param.name, param.description, param.paymentSourceType, param.files, param.expectedCost, param.isActive,  options).toPromise();
    }

    /**
     * Creates a new badge.
     * @param param the request object
     */
    public v1UniversesUniverseIdBadgesPost(param: BadgesApiV1UniversesUniverseIdBadgesPostRequest, options?: Configuration): Promise<RobloxWebResponsesBadgesBadgeResponseV2> {
        return this.api.v1UniversesUniverseIdBadgesPost(param.universeId, param.name, param.description, param.paymentSourceType, param.files, param.expectedCost, param.isActive,  options).toPromise();
    }

    /**
     * Gets the number of free badges left for the current UTC day by their awarding game.
     * @param param the request object
     */
    public v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(param: BadgesApiV1UniversesUniverseIdFreeBadgesQuotaGetRequest, options?: Configuration): Promise<HttpInfo<number>> {
        return this.api.v1UniversesUniverseIdFreeBadgesQuotaGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Gets the number of free badges left for the current UTC day by their awarding game.
     * @param param the request object
     */
    public v1UniversesUniverseIdFreeBadgesQuotaGet(param: BadgesApiV1UniversesUniverseIdFreeBadgesQuotaGetRequest, options?: Configuration): Promise<number> {
        return this.api.v1UniversesUniverseIdFreeBadgesQuotaGet(param.universeId,  options).toPromise();
    }

    /**
     * Gets a list of badges a user has been awarded.
     * @param param the request object
     */
    public v1UsersUserIdBadgesGetWithHttpInfo(param: BadgesApiV1UsersUserIdBadgesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2>> {
        return this.api.v1UsersUserIdBadgesGetWithHttpInfo(param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of badges a user has been awarded.
     * @param param the request object
     */
    public v1UsersUserIdBadgesGet(param: BadgesApiV1UsersUserIdBadgesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxWebResponsesBadgesBadgeResponseV2> {
        return this.api.v1UsersUserIdBadgesGet(param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}
