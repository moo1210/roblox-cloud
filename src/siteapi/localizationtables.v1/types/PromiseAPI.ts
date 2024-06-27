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
import { ObservableAutoLocalizationTableApi } from './ObservableAPI';

import { AutoLocalizationTableApiRequestFactory, AutoLocalizationTableApiResponseProcessor} from "../apis/AutoLocalizationTableApi";
export class PromiseAutoLocalizationTableApi {
    private api: ObservableAutoLocalizationTableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutoLocalizationTableApiRequestFactory,
        responseProcessor?: AutoLocalizationTableApiResponseProcessor
    ) {
        this.api = new ObservableAutoLocalizationTableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generates localization asset of a game.
     * @param gameId The game id.
     */
    public v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(gameId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPostWithHttpInfo(gameId, _options);
        return result.toPromise();
    }

    /**
     * Generates localization asset of a game.
     * @param gameId The game id.
     */
    public v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(gameId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1AutoLocalizationTableGamesGameIdAssetsGenerationRequestPost(gameId, _options);
        return result.toPromise();
    }

    /**
     * Enqueues an event to flush the auto scraped entries which doesn\'t have translations.
     * @param gameId The id of the game.
     * @param request 
     */
    public v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(gameId: number, request: RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPostWithHttpInfo(gameId, request, _options);
        return result.toPromise();
    }

    /**
     * Enqueues an event to flush the auto scraped entries which doesn\'t have translations.
     * @param gameId The id of the game.
     * @param request 
     */
    public v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(gameId: number, request: RobloxLocalizationTablesApiRaiseEventForAutoScrapedEntriesCleanupRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1AutoLocalizationTableGamesGameIdAutoScrapeCleanupRequestPost(gameId, request, _options);
        return result.toPromise();
    }


}



import { ObservableAutolocalizationApi } from './ObservableAPI';

