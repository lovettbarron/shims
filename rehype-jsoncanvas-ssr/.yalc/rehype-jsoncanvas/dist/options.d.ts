/**
 * Options for the jsoncanvas
 */
export interface Options {
    /**
     * Open links in a new tab
     *
     * Defaults to true
     */
    openEmbededInNewTab?: boolean;
    /**
     * This is a dumb hack for accomodating SSr. Basically, the mrakdown embed path requires the SSR relative path, and image svg is from the client side, so doesn't see the `public`directory. Otherwise will use assetPath
     *
     * Defaults to 'public'
     */
    ssrPath?: string;
    /**
     * Define an asset path where the .canvas files exists. This will add the asset path before the filename. Otherwise uses cwd.process() path + filename
     *
     * Defaults to null
     */
    assetPath?: string | null;
    /**
     * Define an markdown path where the .md files will be searched for WHEN EMBEDDING ONLY. This will add the md path before the filename. Otherwise uses assetPath defaults
     *
     * Defaults to null
     */
    mdPath?: string | null;
    /**
     * Canvas node stroke width
     *
     * Defaults to 3
     */
    nodeStrokeWidth?: number;
    /**
     * Canvas line stroke width
     *
     * Defaults to 5
     */
    lineStrokeWidth?: number;
}
/**
 * Applies default values for any unspecified options
 */
export declare function applyDefaults(config?: Partial<Options>): Options;
