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
    /**
     * Render mode. Determines the canvas output mode
     *
     * Defaults to canvas
     */
    renderMode: "svg" | "image" | "canvas";
    /**
     * Canvas Buffer
     *
     * Defaults to 30
     */
    canvasBuffer: number;
    /**
     * Canvas node stroke width
     *
     * Defaults to 3
     */
    nodeStrokeWidth: number;
    /**
     * Canvas line stroke width
     *
     * Defaults to 5
     */
    lineStrokeWidth: number;
}
/**
 * Applies default values for any unspecified options
 */
export declare function applyDefaults(config?: Partial<Options>): Options;
