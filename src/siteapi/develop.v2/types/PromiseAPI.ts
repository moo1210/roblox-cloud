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
import { ObservableAssetsV2Api } from './ObservableAPI';

import { AssetsV2ApiRequestFactory, AssetsV2ApiResponseProcessor} from "../apis/AssetsV2Api";
export class PromiseAssetsV2Api {
    private api: ObservableAssetsV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsV2ApiRequestFactory,
        responseProcessor?: AssetsV2ApiResponseProcessor
    ) {
        this.api = new ObservableAssetsV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param id The ID of the asset.Roblox.Platform.Assets.IAsset
     * @param robloxPlaceId The ID of the place.Roblox.Platform.Assets.IPlace
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sort by version number, default is desc.
     */
    public v2AssetsIdVersionsGetWithHttpInfo(id: number, robloxPlaceId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion>> {
        const result = this.api.v2AssetsIdVersionsGetWithHttpInfo(id, robloxPlaceId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param id The ID of the asset.Roblox.Platform.Assets.IAsset
     * @param robloxPlaceId The ID of the place.Roblox.Platform.Assets.IPlace
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sort by version number, default is desc.
     */
    public v2AssetsIdVersionsGet(id: number, robloxPlaceId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion> {
        const result = this.api.v2AssetsIdVersionsGet(id, robloxPlaceId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservablePlacesV2Api } from './ObservableAPI';

import { PlacesV2ApiRequestFactory, PlacesV2ApiResponseProcessor} from "../apis/PlacesV2Api";
export class PromisePlacesV2Api {
    private api: ObservablePlacesV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: PlacesV2ApiRequestFactory,
        responseProcessor?: PlacesV2ApiResponseProcessor
    ) {
        this.api = new ObservablePlacesV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     */
    public v2PlacesPlaceIdGetWithHttpInfo(placeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModelV2>> {
        const result = this.api.v2PlacesPlaceIdGetWithHttpInfo(placeId, _options);
        return result.toPromise();
    }

    /**
     * Gets the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     */
    public v2PlacesPlaceIdGet(placeId: number, _options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModelV2> {
        const result = this.api.v2PlacesPlaceIdGet(placeId, _options);
        return result.toPromise();
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v2PlacesPlaceIdPatchWithHttpInfo(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModelV2, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModelV2>> {
        const result = this.api.v2PlacesPlaceIdPatchWithHttpInfo(placeId, configuration, _options);
        return result.toPromise();
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v2PlacesPlaceIdPatch(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModelV2, _options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModelV2> {
        const result = this.api.v2PlacesPlaceIdPatch(placeId, configuration, _options);
        return result.toPromise();
    }


}



import { ObservableTeamTestV2Api } from './ObservableAPI';

import { TeamTestV2ApiRequestFactory, TeamTestV2ApiResponseProcessor} from "../apis/TeamTestV2Api";
export class PromiseTeamTestV2Api {
    private api: ObservableTeamTestV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamTestV2ApiRequestFactory,
        responseProcessor?: TeamTestV2ApiResponseProcessor
    ) {
        this.api = new ObservableTeamTestV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Close a game instance that is being used for team testing
     * @param placeId The Id of the place we are setting the metadata for.
     * @param gameId the Guid of the game instance System.Guid
     */
    public v2TeamtestPlaceIdDeleteWithHttpInfo(placeId: number, gameId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v2TeamtestPlaceIdDeleteWithHttpInfo(placeId, gameId, _options);
        return result.toPromise();
    }

    /**
     * Close a game instance that is being used for team testing
     * @param placeId The Id of the place we are setting the metadata for.
     * @param gameId the Guid of the game instance System.Guid
     */
    public v2TeamtestPlaceIdDelete(placeId: number, gameId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v2TeamtestPlaceIdDelete(placeId, gameId, _options);
        return result.toPromise();
    }


}



import { ObservableUniverseSettingsApi } from './ObservableAPI';

import { UniverseSettingsApiRequestFactory, UniverseSettingsApiResponseProcessor} from "../apis/UniverseSettingsApi";
export class PromiseUniverseSettingsApi {
    private api: ObservableUniverseSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UniverseSettingsApiRequestFactory,
        responseProcessor?: UniverseSettingsApiResponseProcessor
    ) {
        this.api = new ObservableUniverseSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v2UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequestV2, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponseV2>> {
        const result = this.api.v2UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId, model, _options);
        return result.toPromise();
    }

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v2UniversesUniverseIdConfigurationPatch(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequestV2, _options?: Configuration): Promise<RobloxApiDevelopModelsUniverseSettingsResponseV2> {
        const result = this.api.v2UniversesUniverseIdConfigurationPatch(universeId, model, _options);
        return result.toPromise();
    }


}



import { ObservableUniversesApi } from './ObservableAPI';

import { UniversesApiRequestFactory, UniversesApiResponseProcessor} from "../apis/UniversesApi";
export class PromiseUniversesApi {
    private api: ObservableUniversesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UniversesApiRequestFactory,
        responseProcessor?: UniversesApiResponseProcessor
    ) {
        this.api = new ObservableUniversesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Shuts down all game instances for a universe.
     * @param universeId The universe id.
     */
    public v2UniversesUniverseIdShutdownPostWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v2UniversesUniverseIdShutdownPostWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Shuts down all game instances for a universe.
     * @param universeId The universe id.
     */
    public v2UniversesUniverseIdShutdownPost(universeId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v2UniversesUniverseIdShutdownPost(universeId, _options);
        return result.toPromise();
    }


}



