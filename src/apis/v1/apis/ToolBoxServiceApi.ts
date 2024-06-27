import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { ToolBoxServiceAssetTypes } from '../models/ToolBoxServiceAssetTypes';
import { ToolBoxServiceError } from '../models/ToolBoxServiceError';
import { ToolBoxServiceSearchV1Result } from '../models/ToolBoxServiceSearchV1Result';
import { ToolboxServiceGetHomePageAssetsForSection200Response } from '../models/ToolboxServiceGetHomePageAssetsForSection200Response';

/**
 * no description
 */
export class ToolBoxServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get group creations
     * @param ownerId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     */
    public async toolboxServiceGetGroupCreations(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'ownerId' is not null or undefined
        if (ownerId === null || ownerId === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetGroupCreations", "ownerId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetGroupCreations", "assetType");
        }




        // Path Params
        const localVarPath = '/v1/creations/groups/{ownerId}/{assetType}'
            .replace('{' + 'ownerId' + '}', encodeURIComponent(String(ownerId)))
            .replace('{' + 'assetType' + '}', encodeURIComponent(String(assetType)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get home page assets for section
     * @param assetType 
     * @param section 
     * @param includeOnlyVerifiedCreators 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     * @param assetsInCameraVicinity 
     * @param assetsInCameraViewport 
     * @param minPriceInCents 
     * @param maxPriceInCents 
     * @param qualityFilter 
     */
    public async toolboxServiceGetHomePageAssetsForSection(assetType: ToolBoxServiceAssetTypes, section: string, includeOnlyVerifiedCreators?: string, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, locale?: string, placeId?: number, developerSegment?: string, assetsInCameraVicinity?: number, assetsInCameraViewport?: number, minPriceInCents?: number, maxPriceInCents?: number, qualityFilter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetHomePageAssetsForSection", "assetType");
        }


        // verify required parameter 'section' is not null or undefined
        if (section === null || section === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetHomePageAssetsForSection", "section");
        }















        // Path Params
        const localVarPath = '/v1/home/{assetType}/section/{section}/assets'
            .replace('{' + 'assetType' + '}', encodeURIComponent(String(assetType)))
            .replace('{' + 'section' + '}', encodeURIComponent(String(section)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (locale !== undefined) {
            requestContext.setQueryParam("locale", ObjectSerializer.serialize(locale, "string", ""));
        }

        // Query Params
        if (placeId !== undefined) {
            requestContext.setQueryParam("placeId", ObjectSerializer.serialize(placeId, "number", "int64"));
        }

        // Query Params
        if (developerSegment !== undefined) {
            requestContext.setQueryParam("developerSegment", ObjectSerializer.serialize(developerSegment, "string", ""));
        }

        // Query Params
        if (assetsInCameraVicinity !== undefined) {
            requestContext.setQueryParam("assetsInCameraVicinity", ObjectSerializer.serialize(assetsInCameraVicinity, "number", ""));
        }

        // Query Params
        if (assetsInCameraViewport !== undefined) {
            requestContext.setQueryParam("assetsInCameraViewport", ObjectSerializer.serialize(assetsInCameraViewport, "number", ""));
        }

        // Query Params
        if (minPriceInCents !== undefined) {
            requestContext.setQueryParam("minPriceInCents", ObjectSerializer.serialize(minPriceInCents, "number", ""));
        }

        // Query Params
        if (maxPriceInCents !== undefined) {
            requestContext.setQueryParam("maxPriceInCents", ObjectSerializer.serialize(maxPriceInCents, "number", ""));
        }

        // Query Params
        if (qualityFilter !== undefined) {
            requestContext.setQueryParam("qualityFilter", ObjectSerializer.serialize(qualityFilter, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get home page configuration for asset type
     * @param assetType 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     */
    public async toolboxServiceGetHomePageConfiguration(assetType: ToolBoxServiceAssetTypes, locale?: string, placeId?: number, developerSegment?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetHomePageConfiguration", "assetType");
        }





        // Path Params
        const localVarPath = '/v1/home/{assetType}/configuration'
            .replace('{' + 'assetType' + '}', encodeURIComponent(String(assetType)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locale !== undefined) {
            requestContext.setQueryParam("locale", ObjectSerializer.serialize(locale, "string", ""));
        }

        // Query Params
        if (placeId !== undefined) {
            requestContext.setQueryParam("placeId", ObjectSerializer.serialize(placeId, "number", "int64"));
        }

        // Query Params
        if (developerSegment !== undefined) {
            requestContext.setQueryParam("developerSegment", ObjectSerializer.serialize(developerSegment, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get user creations
     * @param userId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     * @param separateModelsAndPackages 
     */
    public async toolboxServiceGetUserCreations(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetUserCreations", "userId");
        }


        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceGetUserCreations", "assetType");
        }





        // Path Params
        const localVarPath = '/v1/creations/user/{userId}/{assetType}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
            .replace('{' + 'assetType' + '}', encodeURIComponent(String(assetType)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (separateModelsAndPackages !== undefined) {
            requestContext.setQueryParam("separateModelsAndPackages", ObjectSerializer.serialize(separateModelsAndPackages, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for audios
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public async toolboxServiceSearchAudios(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/v1/audio';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (creatorType !== undefined) {
            requestContext.setQueryParam("creatorType", ObjectSerializer.serialize(creatorType, "string", ""));
        }

        // Query Params
        if (creatorTargetId !== undefined) {
            requestContext.setQueryParam("creatorTargetId", ObjectSerializer.serialize(creatorTargetId, "number", "int64"));
        }

        // Query Params
        if (minDuration !== undefined) {
            requestContext.setQueryParam("minDuration", ObjectSerializer.serialize(minDuration, "number", ""));
        }

        // Query Params
        if (maxDuration !== undefined) {
            requestContext.setQueryParam("maxDuration", ObjectSerializer.serialize(maxDuration, "number", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sortDirection", ObjectSerializer.serialize(sortDirection, "string", ""));
        }

        // Query Params
        if (artist !== undefined) {
            requestContext.setQueryParam("artist", ObjectSerializer.serialize(artist, "string", ""));
        }

        // Query Params
        if (album !== undefined) {
            requestContext.setQueryParam("album", ObjectSerializer.serialize(album, "string", ""));
        }

        // Query Params
        if (uiSortIntent !== undefined) {
            requestContext.setQueryParam("uiSortIntent", ObjectSerializer.serialize(uiSortIntent, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (querySource !== undefined) {
            requestContext.setQueryParam("querySource", ObjectSerializer.serialize(querySource, "string", ""));
        }

        // Query Params
        if (originalUserQuery !== undefined) {
            requestContext.setQueryParam("originalUserQuery", ObjectSerializer.serialize(originalUserQuery, "string", ""));
        }

        // Query Params
        if (originalCorrection !== undefined) {
            requestContext.setQueryParam("originalCorrection", ObjectSerializer.serialize(originalCorrection, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for decals
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public async toolboxServiceSearchDecals(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/v1/decals';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (creatorType !== undefined) {
            requestContext.setQueryParam("creatorType", ObjectSerializer.serialize(creatorType, "string", ""));
        }

        // Query Params
        if (creatorTargetId !== undefined) {
            requestContext.setQueryParam("creatorTargetId", ObjectSerializer.serialize(creatorTargetId, "number", "int64"));
        }

        // Query Params
        if (uiSortIntent !== undefined) {
            requestContext.setQueryParam("uiSortIntent", ObjectSerializer.serialize(uiSortIntent, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (querySource !== undefined) {
            requestContext.setQueryParam("querySource", ObjectSerializer.serialize(querySource, "string", ""));
        }

        // Query Params
        if (originalUserQuery !== undefined) {
            requestContext.setQueryParam("originalUserQuery", ObjectSerializer.serialize(originalUserQuery, "string", ""));
        }

        // Query Params
        if (originalCorrection !== undefined) {
            requestContext.setQueryParam("originalCorrection", ObjectSerializer.serialize(originalCorrection, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for assets
     * @param assetType 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param assetSubTypes 
     * @param excludeAssetSubTypes 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param searchSource 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     * @param qualityFilter 
     * @param robloxPlaceId 
     */
    public async toolboxServiceSearchGetAssets(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetType' is not null or undefined
        if (assetType === null || assetType === undefined) {
            throw new RequiredError("ToolBoxServiceApi", "toolboxServiceSearchGetAssets", "assetType");
        }

























        // Path Params
        const localVarPath = '/v1/marketplace/{assetType}'
            .replace('{' + 'assetType' + '}', encodeURIComponent(String(assetType)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (assetSubTypes !== undefined) {
            requestContext.setQueryParam("assetSubTypes", ObjectSerializer.serialize(assetSubTypes, "string", ""));
        }

        // Query Params
        if (excludeAssetSubTypes !== undefined) {
            requestContext.setQueryParam("excludeAssetSubTypes", ObjectSerializer.serialize(excludeAssetSubTypes, "string", ""));
        }

        // Query Params
        if (creatorType !== undefined) {
            requestContext.setQueryParam("creatorType", ObjectSerializer.serialize(creatorType, "string", ""));
        }

        // Query Params
        if (creatorTargetId !== undefined) {
            requestContext.setQueryParam("creatorTargetId", ObjectSerializer.serialize(creatorTargetId, "number", "int64"));
        }

        // Query Params
        if (minDuration !== undefined) {
            requestContext.setQueryParam("minDuration", ObjectSerializer.serialize(minDuration, "number", ""));
        }

        // Query Params
        if (maxDuration !== undefined) {
            requestContext.setQueryParam("maxDuration", ObjectSerializer.serialize(maxDuration, "number", ""));
        }

        // Query Params
        if (sortDirection !== undefined) {
            requestContext.setQueryParam("sortDirection", ObjectSerializer.serialize(sortDirection, "string", ""));
        }

        // Query Params
        if (artist !== undefined) {
            requestContext.setQueryParam("artist", ObjectSerializer.serialize(artist, "string", ""));
        }

        // Query Params
        if (album !== undefined) {
            requestContext.setQueryParam("album", ObjectSerializer.serialize(album, "string", ""));
        }

        // Query Params
        if (uiSortIntent !== undefined) {
            requestContext.setQueryParam("uiSortIntent", ObjectSerializer.serialize(uiSortIntent, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (searchSource !== undefined) {
            requestContext.setQueryParam("searchSource", ObjectSerializer.serialize(searchSource, "string", ""));
        }

        // Query Params
        if (querySource !== undefined) {
            requestContext.setQueryParam("querySource", ObjectSerializer.serialize(querySource, "string", ""));
        }

        // Query Params
        if (originalUserQuery !== undefined) {
            requestContext.setQueryParam("originalUserQuery", ObjectSerializer.serialize(originalUserQuery, "string", ""));
        }

        // Query Params
        if (originalCorrection !== undefined) {
            requestContext.setQueryParam("originalCorrection", ObjectSerializer.serialize(originalCorrection, "string", ""));
        }

        // Query Params
        if (qualityFilter !== undefined) {
            requestContext.setQueryParam("qualityFilter", ObjectSerializer.serialize(qualityFilter, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Roblox-Place-Id", ObjectSerializer.serialize(robloxPlaceId, "number", "int64"));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for meshes
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public async toolboxServiceSearchMeshes(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/v1/meshes';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (creatorType !== undefined) {
            requestContext.setQueryParam("creatorType", ObjectSerializer.serialize(creatorType, "string", ""));
        }

        // Query Params
        if (creatorTargetId !== undefined) {
            requestContext.setQueryParam("creatorTargetId", ObjectSerializer.serialize(creatorTargetId, "number", "int64"));
        }

        // Query Params
        if (uiSortIntent !== undefined) {
            requestContext.setQueryParam("uiSortIntent", ObjectSerializer.serialize(uiSortIntent, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (querySource !== undefined) {
            requestContext.setQueryParam("querySource", ObjectSerializer.serialize(querySource, "string", ""));
        }

        // Query Params
        if (originalUserQuery !== undefined) {
            requestContext.setQueryParam("originalUserQuery", ObjectSerializer.serialize(originalUserQuery, "string", ""));
        }

        // Query Params
        if (originalCorrection !== undefined) {
            requestContext.setQueryParam("originalCorrection", ObjectSerializer.serialize(originalCorrection, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for plugins
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public async toolboxServiceSearchPlugins(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/v1/plugins';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (creatorType !== undefined) {
            requestContext.setQueryParam("creatorType", ObjectSerializer.serialize(creatorType, "string", ""));
        }

        // Query Params
        if (creatorTargetId !== undefined) {
            requestContext.setQueryParam("creatorTargetId", ObjectSerializer.serialize(creatorTargetId, "number", "int64"));
        }

        // Query Params
        if (uiSortIntent !== undefined) {
            requestContext.setQueryParam("uiSortIntent", ObjectSerializer.serialize(uiSortIntent, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (querySource !== undefined) {
            requestContext.setQueryParam("querySource", ObjectSerializer.serialize(querySource, "string", ""));
        }

        // Query Params
        if (originalUserQuery !== undefined) {
            requestContext.setQueryParam("originalUserQuery", ObjectSerializer.serialize(originalUserQuery, "string", ""));
        }

        // Query Params
        if (originalCorrection !== undefined) {
            requestContext.setQueryParam("originalCorrection", ObjectSerializer.serialize(originalCorrection, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for videos
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public async toolboxServiceSearchVideos(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/v1/videos';

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/toolbox-service').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("pageNumber", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (keyword !== undefined) {
            requestContext.setQueryParam("keyword", ObjectSerializer.serialize(keyword, "string", ""));
        }

        // Query Params
        if (creatorType !== undefined) {
            requestContext.setQueryParam("creatorType", ObjectSerializer.serialize(creatorType, "string", ""));
        }

        // Query Params
        if (creatorTargetId !== undefined) {
            requestContext.setQueryParam("creatorTargetId", ObjectSerializer.serialize(creatorTargetId, "number", "int64"));
        }

        // Query Params
        if (uiSortIntent !== undefined) {
            requestContext.setQueryParam("uiSortIntent", ObjectSerializer.serialize(uiSortIntent, "string", ""));
        }

        // Query Params
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }

        // Query Params
        if (includeOnlyVerifiedCreators !== undefined) {
            requestContext.setQueryParam("includeOnlyVerifiedCreators", ObjectSerializer.serialize(includeOnlyVerifiedCreators, "string", ""));
        }

        // Query Params
        if (querySource !== undefined) {
            requestContext.setQueryParam("querySource", ObjectSerializer.serialize(querySource, "string", ""));
        }

        // Query Params
        if (originalUserQuery !== undefined) {
            requestContext.setQueryParam("originalUserQuery", ObjectSerializer.serialize(originalUserQuery, "string", ""));
        }

        // Query Params
        if (originalCorrection !== undefined) {
            requestContext.setQueryParam("originalCorrection", ObjectSerializer.serialize(originalCorrection, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-auth-cookie"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ToolBoxServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceGetGroupCreations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceGetGroupCreationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceGetHomePageAssetsForSection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolboxServiceGetHomePageAssetsForSection200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolboxServiceGetHomePageAssetsForSection200Response", ""
            ) as ToolboxServiceGetHomePageAssetsForSection200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("4XX", response.httpStatusCode)) {
            const body: ToolBoxServiceError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceError", ""
            ) as ToolBoxServiceError;
            throw new ApiException<ToolBoxServiceError>(response.httpStatusCode, "Invalid Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolboxServiceGetHomePageAssetsForSection200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolboxServiceGetHomePageAssetsForSection200Response", ""
            ) as ToolboxServiceGetHomePageAssetsForSection200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceGetHomePageConfiguration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceGetHomePageConfigurationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolboxServiceGetHomePageAssetsForSection200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolboxServiceGetHomePageAssetsForSection200Response", ""
            ) as ToolboxServiceGetHomePageAssetsForSection200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ToolBoxServiceError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceError", ""
            ) as ToolBoxServiceError;
            throw new ApiException<ToolBoxServiceError>(response.httpStatusCode, "Invalid Request", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolboxServiceGetHomePageAssetsForSection200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolboxServiceGetHomePageAssetsForSection200Response", ""
            ) as ToolboxServiceGetHomePageAssetsForSection200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceGetUserCreations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceGetUserCreationsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceSearchAudios
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceSearchAudiosWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceSearchDecals
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceSearchDecalsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceSearchGetAssets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceSearchGetAssetsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceSearchMeshes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceSearchMeshesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceSearchPlugins
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceSearchPluginsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toolboxServiceSearchVideos
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toolboxServiceSearchVideosWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ToolBoxServiceSearchV1Result >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ToolBoxServiceSearchV1Result = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ToolBoxServiceSearchV1Result", ""
            ) as ToolBoxServiceSearchV1Result;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