import { AutolocalizationApiRequestFactory, AutolocalizationApiResponseProcessor} from "../apis/AutolocalizationApi";
export class PromiseAutolocalizationApi {
    private api: ObservableAutolocalizationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AutolocalizationApiRequestFactory,
        responseProcessor?: AutolocalizationApiResponseProcessor
    ) {
        this.api = new ObservableAutolocalizationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param gameId 
     * @param request 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePatchWithHttpInfo(gameId, request, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     * @param request 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePatch(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationTableForGameRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePatch(gameId, request, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(gameId: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse>> {
        const result = this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePostWithHttpInfo(gameId, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     */
    public v1AutolocalizationGamesGameIdAutolocalizationtablePost(gameId: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGameAutolocalizationInformationResponse> {
        const result = this.api.v1AutolocalizationGamesGameIdAutolocalizationtablePost(gameId, _options);
        return result.toPromise();
    }

    /**
     * Sets a game\'s auto-localization related settings
     * @param gameId The id of the game.
     * @param request The request body.
     */
    public v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1AutolocalizationGamesGameIdSettingsPatchWithHttpInfo(gameId, request, _options);
        return result.toPromise();
    }

    /**
     * Sets a game\'s auto-localization related settings
     * @param gameId The id of the game.
     * @param request The request body.
     */
    public v1AutolocalizationGamesGameIdSettingsPatch(gameId: number, request: RobloxLocalizationTablesApiSetAutolocalizationSettingsForGameRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1AutolocalizationGamesGameIdSettingsPatch(gameId, request, _options);
        return result.toPromise();
    }

    /**
     * Metadata for AutoLocalization Configuration
     */
    public v1AutolocalizationMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse>> {
        const result = this.api.v1AutolocalizationMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Metadata for AutoLocalization Configuration
     */
    public v1AutolocalizationMetadataGet(_options?: Configuration): Promise<RobloxLocalizationTablesApiAutoLocalizationMetadataResponse> {
        const result = this.api.v1AutolocalizationMetadataGet(_options);
        return result.toPromise();
    }


}



import { ObservableLocalizationTableApi } from './ObservableAPI';

import { LocalizationTableApiRequestFactory, LocalizationTableApiResponseProcessor} from "../apis/LocalizationTableApi";
export class PromiseLocalizationTableApi {
    private api: ObservableLocalizationTableApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocalizationTableApiRequestFactory,
        responseProcessor?: LocalizationTableApiResponseProcessor
    ) {
        this.api = new ObservableLocalizationTableApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the supported language codes that can be used by localization tables.
     */
    public v1LocalizationTableAvailableLanguagesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage>> {
        const result = this.api.v1LocalizationTableAvailableLanguagesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the supported language codes that can be used by localization tables.
     */
    public v1LocalizationTableAvailableLanguagesGet(_options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage> {
        const result = this.api.v1LocalizationTableAvailableLanguagesGet(_options);
        return result.toPromise();
    }

    /**
     * Get limits for translation table entries operations
     */
    public v1LocalizationTableLimitsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetLimitsResponse>> {
        const result = this.api.v1LocalizationTableLimitsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get limits for translation table entries operations
     */
    public v1LocalizationTableLimitsGet(_options?: Configuration): Promise<RobloxLocalizationTablesApiGetLimitsResponse> {
        const result = this.api.v1LocalizationTableLimitsGet(_options);
        return result.toPromise();
    }

    /**
     * Get metadata for localization UI
     */
    public v1LocalizationTableMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse>> {
        const result = this.api.v1LocalizationTableMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get metadata for localization UI
     */
    public v1LocalizationTableMetadataGet(_options?: Configuration): Promise<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse> {
        const result = this.api.v1LocalizationTableMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Get table information by the assetId of the table.
     * @param assetId The asset id associated with the table.
     */
    public v1LocalizationTableTablesAssetIdGetWithHttpInfo(assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableResponse>> {
        const result = this.api.v1LocalizationTableTablesAssetIdGetWithHttpInfo(assetId, _options);
        return result.toPromise();
    }

    /**
     * Get table information by the assetId of the table.
     * @param assetId The asset id associated with the table.
     */
    public v1LocalizationTableTablesAssetIdGet(assetId: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableResponse> {
        const result = this.api.v1LocalizationTableTablesAssetIdGet(assetId, _options);
        return result.toPromise();
    }

    /**
     * Creates a Localization Table with the given data.
     * @param request 
     */
    public v1LocalizationTableTablesPostWithHttpInfo(request: RobloxLocalizationTablesApiCreateTableRequest, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiCreateTableResponse>> {
        const result = this.api.v1LocalizationTableTablesPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a Localization Table with the given data.
     * @param request 
     */
    public v1LocalizationTableTablesPost(request: RobloxLocalizationTablesApiCreateTableRequest, _options?: Configuration): Promise<RobloxLocalizationTablesApiCreateTableResponse> {
        const result = this.api.v1LocalizationTableTablesPost(request, _options);
        return result.toPromise();
    }

    /**
     * Gets a batch of entries for a table.
     * @param tableId 
     * @param cursor If null, there are no more entries in the table and you\&#39;ve reached the last page.
     * @param gameId 
     */
    public v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(tableId: string, cursor?: string, gameId?: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesPagedResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(tableId, cursor, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets a batch of entries for a table.
     * @param tableId 
     * @param cursor If null, there are no more entries in the table and you\&#39;ve reached the last page.
     * @param gameId 
     */
    public v1LocalizationTableTablesTableIdEntriesGet(tableId: string, cursor?: string, gameId?: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntriesPagedResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdEntriesGet(tableId, cursor, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry translation feedback lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest, gameId?: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(tableId, request, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry translation feedback lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest, gameId?: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(tableId, request, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the translation history for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry history lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest, gameId?: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(tableId, request, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the translation history for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry history lookup.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest, gameId?: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(tableId, request, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the number of entries in the specified table
     * @param tableId The table id
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(tableId: string, gameId?: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntryCountResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(tableId, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the number of entries in the specified table
     * @param tableId The table id
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdEntryCountGet(tableId: string, gameId?: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableEntryCountResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdEntryCountGet(tableId, gameId, _options);
        return result.toPromise();
    }

    /**
     * Get table information by the id of the table.
     * @param tableId 
     */
    public v1LocalizationTableTablesTableIdGetWithHttpInfo(tableId: string, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdGetWithHttpInfo(tableId, _options);
        return result.toPromise();
    }

    /**
     * Get table information by the id of the table.
     * @param tableId 
     */
    public v1LocalizationTableTablesTableIdGet(tableId: string, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetTableResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdGet(tableId, _options);
        return result.toPromise();
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param tableId The table id
     * @param locales The locales corresponding to the language translation counts to retrieve. This will return 0 for the translation count of locales that do not exist for the given table.
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(tableId: string, locales: Array<string>, gameId?: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(tableId, locales, gameId, _options);
        return result.toPromise();
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param tableId The table id
     * @param locales The locales corresponding to the language translation counts to retrieve. This will return 0 for the translation count of locales that do not exist for the given table.
     * @param gameId The game id
     */
    public v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(tableId: string, locales: Array<string>, gameId?: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(tableId, locales, gameId, _options);
        return result.toPromise();
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param tableId The table guid for the table to update.
     * @param request The metadata object is optional.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdPatchWithHttpInfo(tableId: string, request: RobloxLocalizationTablesApiUpdateTableContentsRequest, gameId?: number, _options?: Configuration): Promise<HttpInfo<RobloxLocalizationTablesApiUpdateTableContentsResponse>> {
        const result = this.api.v1LocalizationTableTablesTableIdPatchWithHttpInfo(tableId, request, gameId, _options);
        return result.toPromise();
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param tableId The table guid for the table to update.
     * @param request The metadata object is optional.
     * @param gameId The game id.
     */
    public v1LocalizationTableTablesTableIdPatch(tableId: string, request: RobloxLocalizationTablesApiUpdateTableContentsRequest, gameId?: number, _options?: Configuration): Promise<RobloxLocalizationTablesApiUpdateTableContentsResponse> {
        const result = this.api.v1LocalizationTableTablesTableIdPatch(tableId, request, gameId, _options);
        return result.toPromise();
    }


}



