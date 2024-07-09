import type { Element } from "hast";
import type { GenericNode } from "@trbn/jsoncanvas";
import { type Options } from "./options";
export declare function drawEmbedded(svg: Element, grp: Element, node: GenericNode | any, config?: Partial<Options>): Promise<void>;
export declare function drawMarkdownEmbed(svg: Element, grp: Element, node: GenericNode | any, config?: Partial<Options>): Promise<void>;
