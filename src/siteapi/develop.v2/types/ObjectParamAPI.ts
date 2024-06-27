import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxApiDevelopAssetVersion } from '../models/RobloxApiDevelopAssetVersion';
import { RobloxApiDevelopModelsPlaceConfigurationModelV2 } from '../models/RobloxApiDevelopModelsPlaceConfigurationModelV2';
import { RobloxApiDevelopModelsPlaceModelV2 } from '../models/RobloxApiDevelopModelsPlaceModelV2';
import { RobloxApiDevelopModelsUniverseModerationPolicyStatus } from '../models/RobloxApiDevelopModelsUniverseModerationPolicyStatus';
import { RobloxApiDevelopModelsUniverseSettingsRequestV2 } from '../models/RobloxApiDevelopModelsUniverseSettingsRequestV2';
import { RobloxApiDevelopModelsUniverseSettingsResponseV2 } from '../models/RobloxApiDevelopModelsUniverseSettingsResponseV2';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemString } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemString';
import { RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel } from '../models/RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel';
import { RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions } from '../models/RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';
import { RobloxWebWebAPIExclusiveStartRequestSystemString } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemString';
import { RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion';

import { ObservableAssetsV2Api } from "./ObservableAPI";
import { AssetsV2ApiRequestFactory, AssetsV2ApiResponseProcessor} from "../apis/AssetsV2Api";

export interface AssetsV2ApiV2AssetsIdVersionsGetRequest {
    /**
     * The ID of the asset.Roblox.Platform.Assets.IAsset
     * @type number
     * @memberof AssetsV2Apiv2AssetsIdVersionsGet
     */
    id: number
    /**
     * The ID of the place.Roblox.Platform.Assets.IPlace
     * @type number
     * @memberof AssetsV2Apiv2AssetsIdVersionsGet
     */
    robloxPlaceId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof AssetsV2Apiv2AssetsIdVersionsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof AssetsV2Apiv2AssetsIdVersionsGet
     */
    cursor?: string
    /**
     * Sort by version number, default is desc.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof AssetsV2Apiv2AssetsIdVersionsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectAssetsV2Api {
    private api: ObservableAssetsV2Api

    public constructor(configuration: Configuration, requestFactory?: AssetsV2ApiRequestFactory, responseProcessor?: AssetsV2ApiResponseProcessor) {
        this.api = new ObservableAssetsV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param param the request object
     */
    public v2AssetsIdVersionsGetWithHttpInfo(param: AssetsV2ApiV2AssetsIdVersionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion>> {
        return this.api.v2AssetsIdVersionsGetWithHttpInfo(param.id, param.robloxPlaceId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param param the request object
     */
    public v2AssetsIdVersionsGet(param: AssetsV2ApiV2AssetsIdVersionsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion> {
        return this.api.v2AssetsIdVersionsGet(param.id, param.robloxPlaceId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}

import { ObservablePlacesV2Api } from "./ObservableAPI";
import { PlacesV2ApiRequestFactory, PlacesV2ApiResponseProcessor} from "../apis/PlacesV2Api";

export interface PlacesV2ApiV2PlacesPlaceIdGetRequest {
    /**
     * The place id for the place to be updated.
     * @type number
     * @memberof PlacesV2Apiv2PlacesPlaceIdGet
     */
    placeId: number
}

export interface PlacesV2ApiV2PlacesPlaceIdPatchRequest {
    /**
     * The place id for the place to be updated.
     * @type number
     * @memberof PlacesV2Apiv2PlacesPlaceIdPatch
     */
    placeId: number
    /**
     * 
     * @type RobloxApiDevelopModelsPlaceConfigurationModelV2
     * @memberof PlacesV2Apiv2PlacesPlaceIdPatch
     */
    configuration: RobloxApiDevelopModelsPlaceConfigurationModelV2
}

export class ObjectPlacesV2Api {
    private api: ObservablePlacesV2Api

    public constructor(configuration: Configuration, requestFactory?: PlacesV2ApiRequestFactory, responseProcessor?: PlacesV2ApiResponseProcessor) {
        this.api = new ObservablePlacesV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v2PlacesPlaceIdGetWithHttpInfo(param: PlacesV2ApiV2PlacesPlaceIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModelV2>> {
        return this.api.v2PlacesPlaceIdGetWithHttpInfo(param.placeId,  options).toPromise();
    }

    /**
     * Gets the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v2PlacesPlaceIdGet(param: PlacesV2ApiV2PlacesPlaceIdGetRequest, options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModelV2> {
        return this.api.v2PlacesPlaceIdGet(param.placeId,  options).toPromise();
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v2PlacesPlaceIdPatchWithHttpInfo(param: PlacesV2ApiV2PlacesPlaceIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModelV2>> {
        return this.api.v2PlacesPlaceIdPatchWithHttpInfo(param.placeId, param.configuration,  options).toPromise();
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v2PlacesPlaceIdPatch(param: PlacesV2ApiV2PlacesPlaceIdPatchRequest, options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModelV2> {
        return this.api.v2PlacesPlaceIdPatch(param.placeId, param.configuration,  options).toPromise();
    }

}

import { ObservableTeamTestV2Api } from "./ObservableAPI";
import { TeamTestV2ApiRequestFactory, TeamTestV2ApiResponseProcessor} from "../apis/TeamTestV2Api";

export interface TeamTestV2ApiV2TeamtestPlaceIdDeleteRequest {
    /**
     * The Id of the place we are setting the metadata for.
     * @type number
     * @memberof TeamTestV2Apiv2TeamtestPlaceIdDelete
     */
    placeId: number
    /**
     * the Guid of the game instance System.Guid
     * @type string
     * @memberof TeamTestV2Apiv2TeamtestPlaceIdDelete
     */
    gameId: string
}

export class ObjectTeamTestV2Api {
    private api: ObservableTeamTestV2Api

    public constructor(configuration: Configuration, requestFactory?: TeamTestV2ApiRequestFactory, responseProcessor?: TeamTestV2ApiResponseProcessor) {
        this.api = new ObservableTeamTestV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Close a game instance that is being used for team testing
     * @param param the request object
     */
    public v2TeamtestPlaceIdDeleteWithHttpInfo(param: TeamTestV2ApiV2TeamtestPlaceIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v2TeamtestPlaceIdDeleteWithHttpInfo(param.placeId, param.gameId,  options).toPromise();
    }

    /**
     * Close a game instance that is being used for team testing
     * @param param the request object
     */
    public v2TeamtestPlaceIdDelete(param: TeamTestV2ApiV2TeamtestPlaceIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v2TeamtestPlaceIdDelete(param.placeId, param.gameId,  options).toPromise();
    }

}

import { ObservableUniverseSettingsApi } from "./ObservableAPI";
import { UniverseSettingsApiRequestFactory, UniverseSettingsApiResponseProcessor} from "../apis/UniverseSettingsApi";

export interface UniverseSettingsApiV2UniversesUniverseIdConfigurationPatchRequest {
    /**
     * The universeId.
     * @type number
     * @memberof UniverseSettingsApiv2UniversesUniverseIdConfigurationPatch
     */
    universeId: number
    /**
     * The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     * @type RobloxApiDevelopModelsUniverseSettingsRequestV2
     * @memberof UniverseSettingsApiv2UniversesUniverseIdConfigurationPatch
     */
    model: RobloxApiDevelopModelsUniverseSettingsRequestV2
}

export class ObjectUniverseSettingsApi {
    private api: ObservableUniverseSettingsApi

    public constructor(configuration: Configuration, requestFactory?: UniverseSettingsApiRequestFactory, responseProcessor?: UniverseSettingsApiResponseProcessor) {
        this.api = new ObservableUniverseSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param param the request object
     */
    public v2UniversesUniverseIdConfigurationPatchWithHttpInfo(param: UniverseSettingsApiV2UniversesUniverseIdConfigurationPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponseV2>> {
        return this.api.v2UniversesUniverseIdConfigurationPatchWithHttpInfo(param.universeId, param.model,  options).toPromise();
    }

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param param the request object
     */
    public v2UniversesUniverseIdConfigurationPatch(param: UniverseSettingsApiV2UniversesUniverseIdConfigurationPatchRequest, options?: Configuration): Promise<RobloxApiDevelopModelsUniverseSettingsResponseV2> {
        return this.api.v2UniversesUniverseIdConfigurationPatch(param.universeId, param.model,  options).toPromise();
    }

}

import { ObservableUniversesApi } from "./ObservableAPI";
import { UniversesApiRequestFactory, UniversesApiResponseProcessor} from "../apis/UniversesApi";

export interface UniversesApiV2UniversesUniverseIdShutdownPostRequest {
    /**
     * The universe id.
     * @type number
     * @memberof UniversesApiv2UniversesUniverseIdShutdownPost
     */
    universeId: number
}

export class ObjectUniversesApi {
    private api: ObservableUniversesApi

    public constructor(configuration: Configuration, requestFactory?: UniversesApiRequestFactory, responseProcessor?: UniversesApiResponseProcessor) {
        this.api = new ObservableUniversesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Shuts down all game instances for a universe.
     * @param param the request object
     */
    public v2UniversesUniverseIdShutdownPostWithHttpInfo(param: UniversesApiV2UniversesUniverseIdShutdownPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v2UniversesUniverseIdShutdownPostWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Shuts down all game instances for a universe.
     * @param param the request object
     */
    public v2UniversesUniverseIdShutdownPost(param: UniversesApiV2UniversesUniverseIdShutdownPostRequest, options?: Configuration): Promise<any> {
        return this.api.v2UniversesUniverseIdShutdownPost(param.universeId,  options).toPromise();
    }

}
