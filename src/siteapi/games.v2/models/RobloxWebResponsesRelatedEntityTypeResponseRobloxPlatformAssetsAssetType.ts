/**
 * Games Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

export class RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetType {
    'id'?: number;
    /**
    *  [\'Image\' = 1, \'TShirt\' = 2, \'Audio\' = 3, \'Mesh\' = 4, \'Lua\' = 5, \'HTML\' = 6, \'Text\' = 7, \'Hat\' = 8, \'Place\' = 9, \'Model\' = 10, \'Shirt\' = 11, \'Pants\' = 12, \'Decal\' = 13, \'Avatar\' = 16, \'Head\' = 17, \'Face\' = 18, \'Gear\' = 19, \'Badge\' = 21, \'GroupEmblem\' = 22, \'Animation\' = 24, \'Arms\' = 25, \'Legs\' = 26, \'Torso\' = 27, \'RightArm\' = 28, \'LeftArm\' = 29, \'LeftLeg\' = 30, \'RightLeg\' = 31, \'Package\' = 32, \'YouTubeVideo\' = 33, \'GamePass\' = 34, \'App\' = 35, \'Code\' = 37, \'Plugin\' = 38, \'SolidModel\' = 39, \'MeshPart\' = 40, \'HairAccessory\' = 41, \'FaceAccessory\' = 42, \'NeckAccessory\' = 43, \'ShoulderAccessory\' = 44, \'FrontAccessory\' = 45, \'BackAccessory\' = 46, \'WaistAccessory\' = 47, \'ClimbAnimation\' = 48, \'DeathAnimation\' = 49, \'FallAnimation\' = 50, \'IdleAnimation\' = 51, \'JumpAnimation\' = 52, \'RunAnimation\' = 53, \'SwimAnimation\' = 54, \'WalkAnimation\' = 55, \'PoseAnimation\' = 56, \'LocalizationTableManifest\' = 59, \'LocalizationTableTranslation\' = 60, \'EmoteAnimation\' = 61, \'Video\' = 62, \'TexturePack\' = 63, \'TShirtAccessory\' = 64, \'ShirtAccessory\' = 65, \'PantsAccessory\' = 66, \'JacketAccessory\' = 67, \'SweaterAccessory\' = 68, \'ShortsAccessory\' = 69, \'LeftShoeAccessory\' = 70, \'RightShoeAccessory\' = 71, \'DressSkirtAccessory\' = 72, \'FontFamily\' = 73, \'FontFace\' = 74, \'MeshHiddenSurfaceRemoval\' = 75, \'EyebrowAccessory\' = 76, \'EyelashAccessory\' = 77, \'MoodAnimation\' = 78, \'DynamicHead\' = 79, \'CodeSnippet\' = 80, \'AdsVideo\' = 81, \'OtaUpdate\' = 82]
    */
    'type'?: RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetTypeTypeEnum;
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetTypeTypeEnum",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetType.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxWebResponsesRelatedEntityTypeResponseRobloxPlatformAssetsAssetTypeTypeEnum {
    Image = 1,
    TShirt = 2,
    Audio = 3,
    Mesh = 4,
    Lua = 5,
    HTML = 6,
    Text = 7,
    Hat = 8,
    Place = 9,
    Model = 10,
    Shirt = 11,
    Pants = 12,
    Decal = 13,
    Avatar = 16,
    Head = 17,
    Face = 18,
    Gear = 19,
    Badge = 21,
    GroupEmblem = 22,
    Animation = 24,
    Arms = 25,
    Legs = 26,
    Torso = 27,
    RightArm = 28,
    LeftArm = 29,
    LeftLeg = 30,
    RightLeg = 31,
    Package = 32,
    YouTubeVideo = 33,
    GamePass = 34,
    App = 35,
    Code = 37,
    Plugin = 38,
    SolidModel = 39,
    MeshPart = 40,
    HairAccessory = 41,
    FaceAccessory = 42,
    NeckAccessory = 43,
    ShoulderAccessory = 44,
    FrontAccessory = 45,
    BackAccessory = 46,
    WaistAccessory = 47,
    ClimbAnimation = 48,
    DeathAnimation = 49,
    FallAnimation = 50,
    IdleAnimation = 51,
    JumpAnimation = 52,
    RunAnimation = 53,
    SwimAnimation = 54,
    WalkAnimation = 55,
    PoseAnimation = 56,
    LocalizationTableManifest = 59,
    LocalizationTableTranslation = 60,
    EmoteAnimation = 61,
    Video = 62,
    TexturePack = 63,
    TShirtAccessory = 64,
    ShirtAccessory = 65,
    PantsAccessory = 66,
    JacketAccessory = 67,
    SweaterAccessory = 68,
    ShortsAccessory = 69,
    LeftShoeAccessory = 70,
    RightShoeAccessory = 71,
    DressSkirtAccessory = 72,
    FontFamily = 73,
    FontFace = 74,
    MeshHiddenSurfaceRemoval = 75,
    EyebrowAccessory = 76,
    EyelashAccessory = 77,
    MoodAnimation = 78,
    DynamicHead = 79,
    CodeSnippet = 80,
    AdsVideo = 81,
    OtaUpdate = 82
}

