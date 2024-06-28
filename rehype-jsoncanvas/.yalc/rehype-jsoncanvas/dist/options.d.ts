/**
 * Options for the jsoncanvas
 */
export interface Options {
    /**
     * Open links in a new tab
     *
     * Defaults to true
     */
    openEmbededInNewTab: boolean;
}
/**
 * Applies default values for any unspecified options
 */
export declare function applyDefaults(config?: Partial<Options>): Options;
