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
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_16 = 16,
    NUMBER_17 = 17,
    NUMBER_18 = 18,
    NUMBER_19 = 19,
    NUMBER_21 = 21,
    NUMBER_22 = 22,
    NUMBER_24 = 24,
    NUMBER_25 = 25,
    NUMBER_26 = 26,
    NUMBER_27 = 27,
    NUMBER_28 = 28,
    NUMBER_29 = 29,
    NUMBER_30 = 30,
    NUMBER_31 = 31,
    NUMBER_32 = 32,
    NUMBER_33 = 33,
    NUMBER_34 = 34,
    NUMBER_35 = 35,
    NUMBER_37 = 37,
    NUMBER_38 = 38,
    NUMBER_39 = 39,
    NUMBER_40 = 40,
    NUMBER_41 = 41,
    NUMBER_42 = 42,
    NUMBER_43 = 43,
    NUMBER_44 = 44,
    NUMBER_45 = 45,
    NUMBER_46 = 46,
    NUMBER_47 = 47,
    NUMBER_48 = 48,
    NUMBER_49 = 49,
    NUMBER_50 = 50,
    NUMBER_51 = 51,
    NUMBER_52 = 52,
    NUMBER_53 = 53,
    NUMBER_54 = 54,
    NUMBER_55 = 55,
    NUMBER_56 = 56,
    NUMBER_59 = 59,
    NUMBER_60 = 60,
    NUMBER_61 = 61,
    NUMBER_62 = 62,
    NUMBER_63 = 63,
    NUMBER_64 = 64,
    NUMBER_65 = 65,
    NUMBER_66 = 66,
    NUMBER_67 = 67,
    NUMBER_68 = 68,
    NUMBER_69 = 69,
    NUMBER_70 = 70,
    NUMBER_71 = 71,
    NUMBER_72 = 72,
    NUMBER_73 = 73,
    NUMBER_74 = 74,
    NUMBER_75 = 75,
    NUMBER_76 = 76,
    NUMBER_77 = 77,
    NUMBER_78 = 78,
    NUMBER_79 = 79,
    NUMBER_80 = 80,
    NUMBER_81 = 81,
    NUMBER_82 = 82
}

