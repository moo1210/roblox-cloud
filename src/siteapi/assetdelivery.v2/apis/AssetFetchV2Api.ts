import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';
import { RobloxWebAssetsIAssetResponseItemV2 } from '../models/RobloxWebAssetsIAssetResponseItemV2';

/**
 * no description
 */
export class AssetFetchV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param alias 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public async v2AliasAliasGet(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'alias' is not null or undefined
        if (alias === null || alias === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "alias");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AliasAliasGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v2/alias/{alias}'
            .replace('{' + 'alias' + '}', encodeURIComponent(String(alias)));

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "number", "int64"));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param id 
     * @param userAssetId 
     * @param assetVersionId 
     * @param version 
     * @param universeId 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param assetName 
     * @param hash 
     * @param marAssetHash 
     * @param marCheckSum 
     * @param expectedAssetType 
     * @param skipSigningScripts 
     * @param permissionContext 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public async v2AssetGet(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetGet", "robloxAssetFormat");
        }




















        // Path Params
        const localVarPath = '/v2/asset';

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", "int64"));
        }

        // Query Params
        if (userAssetId !== undefined) {
            requestContext.setQueryParam("userAssetId", ObjectSerializer.serialize(userAssetId, "number", "int64"));
        }

        // Query Params
        if (assetVersionId !== undefined) {
            requestContext.setQueryParam("assetVersionId", ObjectSerializer.serialize(assetVersionId, "number", "int64"));
        }

        // Query Params
        if (version !== undefined) {
            requestContext.setQueryParam("version", ObjectSerializer.serialize(version, "number", "int32"));
        }

        // Query Params
        if (universeId !== undefined) {
            requestContext.setQueryParam("universeId", ObjectSerializer.serialize(universeId, "number", "int64"));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "string", ""));
        }

        // Query Params
        if (assetName !== undefined) {
            requestContext.setQueryParam("assetName", ObjectSerializer.serialize(assetName, "string", ""));
        }

        // Query Params
        if (hash !== undefined) {
            requestContext.setQueryParam("hash", ObjectSerializer.serialize(hash, "string", ""));
        }

        // Query Params
        if (marAssetHash !== undefined) {
            requestContext.setQueryParam("marAssetHash", ObjectSerializer.serialize(marAssetHash, "string", ""));
        }

        // Query Params
        if (marCheckSum !== undefined) {
            requestContext.setQueryParam("marCheckSum", ObjectSerializer.serialize(marCheckSum, "string", ""));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (permissionContext !== undefined) {
            requestContext.setQueryParam("permissionContext", ObjectSerializer.serialize(permissionContext, "string", ""));
        }

        // Query Params
        if (doNotFallbackToBaselineRepresentation !== undefined) {
            requestContext.setQueryParam("doNotFallbackToBaselineRepresentation", ObjectSerializer.serialize(doNotFallbackToBaselineRepresentation, "boolean", ""));
        }

        // Query Params
        if (contentRepresentationPriorityList !== undefined) {
            requestContext.setQueryParam("contentRepresentationPriorityList", ObjectSerializer.serialize(contentRepresentationPriorityList, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param assetId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public async v2AssetIdAssetIdGet(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "assetId");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdGet", "robloxAssetFormat");
        }










        // Path Params
        const localVarPath = '/v2/assetId/{assetId}'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "number", "int64"));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Query Params
        if (doNotFallbackToBaselineRepresentation !== undefined) {
            requestContext.setQueryParam("doNotFallbackToBaselineRepresentation", ObjectSerializer.serialize(doNotFallbackToBaselineRepresentation, "boolean", ""));
        }

        // Query Params
        if (contentRepresentationPriorityList !== undefined) {
            requestContext.setQueryParam("contentRepresentationPriorityList", ObjectSerializer.serialize(contentRepresentationPriorityList, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param assetId 
     * @param version 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     * @param doNotFallbackToBaselineRepresentation 
     * @param contentRepresentationPriorityList 
     */
    public async v2AssetIdAssetIdVersionVersionGet(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "assetId");
        }


        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "version");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetIdAssetIdVersionVersionGet", "robloxAssetFormat");
        }










        // Path Params
        const localVarPath = '/v2/assetId/{assetId}/version/{version}'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)))
            .replace('{' + 'version' + '}', encodeURIComponent(String(version)));

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "number", "int64"));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Query Params
        if (doNotFallbackToBaselineRepresentation !== undefined) {
            requestContext.setQueryParam("doNotFallbackToBaselineRepresentation", ObjectSerializer.serialize(doNotFallbackToBaselineRepresentation, "boolean", ""));
        }

        // Query Params
        if (contentRepresentationPriorityList !== undefined) {
            requestContext.setQueryParam("contentRepresentationPriorityList", ObjectSerializer.serialize(contentRepresentationPriorityList, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param assetVersionId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public async v2AssetVersionIdAssetVersionIdGet(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetVersionId' is not null or undefined
        if (assetVersionId === null || assetVersionId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "assetVersionId");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2AssetVersionIdAssetVersionIdGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v2/assetVersionId/{assetVersionId}'
            .replace('{' + 'assetVersionId' + '}', encodeURIComponent(String(assetVersionId)));

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "number", "int64"));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param marAssetHash 
     * @param marCheckSum 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public async v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marAssetHash' is not null or undefined
        if (marAssetHash === null || marAssetHash === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "marAssetHash");
        }


        // verify required parameter 'marCheckSum' is not null or undefined
        if (marCheckSum === null || marCheckSum === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "marCheckSum");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v2/marAssetHash/{marAssetHash}/marCheckSum/{marCheckSum}'
            .replace('{' + 'marAssetHash' + '}', encodeURIComponent(String(marAssetHash)))
            .replace('{' + 'marCheckSum' + '}', encodeURIComponent(String(marCheckSum)));

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "number", "int64"));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param userAssetId 
     * @param acceptEncoding 
     * @param robloxPlaceId 
     * @param assetType 
     * @param accept 
     * @param assetFormat 
     * @param robloxAssetFormat 
     * @param skipSigningScripts 
     * @param clientInsert 
     * @param scriptinsert 
     * @param modulePlaceId 
     * @param serverplaceid 
     * @param expectedAssetType 
     */
    public async v2UserAssetIdUserAssetIdGet(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userAssetId' is not null or undefined
        if (userAssetId === null || userAssetId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "userAssetId");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchV2Api", "v2UserAssetIdUserAssetIdGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v2/userAssetId/{userAssetId}'
            .replace('{' + 'userAssetId' + '}', encodeURIComponent(String(userAssetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://assetdelivery.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (skipSigningScripts !== undefined) {
            requestContext.setQueryParam("skipSigningScripts", ObjectSerializer.serialize(skipSigningScripts, "boolean", ""));
        }

        // Query Params
        if (clientInsert !== undefined) {
            requestContext.setQueryParam("clientInsert", ObjectSerializer.serialize(clientInsert, "number", "int32"));
        }

        // Query Params
        if (scriptinsert !== undefined) {
            requestContext.setQueryParam("scriptinsert", ObjectSerializer.serialize(scriptinsert, "number", "int32"));
        }

        // Query Params
        if (modulePlaceId !== undefined) {
            requestContext.setQueryParam("modulePlaceId", ObjectSerializer.serialize(modulePlaceId, "number", "int64"));
        }

        // Query Params
        if (serverplaceid !== undefined) {
            requestContext.setQueryParam("serverplaceid", ObjectSerializer.serialize(serverplaceid, "number", "int64"));
        }

        // Query Params
        if (expectedAssetType !== undefined) {
            requestContext.setQueryParam("expectedAssetType", ObjectSerializer.serialize(expectedAssetType, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Accept-Encoding", ObjectSerializer.serialize(acceptEncoding, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));

        // Header Params
        requestContext.setHeaderParam("AssetType", ObjectSerializer.serialize(assetType, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept", ObjectSerializer.serialize(accept, "string", ""));

        // Header Params
        requestContext.setHeaderParam("AssetFormat", ObjectSerializer.serialize(assetFormat, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Roblox-AssetFormat", ObjectSerializer.serialize(robloxAssetFormat, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetFetchV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AliasAliasGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AliasAliasGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AssetGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AssetGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AssetIdAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AssetIdAssetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AssetIdAssetIdVersionVersionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AssetIdAssetIdVersionVersionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2AssetVersionIdAssetVersionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2AssetVersionIdAssetVersionIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItem", ""
            ) as RobloxWebAssetsIAssetResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItem", ""
            ) as RobloxWebAssetsIAssetResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UserAssetIdUserAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UserAssetIdUserAssetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItemV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebAssetsIAssetResponseItemV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItemV2", ""
            ) as RobloxWebAssetsIAssetResponseItemV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
