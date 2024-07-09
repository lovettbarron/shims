import type { Root } from "hast";
import type { Plugin } from "unified";
import { type Options } from "./options";
export declare const rehypeJsonCanvas: Plugin<[(Options | undefined)?], Root>;
export declare function getCanvasFromEmbed(markdownPath: string, config?: Partial<Options>): Promise<string>;
