import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxInGameContentTablesClientGameLocation } from '../models/RobloxInGameContentTablesClientGameLocation';
import { RobloxLocalizationTablesApiAutoLocalizationMetadataResponse } from '../models/RobloxLocalizationTablesApiAutoLocalizationMetadataResponse';
import { RobloxLocalizationTablesApiCreateTableRequest } from '../models/RobloxLocalizationTablesApiCreateTableRequest';
import { RobloxLocalizationTablesApiCreateTableResponse } from '../models/RobloxLocalizationTablesApiCreateTableResponse';
import { RobloxLocalizationTablesApiCursorEntryIdentifier } from '../models/RobloxLocalizationTablesApiCursorEntryIdentifier';
import { RobloxLocalizationTablesApiEntry } from '../models/RobloxLocalizationTablesApiEntry';
import { RobloxLocalizationTablesApiEntryIdentifier } from '../models/RobloxLocalizationTablesApiEntryIdentifier';
import { RobloxLocalizationTablesApiEntryIdentifierWithTranslation } from '../models/RobloxLocalizationTablesApiEntryIdentifierWithTranslation';
import { RobloxLocalizationTablesApiEntryMetadata } from '../models/RobloxLocalizationTablesApiEntryMetadata';
import { RobloxLocalizationTablesApiEntryOperationLimits } from '../models/RobloxLocalizationTablesApiEntryOperationLimits';
import { RobloxLocalizationTablesApiEntryTranslationFeedback } from '../models/RobloxLocalizationTablesApiEntryTranslationFeedback';
import { RobloxLocalizationTablesApiEntryTranslationHistoryPaged } from '../models/RobloxLocalizationTablesApiEntryTranslationHistoryPaged';
import { RobloxLocalizationTablesApiError } from '../models/RobloxLocalizationTablesApiError';
import { RobloxLocalizationTablesApiFailedEntry } from '../models/RobloxLocalizationTablesApiFailedEntry';
import { RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged } from '../models/RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged';
import { RobloxLocalizationTablesApiGameAutolocalizationInformationResponse } from '../models/RobloxLocalizationTablesApiGameAutolocalizationInformationResponse';
import { RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse } from '../models/RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse';
import { RobloxLocalizationTablesApiGetLimitsResponse } from '../models/RobloxLocalizationTablesApiGetLimitsResponse';
import { RobloxLocalizationTablesApiGetTableEntriesPagedResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesPagedResponse';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse';
import { RobloxLocalizationTablesApiGetTableEntryCountResponse } from '../models/RobloxLocalizationTablesApiGetTableEntryCountResponse';
import { RobloxLocalizationTablesApiGetTableResponse } from '../models/RobloxLocalizationTablesApiGetTableResponse';
import { RobloxLocalizationTablesApiLanguage } from '../models/RobloxLocalizationTablesApiLanguage';
import { RobloxLocalizationTablesApiLanguageTranslationCount } from '../models/RobloxLocalizationTablesApiLanguageTranslationCount';
import { RobloxLocalizationTablesApiLocalizationTablesMetadataResponse } from '../models/RobloxLocalizationTablesApiLocalizationTablesMetadataResponse';
import { RobloxLocalizationTablesApiModifiedEntry } from '../models/RobloxLocalizationTablesApiModifiedEntry';
import { RobloxLocalizationTablesApiPatchEntry } from '../models/RobloxLocalizationTablesApiPatchEntry';
import { RobloxLocalizationTablesApiPatchTranslation } from '../models/RobloxLocalizationTablesApiPatchTranslation';
import { RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest } from '../models/RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest';
import { RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest } from '../models/RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest';
import { RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest } from '../models/RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest';
import { RobloxLocalizationTablesApiTableOperationLimits } from '../models/RobloxLocalizationTablesApiTableOperationLimits';
import { RobloxLocalizationTablesApiTranslation } from '../models/RobloxLocalizationTablesApiTranslation';
import { RobloxLocalizationTablesApiTranslationHistory } from '../models/RobloxLocalizationTablesApiTranslationHistory';
import { RobloxLocalizationTablesApiTranslator } from '../models/RobloxLocalizationTablesApiTranslator';
import { RobloxLocalizationTablesApiUpdateTableContentsRequest } from '../models/RobloxLocalizationTablesApiUpdateTableContentsRequest';
import { RobloxLocalizationTablesApiUpdateTableContentsResponse } from '../models/RobloxLocalizationTablesApiUpdateTableContentsResponse';
import { RobloxLocalizationtablesLocalizationtablesV1ChangeAgent } from '../models/RobloxLocalizationtablesLocalizationtablesV1ChangeAgent';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage';

import { ObservableAutoLocalizationTableApi } from "./ObservableAPI";
import { AutoLocalizationTableApiRequestFactory, AutoLocalizationTableApiResponseProcessor} from "../apis/AutoLocalizationTableApi";

export interface AutoLocalizationTableApiV1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostRequest {
    /**
     * The game id.
     * @type number
     * @memberof AutoLocalizationTableApiv1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost
     */
    gameId: number
}

export interface AutoLocalizationTableApiV1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostRequest {
    /**
     * The id of the game.
     * @type number
     * @memberof AutoLocalizationTableApiv1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost
     */
    gameId: number
    /**
     * 
     * @type RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest
     * @memberof AutoLocalizationTableApiv1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost
     */
    request: RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest
}

export class ObjectAutoLocalizationTableApi {
    private api: ObservableAutoLocalizationTableApi

    public constructor(configuration: Configuration, requestFactory?: AutoLocalizationTableApiRequestFactory, responseProcessor?: AutoLocalizationTableApiResponseProcessor) {
        this.api = new ObservableAutoLocalizationTableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates localization asset of a game.
     * @param param the request object
     */
    public v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(param: AutoLocalizationTableApiV1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(param.gameId,  options).toPromise();
    }

    /**
     * Generates localization asset of a game.
     * @param param the request object
     */
    public v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(param: AutoLocalizationTableApiV1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(param.gameId,  options).toPromise();
    }

    /**
     * Enqueues an event to flush the auto scraped entries which doesn\'t have translations.
     * @param param the request object
     */
    public v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(param: AutoLocalizationTableApiV1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(param.gameId, param.request,  options).toPromise();
    }

    /**
     * Enqueues an event to flush the auto scraped entries which doesn\'t have translations.
     * @param param the request object
     */
    public v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(param: AutoLocalizationTableApiV1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(param.gameId, param.request,  options).toPromise();
    }

}

import { ObservableAutolocalizationApi } from "./ObservableAPI";
import { AutolocalizationApiRequestFactory, AutolocalizationApiResponseProcessor} from "../apis/AutolocalizationApi";

export interface AutolocalizationApiV1AutolocalizationGamesGameIdAutolocalizationtablePatchRequest {
    /**
     * 
     * @type number
     * @memberof AutolocalizationApiv1AutolocalizationGamesGameIdAutolocalizationtablePatch
     */
    gameId: number
    /**
     * 
     * @type RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest
     * @memberof AutolocalizationApiv1AutolocalizationGamesGameIdAutolocalizationtablePatch
     */
    request: RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest
}

export interface AutolocalizationApiV1AutolocalizationGamesGameIdAutolocalizationtablePostRequest {
    /**
     * 
     * @type number
     * @memberof AutolocalizationApiv1AutolocalizationGamesGameIdAutolocalizationtablePost
     */
    gameId: number
}

export interface AutolocalizationApiV1AutolocalizationGamesGameIdSettingsPatchRequest {
    /**
     * The id of the game.
     * @type number
     * @memberof AutolocalizationApiv1AutolocalizationGamesGameIdSettingsPatch
     */
    gameId: number
    /**
     * The request body.
     * @type RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest
     * @memberof AutolocalizationApiv1AutolocalizationGamesGameIdSettingsPatch
     */
    request: RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest
}

export interface AutolocalizationApiV1AutolocalizationMetadataGetRequest {
}

export class ObjectAutolocalizationApi {
    private api: ObservableAutolocalizationApi

    public constructor(configuration: Configuration, requestFactory?: AutolocalizationApiRequestFactory, responseProcessor?: AutolocalizationApiResponseProcessor) {
        this.api = new ObservableAutolocalizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(param: AutolocalizationApiV1AutolocalizationGamesGameIdAutolocalizationtablePatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(param.gameId, param.request,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePatch(param: AutolocalizationApiV1AutolocalizationGamesGameIdAutolocalizationtablePatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePatch(param.gameId, param.request,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(param: AutolocalizationApiV1AutolocalizationGamesGameIdAutolocalizationtablePostRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse>> {
        return this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(param.gameId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePost(param: AutolocalizationApiV1AutolocalizationGamesGameIdAutolocalizationtablePostRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse> {
        return this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePost(param.gameId,  options).toPromise();
    }

    /**
     * Sets a game\'s auto-localization related settings
     * @param param the request object
     */
    public v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(param: AutolocalizationApiV1AutolocalizationGamesGameIdSettingsPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(param.gameId, param.request,  options).toPromise();
    }

    /**
     * Sets a game\'s auto-localization related settings
     * @param param the request object
     */
    public v1AutolocalizationGamesGameIdSettingsPatch(param: AutolocalizationApiV1AutolocalizationGamesGameIdSettingsPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1AutolocalizationGamesGameIdSettingsPatch(param.gameId, param.request,  options).toPromise();
    }

    /**
     * Metadata for AutoLocalization Configuration
     * @param param the request object
     */
    public v1AutolocalizationMetadataGetWithHttpInfo(param: AutolocalizationApiV1AutolocalizationMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse>> {
        return this.api.v1AutolocalizationMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Metadata for AutoLocalization Configuration
     * @param param the request object
     */
    public v1AutolocalizationMetadataGet(param: AutolocalizationApiV1AutolocalizationMetadataGetRequest = {}, options?: Configuration): Promise<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse> {
        return this.api.v1AutolocalizationMetadataGet( options).toPromise();
    }

}

import { ObservableLocalizationTableApi } from "./ObservableAPI";
import { LocalizationTableApiRequestFactory, LocalizationTableApiResponseProcessor} from "../apis/LocalizationTableApi";

export interface LocalizationTableApiV1LocalizationTableAvailableLanguagesGetRequest {
}

export interface LocalizationTableApiV1LocalizationTableLimitsGetRequest {
}

export interface LocalizationTableApiV1LocalizationTableMetadataGetRequest {
}

export interface LocalizationTableApiV1LocalizationTableTablesAssetIdGetRequest {
    /**
     * The asset id associated with the table.
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesAssetIdGet
     */
    assetId: number
}

export interface LocalizationTableApiV1LocalizationTableTablesPostRequest {
    /**
     * 
     * @type RobloxLocalizationTablesApiCreateTableRequest
     * @memberof LocalizationTableApiv1LocalizationTableTablesPost
     */
    request: RobloxLocalizationTablesApiCreateTableRequest
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdEntriesGetRequest {
    /**
     * 
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesGet
     */
    tableId: string
    /**
     * If null, there are no more entries in the table and you\&#39;ve reached the last page.
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesGet
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesGet
     */
    gameId?: number
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostRequest {
    /**
     * The entries\&#39; tableId.
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost
     */
    tableId: string
    /**
     * A request body containing all relevant data for entry translation feedback lookup.
     * @type RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost
     */
    request: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest
    /**
     * The game id.
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost
     */
    gameId?: number
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdEntriesTranslationHistoryPostRequest {
    /**
     * The entries\&#39; tableId.
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesTranslationHistoryPost
     */
    tableId: string
    /**
     * A request body containing all relevant data for entry history lookup.
     * @type RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesTranslationHistoryPost
     */
    request: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest
    /**
     * The game id.
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntriesTranslationHistoryPost
     */
    gameId?: number
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdEntryCountGetRequest {
    /**
     * The table id
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntryCountGet
     */
    tableId: string
    /**
     * The game id
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdEntryCountGet
     */
    gameId?: number
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdGetRequest {
    /**
     * 
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdGet
     */
    tableId: string
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdLanguageTranslationCountsGetRequest {
    /**
     * The table id
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdLanguageTranslationCountsGet
     */
    tableId: string
    /**
     * The locales corresponding to the language translation counts to retrieve. This will return 0 for the translation count of locales that do not exist for the given table.
     * @type Array&lt;string&gt;
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdLanguageTranslationCountsGet
     */
    locales: Array<string>
    /**
     * The game id
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdLanguageTranslationCountsGet
     */
    gameId?: number
}

export interface LocalizationTableApiV1LocalizationTableTablesTableIdPatchRequest {
    /**
     * The table guid for the table to update.
     * @type string
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdPatch
     */
    tableId: string
    /**
     * The metadata object is optional.
     * @type RobloxLocalizationTablesApiUpdateTableContentsRequest
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdPatch
     */
    request: RobloxLocalizationTablesApiUpdateTableContentsRequest
    /**
     * The game id.
     * @type number
     * @memberof LocalizationTableApiv1LocalizationTableTablesTableIdPatch
     */
    gameId?: number
}

export class ObjectLocalizationTableApi {
    private api: ObservableLocalizationTableApi

    public constructor(configuration: Configuration, requestFactory?: LocalizationTableApiRequestFactory, responseProcessor?: LocalizationTableApiResponseProcessor) {
        this.api = new ObservableLocalizationTableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the supported language codes that can be used by localization tables.
     * @param param the request object
     */
    public v1LocalizationTableAvailableLanguagesGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableAvailableLanguagesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage>> {
        return this.api.v1LocalizationTableAvailableLanguagesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the supported language codes that can be used by localization tables.
     * @param param the request object
     */
    public v1LocalizationTableAvailableLanguagesGet(param: LocalizationTableApiV1LocalizationTableAvailableLanguagesGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage> {
        return this.api.v1LocalizationTableAvailableLanguagesGet( options).toPromise();
    }

    /**
     * Get limits for translation table entries operations
     * @param param the request object
     */
    public v1LocalizationTableLimitsGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableLimitsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetLimitsResponse>> {
        return this.api.v1LocalizationTableLimitsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get limits for translation table entries operations
     * @param param the request object
     */
    public v1LocalizationTableLimitsGet(param: LocalizationTableApiV1LocalizationTableLimitsGetRequest = {}, options?: Configuration): Promise<RobloxLocalizationTablesApiGetLimitsResponse> {
        return this.api.v1LocalizationTableLimitsGet( options).toPromise();
    }

    /**
     * Get metadata for localization UI
     * @param param the request object
     */
    public v1LocalizationTableMetadataGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse>> {
        return this.api.v1LocalizationTableMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get metadata for localization UI
     * @param param the request object
     */
    public v1LocalizationTableMetadataGet(param: LocalizationTableApiV1LocalizationTableMetadataGetRequest = {}, options?: Configuration): Promise<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse> {
        return this.api.v1LocalizationTableMetadataGet( options).toPromise();
    }

    /**
     * Get table information by the assetId of the table.
     * @param param the request object
     */
    public v1LocalizationTableTablesAssetIdGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesAssetIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableResponse>> {
        return this.api.v1LocalizationTableTablesAssetIdGetWithHttpInfo(param.assetId,  options).toPromise();
    }

    /**
     * Get table information by the assetId of the table.
     * @param param the request object
     */
    public v1LocalizationTableTablesAssetIdGet(param: LocalizationTableApiV1LocalizationTableTablesAssetIdGetRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableResponse> {
        return this.api.v1LocalizationTableTablesAssetIdGet(param.assetId,  options).toPromise();
    }

    /**
     * Creates a Localization Table with the given data.
     * @param param the request object
     */
    public v1LocalizationTableTablesPostWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesPostRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiCreateTableResponse>> {
        return this.api.v1LocalizationTableTablesPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Creates a Localization Table with the given data.
     * @param param the request object
     */
    public v1LocalizationTableTablesPost(param: LocalizationTableApiV1LocalizationTableTablesPostRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiCreateTableResponse> {
        return this.api.v1LocalizationTableTablesPost(param.request,  options).toPromise();
    }

    /**
     * Gets a batch of entries for a table.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntriesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesPagedResponse>> {
        return this.api.v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(param.tableId, param.cursor, param.gameId,  options).toPromise();
    }

    /**
     * Gets a batch of entries for a table.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntriesGet(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntriesGetRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntriesPagedResponse> {
        return this.api.v1LocalizationTableTablesTableIdEntriesGet(param.tableId, param.cursor, param.gameId,  options).toPromise();
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse>> {
        return this.api.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(param.tableId, param.request, param.gameId,  options).toPromise();
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse> {
        return this.api.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(param.tableId, param.request, param.gameId,  options).toPromise();
    }

    /**
     * Gets the translation history for each entry passed in.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntriesTranslationHistoryPostRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse>> {
        return this.api.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(param.tableId, param.request, param.gameId,  options).toPromise();
    }

    /**
     * Gets the translation history for each entry passed in.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntriesTranslationHistoryPostRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse> {
        return this.api.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(param.tableId, param.request, param.gameId,  options).toPromise();
    }

    /**
     * Gets the number of entries in the specified table
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntryCountGetRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntryCountResponse>> {
        return this.api.v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(param.tableId, param.gameId,  options).toPromise();
    }

    /**
     * Gets the number of entries in the specified table
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdEntryCountGet(param: LocalizationTableApiV1LocalizationTableTablesTableIdEntryCountGetRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntryCountResponse> {
        return this.api.v1LocalizationTableTablesTableIdEntryCountGet(param.tableId, param.gameId,  options).toPromise();
    }

    /**
     * Get table information by the id of the table.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableResponse>> {
        return this.api.v1LocalizationTableTablesTableIdGetWithHttpInfo(param.tableId,  options).toPromise();
    }

    /**
     * Get table information by the id of the table.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdGet(param: LocalizationTableApiV1LocalizationTableTablesTableIdGetRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableResponse> {
        return this.api.v1LocalizationTableTablesTableIdGet(param.tableId,  options).toPromise();
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdLanguageTranslationCountsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse>> {
        return this.api.v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(param.tableId, param.locales, param.gameId,  options).toPromise();
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(param: LocalizationTableApiV1LocalizationTableTablesTableIdLanguageTranslationCountsGetRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse> {
        return this.api.v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(param.tableId, param.locales, param.gameId,  options).toPromise();
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdPatchWithHttpInfo(param: LocalizationTableApiV1LocalizationTableTablesTableIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiUpdateTableContentsResponse>> {
        return this.api.v1LocalizationTableTablesTableIdPatchWithHttpInfo(param.tableId, param.request, param.gameId,  options).toPromise();
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param param the request object
     */
    public v1LocalizationTableTablesTableIdPatch(param: LocalizationTableApiV1LocalizationTableTablesTableIdPatchRequest, options?: Configuration): Promise<RobloxLocalizationTablesApiUpdateTableContentsResponse> {
        return this.api.v1LocalizationTableTablesTableIdPatch(param.tableId, param.request, param.gameId,  options).toPromise();
    }

}
