import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxInventoryApiModelsAssetIdListModel } from '../models/RobloxInventoryApiModelsAssetIdListModel';

/**
 * no description
 */
export class AssetsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Given a package ID, returns the list of asset IDs for that package
     * @param packageID The asset ID of the package
     */
    public async v1PackagesPackageIdAssetsGet(packageID: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'packageID' is not null or undefined
        if (packageID === null || packageID === undefined) {
            throw new RequiredError("AssetsApi", "v1PackagesPackageIdAssetsGet", "packageID");
        }


        // Path Params
        const localVarPath = '/v1/packages/{packageId}/assets'
            .replace('{' + 'packageID' + '}', encodeURIComponent(String(packageID)));

        // Make Request Context
        const requestContext = _config.getServer('https://inventory.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AssetsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PackagesPackageIdAssetsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PackagesPackageIdAssetsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxInventoryApiModelsAssetIdListModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxInventoryApiModelsAssetIdListModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiModelsAssetIdListModel", ""
            ) as RobloxInventoryApiModelsAssetIdListModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxInventoryApiModelsAssetIdListModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxInventoryApiModelsAssetIdListModel", ""
            ) as RobloxInventoryApiModelsAssetIdListModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
