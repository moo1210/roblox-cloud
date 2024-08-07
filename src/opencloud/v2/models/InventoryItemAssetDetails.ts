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

import { InventoryItemCollectibleDetails } from '../models/InventoryItemCollectibleDetails';
import { HttpFile } from '../../../common/http/http';

/**
* Specific fields only applicable to assets
*/
export class InventoryItemAssetDetails {
    /**
    * A unique ID that identifies an asset.
    */
    'assetId'?: string;
    /**
    * The specific asset type of this item.  Possible values:    | Value | Description |   | --- | --- |   | INVENTORY_ITEM_ASSET_TYPE_UNSPECIFIED | Default InventoryItemAssetType |   | CLASSIC_TSHIRT | Classic Tshirt |   | AUDIO | Audio |   | HAT | Hat |   | MODEL | Model |   | CLASSIC_SHIRT | Classic Shirt |   | CLASSIC_PANTS | Classic Pants |   | DECAL | Decal |   | CLASSIC_HEAD | Classic Head |   | FACE | Face |   | GEAR | Gear |   | ANIMATION | Animation |   | TORSO | Torso |   | RIGHT_ARM | Right Arm |   | LEFT_ARM | Left Arm |   | LEFT_LEG | Left Leg |   | RIGHT_LEG | Right Leg |   | PACKAGE | Package |   | PLUGIN | Plugin |   | MESH_PART | Mesh Part |   | HAIR_ACCESSORY | Hair Accessory |   | FACE_ACCESSORY | Face Accessory |   | NECK_ACCESSORY | Neck Accessory |   | SHOULDER_ACCESSORY | Shoulder Accessory |   | FRONT_ACCESSORY | Front Accessory |   | BACK_ACCESSORY | Back Accessory |   | WAIST_ACCESSORY | Waist Accessory |   | CLIMB_ANIMATION | Climb Animation |   | DEATH_ANIMATION | Death Animation |   | FALL_ANIMATION | Fall Animation |   | IDLE_ANIMATION | Idle Animation |   | JUMP_ANIMATION | Jump Animation |   | RUN_ANIMATION | Run Animation |   | SWIM_ANIMATION | Swim Animation |   | WALK_ANIMATION | Walk Animation |   | POSE_ANIMATION | Pose Animation |   | EMOTE_ANIMATION | Emote Animation |   | VIDEO | Video |   | TSHIRT_ACCESSORY | Tshirt Accessory |   | SHIRT_ACCESSORY | Shirt Accessory |   | PANTS_ACCESSORY | Pants Accessory |   | JACKET_ACCESSORY | Jacket Accessory |   | SWEATER_ACCESSORY | Sweater Accessory |   | SHORTS_ACCESSORY | Shorts Accessory |   | LEFT_SHOE_ACCESSORY | Left Shoe Accessory |   | RIGHT_SHOE_ACCESSORY | Right Shoe Accessory |   | DRESS_SKIRT_ACCESSORY | Dress Skirt Accessory |   | EYEBROW_ACCESSORY | Eyebrow Accessory |   | EYELASH_ACCESSORY | Eyelash Accessory |   | MOOD_ANIMATION | Mood Animation |   | DYNAMIC_HEAD | Dynamic Head |   | CREATED_PLACE | Created Place |   | PURCHASED_PLACE | Purchased Place |
    */
    'inventoryItemAssetType'?: InventoryItemAssetDetailsInventoryItemAssetTypeEnum;
    /**
    * A unique ID that identifies an instance or \"copy\" of the asset that\'s  owned by a user.
    */
    'instanceId'?: string;
    'collectibleDetails'?: InventoryItemCollectibleDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetId",
            "baseName": "assetId",
            "type": "string",
            "format": ""
        },
        {
            "name": "inventoryItemAssetType",
            "baseName": "inventoryItemAssetType",
            "type": "InventoryItemAssetDetailsInventoryItemAssetTypeEnum",
            "format": "enum"
        },
        {
            "name": "instanceId",
            "baseName": "instanceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectibleDetails",
            "baseName": "collectibleDetails",
            "type": "InventoryItemCollectibleDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InventoryItemAssetDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InventoryItemAssetDetailsInventoryItemAssetTypeEnum {
    InventoryItemAssetTypeUnspecified = 'INVENTORY_ITEM_ASSET_TYPE_UNSPECIFIED',
    ClassicTshirt = 'CLASSIC_TSHIRT',
    Audio = 'AUDIO',
    Hat = 'HAT',
    Model = 'MODEL',
    ClassicShirt = 'CLASSIC_SHIRT',
    ClassicPants = 'CLASSIC_PANTS',
    Decal = 'DECAL',
    ClassicHead = 'CLASSIC_HEAD',
    Face = 'FACE',
    Gear = 'GEAR',
    Animation = 'ANIMATION',
    Torso = 'TORSO',
    RightArm = 'RIGHT_ARM',
    LeftArm = 'LEFT_ARM',
    LeftLeg = 'LEFT_LEG',
    RightLeg = 'RIGHT_LEG',
    Package = 'PACKAGE',
    Plugin = 'PLUGIN',
    MeshPart = 'MESH_PART',
    HairAccessory = 'HAIR_ACCESSORY',
    FaceAccessory = 'FACE_ACCESSORY',
    NeckAccessory = 'NECK_ACCESSORY',
    ShoulderAccessory = 'SHOULDER_ACCESSORY',
    FrontAccessory = 'FRONT_ACCESSORY',
    BackAccessory = 'BACK_ACCESSORY',
    WaistAccessory = 'WAIST_ACCESSORY',
    ClimbAnimation = 'CLIMB_ANIMATION',
    DeathAnimation = 'DEATH_ANIMATION',
    FallAnimation = 'FALL_ANIMATION',
    IdleAnimation = 'IDLE_ANIMATION',
    JumpAnimation = 'JUMP_ANIMATION',
    RunAnimation = 'RUN_ANIMATION',
    SwimAnimation = 'SWIM_ANIMATION',
    WalkAnimation = 'WALK_ANIMATION',
    PoseAnimation = 'POSE_ANIMATION',
    EmoteAnimation = 'EMOTE_ANIMATION',
    Video = 'VIDEO',
    TshirtAccessory = 'TSHIRT_ACCESSORY',
    ShirtAccessory = 'SHIRT_ACCESSORY',
    PantsAccessory = 'PANTS_ACCESSORY',
    JacketAccessory = 'JACKET_ACCESSORY',
    SweaterAccessory = 'SWEATER_ACCESSORY',
    ShortsAccessory = 'SHORTS_ACCESSORY',
    LeftShoeAccessory = 'LEFT_SHOE_ACCESSORY',
    RightShoeAccessory = 'RIGHT_SHOE_ACCESSORY',
    DressSkirtAccessory = 'DRESS_SKIRT_ACCESSORY',
    EyebrowAccessory = 'EYEBROW_ACCESSORY',
    EyelashAccessory = 'EYELASH_ACCESSORY',
    MoodAnimation = 'MOOD_ANIMATION',
    DynamicHead = 'DYNAMIC_HEAD',
    CreatedPlace = 'CREATED_PLACE',
    PurchasedPlace = 'PURCHASED_PLACE'
}

