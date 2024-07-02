import { GenericNode } from "@trbn/jsoncanvas";
import { Canvas, CanvasRenderingContext2D } from "canvas";
export declare function checkImagesLoaded(callback: Function): any;
export declare function drawEmbedded(canvas: Canvas, ctx: CanvasRenderingContext2D, node: GenericNode | any): Promise<void>;
export declare function drawMarkdownEmbed(canvas: Canvas, ctx: CanvasRenderingContext2D, node: GenericNode | any): Promise<void>;
