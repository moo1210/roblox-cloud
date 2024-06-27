import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxWebAssetsIAssetResponseItem } from '../models/RobloxWebAssetsIAssetResponseItem';

/**
 * no description
 */
export class AssetFetchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves an asset by its alias (universeID/name)
     * @param alias The alias of the asset to retrieve.
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
    public async v1AliasAliasGet(alias: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'alias' is not null or undefined
        if (alias === null || alias === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "alias");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AliasAliasGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v1/alias/{alias}'
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
    public async v1AssetGet(acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, id?: number, userAssetId?: number, assetVersionId?: number, version?: number, universeId?: number, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: string, assetName?: string, hash?: string, marAssetHash?: string, marCheckSum?: string, expectedAssetType?: string, skipSigningScripts?: boolean, permissionContext?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetGet", "robloxAssetFormat");
        }




















        // Path Params
        const localVarPath = '/v1/asset';

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
     * Retrieves an asset by its hash.
     * @param hash the hash of the asset to retrieve.
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
    public async v1AssetHashHashGet(hash: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'hash' is not null or undefined
        if (hash === null || hash === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "hash");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetHashHashGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v1/assetHash/{hash}'
            .replace('{' + 'hash' + '}', encodeURIComponent(String(hash)));

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
     * Retrieves an asset by its ID
     * @param assetId The ID of the asset to retrieve.
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
    public async v1AssetIdAssetIdGet(assetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "assetId");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdGet", "robloxAssetFormat");
        }










        // Path Params
        const localVarPath = '/v1/assetId/{assetId}'
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
     * Retrieves an asset by its ID and its version.
     * @param assetId the ID of the asset to retrieve.
     * @param version the version of the asset to retrieve.
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
    public async v1AssetIdAssetIdVersionVersionGet(assetId: number, version: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, doNotFallbackToBaselineRepresentation?: boolean, contentRepresentationPriorityList?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "assetId");
        }


        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "version");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetIdAssetIdVersionVersionGet", "robloxAssetFormat");
        }










        // Path Params
        const localVarPath = '/v1/assetId/{assetId}/version/{version}'
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
    public async v1AssetVersionIdAssetVersionIdGet(assetVersionId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetVersionId' is not null or undefined
        if (assetVersionId === null || assetVersionId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "assetVersionId");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1AssetVersionIdAssetVersionIdGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v1/assetVersionId/{assetVersionId}'
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
     * Retrieves an asset by its mar (moderation agnostic) hash and mar (moderation agnostic) checksum.
     * @param marAssetHash The mar (moderation agnostic) hash of the asset to retrieve.
     * @param marCheckSum The mar (moderation agnostic) checksum of the asset to retrieve.
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
    public async v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet(marAssetHash: string, marCheckSum: string, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'marAssetHash' is not null or undefined
        if (marAssetHash === null || marAssetHash === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "marAssetHash");
        }


        // verify required parameter 'marCheckSum' is not null or undefined
        if (marCheckSum === null || marCheckSum === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "marCheckSum");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v1/marAssetHash/{marAssetHash}/marCheckSum/{marCheckSum}'
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
    public async v1UserAssetIdUserAssetIdGet(userAssetId: number, acceptEncoding: string, robloxPlaceId: number, assetType: string, accept: string, assetFormat: string, robloxAssetFormat: string, skipSigningScripts?: boolean, clientInsert?: number, scriptinsert?: number, modulePlaceId?: number, serverplaceid?: number, expectedAssetType?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userAssetId' is not null or undefined
        if (userAssetId === null || userAssetId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "userAssetId");
        }


        // verify required parameter 'acceptEncoding' is not null or undefined
        if (acceptEncoding === null || acceptEncoding === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "acceptEncoding");
        }


        // verify required parameter 'robloxPlaceId' is not null or undefined
        if (robloxPlaceId === null || robloxPlaceId === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "robloxPlaceId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "assetType");
        }


        // verify required parameter 'accept' is not null or undefined
        if (accept === null || accept === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "accept");
        }


        // verify required parameter 'assetFormat' is not null or undefined
        if (assetFormat === null || assetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "assetFormat");
        }


        // verify required parameter 'robloxAssetFormat' is not null or undefined
        if (robloxAssetFormat === null || robloxAssetFormat === undefined) {
            throw new RequiredError("AssetFetchApi", "v1UserAssetIdUserAssetIdGet", "robloxAssetFormat");
        }








        // Path Params
        const localVarPath = '/v1/userAssetId/{userAssetId}'
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

export class AssetFetchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AliasAliasGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AliasAliasGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
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
     * @params response Response returned by the server for a request to v1AssetGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AssetHashHashGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetHashHashGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
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
     * @params response Response returned by the server for a request to v1AssetIdAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetIdAssetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
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
     * @params response Response returned by the server for a request to v1AssetIdAssetIdVersionVersionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetIdAssetIdVersionVersionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
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
     * @params response Response returned by the server for a request to v1AssetVersionIdAssetVersionIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AssetVersionIdAssetVersionIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
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
     * @params response Response returned by the server for a request to v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1MarAssetHashMarAssetHashMarCheckSumMarCheckSumGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebAssetsIAssetResponseItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebAssetsIAssetResponseItem", ""
            ) as RobloxWebAssetsIAssetResponseItem;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: invalid server request  3: Encoding cannot be empty", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "5: Asset hash cannot be empty", undefined, response.headers);
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
     * @params response Response returned by the server for a request to v1UserAssetIdUserAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UserAssetIdUserAssetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebAssetsIAssetResponseItem >> {
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

}
