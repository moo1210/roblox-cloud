/**
 * Cloud API
 * Open Cloud 2.0
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* Contextual information, generally used for logging.
*/
export class AvatarMarketplaceOrderContext {
    /**
    * Product surface where the order was made, eg. game_engine or  shopping_cart.  Possible values:    | Value | Description |   | --- | --- |   | UNKNOWN | Default value. |   | OAUTH_APP | OAuth 3rd party application. |   | GAME_ENGINE | Game engine. |   | SHOPPING_CART_WEB | Shopping cart on web. |
    */
    'productSurface'?: AvatarMarketplaceOrderContextProductSurfaceEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productSurface",
            "baseName": "productSurface",
            "type": "AvatarMarketplaceOrderContextProductSurfaceEnum",
            "format": "enum"
        }    ];

    static getAttributeTypeMap() {
        return AvatarMarketplaceOrderContext.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AvatarMarketplaceOrderContextProductSurfaceEnum {
    Unknown = 'UNKNOWN',
    OauthApp = 'OAUTH_APP',
    GameEngine = 'GAME_ENGINE',
    ShoppingCartWeb = 'SHOPPING_CART_WEB'
}
