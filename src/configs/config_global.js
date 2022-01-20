import { Platform, StatusBar } from 'react-native';
import {
    isIphone12,
    isIphoneX,
    isNewIPadPro
} from "../utils/util_dimension_helpers";
import DeviceInfo from 'react-native-device-info';

const barHeight = (Platform.OS === 'ios') ? (isIphoneX() ? 32 : 20) : StatusBar.currentHeight, bottomBarHeight = (isIphoneX() || isIphone12()) ? 24 : (isNewIPadPro() ? 32 : 0);
const bottomHeight = (Platform.OS === 'ios') ? (isIphoneX() ? 80 : 50) : 50;
const bottomPadding = (Platform.OS === 'ios') ? ((isIphoneX() || isNewIPadPro()) ? 32 : 0) : 0;
const isTablet = DeviceInfo.isTablet();

module.exports = {
    APP_NAME: 'Your App Name',
    PRODUCTION_LINK: "https://prod.yourdomain.com/api",
    DEV_LINK: "https://dev.yourdomain.com/api",
    FATHER_LINK: null,

    BAR_HEIGHT: barHeight,
    BOTTOM_BAR_HEIGHT: bottomBarHeight,
    BOTTOM_HEIGHT: bottomHeight,
    BOTTOM_PADDING: bottomPadding,

    IS_TABLET: isTablet,

    DATA: {
        LOGIN_SERVICE: null,
        USER: {
            name: '',
            email: ''
        },
        USER_TOKEN: null
    },

    CACHE: { // TODO: Cache your data here for global access
        LOCATIONS: []
    },

    SCENES: { // TODO: Cache your scene component here for global access
        SPLASH: null,
        MAIN: null,
        HOME: null
    },

    // region Colors
    COLOR: {
        MAIN: '#fa393d', // rgb(250,57,61)
        TEXT_GRAY: 'rgb(125, 131, 150)',
        TEXT_LIGHT_GRAY: 'rgba(125, 131, 150, 0.5)',
        BACKGROUND: '#FAFAFA',
        DIVIDER: 'rgba(0, 0, 0, 0.1)',
        SOCIAL: {
            FACEBOOK: 'rgb(40, 103, 176)',
            GOOGLE: 'rgb(206, 85, 63)',
            TWITTER: 'rgb(98, 178, 238)',
            INSTAGRAM: 'rgb(111, 47, 162)'
        },
        BASIC: {
            ORANGE: 'rgb(226, 100, 55)',
            RED: 'rgb(237, 59, 59)',
            BROWN_RED: 'rgb(154, 53, 48)',
            GREEN: 'rgb(0, 174, 119)',
            BLUE: 'rgb(3, 155, 229)',
            DARK_BLUE: 'rgb(51, 93, 141)',
            GRAY: 'rgb(152, 166, 180)',
            LIGHT_GRAY: 'rgb(248, 248, 248)',
            PURPLE: 'rgb(105, 50, 143)',
            WARM_GREY: 'rgb(117, 117, 117)',
            WHITE_TWO: 'rgb(239, 239, 239)',
            GOLD: 'rgb(249, 211, 113)',
            PINKISH_GREY: '#bdbdbd',
            BLACK_TWO: 'rgb(33, 33, 33)',
            LIGHT_GOLD: 'rgb(255, 211, 94)',
            DODGER_BLUE: 'rgb(82, 137, 255)',
            ALGAE_GREEN: 'rgb(50, 215, 112)',

            NEUTRAL_DARK_GREY: 'rgb(66, 66, 66)',
            NEUTRAL_GREY: 'rgb(102, 102, 102)',
            NEUTRAL_LIGHT_GREY: 'rgb(161, 161, 161)',
            NEUTRAL_STROKE: 'rgb(212, 212, 212)'
        },
        ENHANCED: {
            UI_YELLOW: 'rgb(255, 166, 0)',
            UI_BLUE: 'rgb(0, 117, 219)',
            UI_GREEN: 'rgb(118, 192, 33)'
        }
    }
    // endregion
};
