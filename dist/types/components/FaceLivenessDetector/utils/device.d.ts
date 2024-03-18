export declare function isMobileScreen(): boolean;
export declare function isIOS(): boolean;
export declare function isPortrait(): boolean;
/**
 * Use window.matchMedia to direct landscape orientation
 * screen.orientation is not supported in Safari so we will use
 * media query detection to listen for changes instead.
 * @returns MediaQueryList object
 */
export declare function getLandscapeMediaQuery(): MediaQueryList;
