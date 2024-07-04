import { Element } from "hast";
import { GenericNode } from "@trbn/jsoncanvas";
export declare function checkImagesLoaded(callback: Function): any;
export declare function drawEmbedded(svg: Element, node: GenericNode | any): Promise<void>;
export declare function drawMarkdownEmbed(svg: Element, node: GenericNode | any): Promise<void>;
