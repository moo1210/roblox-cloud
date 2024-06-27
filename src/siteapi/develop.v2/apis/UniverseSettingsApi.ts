import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiDevelopModelsUniverseSettingsRequestV2 } from '../models/RobloxApiDevelopModelsUniverseSettingsRequestV2';
import { RobloxApiDevelopModelsUniverseSettingsResponseV2 } from '../models/RobloxApiDevelopModelsUniverseSettingsResponseV2';

/**
 * no description
 */
export class UniverseSettingsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public async v2UniversesUniverseIdConfigurationPatch(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequestV2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("UniverseSettingsApi", "v2UniversesUniverseIdConfigurationPatch", "universeId");
        }


        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new RequiredError("UniverseSettingsApi", "v2UniversesUniverseIdConfigurationPatch", "model");
        }


        // Path Params
        const localVarPath = '/v2/universes/{universeId}/configuration'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(model, "RobloxApiDevelopModelsUniverseSettingsRequestV2", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class UniverseSettingsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UniversesUniverseIdConfigurationPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UniversesUniverseIdConfigurationPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponseV2 >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiDevelopModelsUniverseSettingsResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsUniverseSettingsResponseV2", ""
            ) as RobloxApiDevelopModelsUniverseSettingsResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The universe does not exist.  3: Invalid UniverseAvatarType.  4: Invalid UniverseScaleType.  5: Invalid UniverseAnimationType.  6: Invalid UniverseCollisionType.  7: New universe name or description has been rejected.  8: New universe name is too long.  10: Invalid UniverseBodyType.  11: Invalid UniverseJointPositioningType.  12: The universe has no root place.  15: Price is required when isForSale is true.  16: This game cannot be offered for sale because it is not public.  17: This game cannot be offered for sale because it has private servers enabled.  18: The game price is outside of the allowed range.  19: Invalid genre.  20: The request body is missing.  21: Invalid device type.  22: Invalid asset type.  23: Invalid value, the min must be less than or equal to the max  24: Invalid scale value  28: OptIn/Out Regions Not Supported.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You are not authorized to configure this universe.  14: You are not authorized to sell games.  29: Luobu app terms of service user agreement is missing.  30: Unknown error while updating Opt in out region.", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "9: Failed to shutdown all intances of game after changing AvatarType. The change has been reverted.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiDevelopModelsUniverseSettingsResponseV2 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsUniverseSettingsResponseV2", ""
            ) as RobloxApiDevelopModelsUniverseSettingsResponseV2;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
