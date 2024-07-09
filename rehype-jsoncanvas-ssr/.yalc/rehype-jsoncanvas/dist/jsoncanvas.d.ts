import type { Element } from "hast";
import type { JSONCanvas } from "@trbn/jsoncanvas";
import { type Options } from "./options";
export declare function validate(jsonCanvasData: JSONCanvas): boolean;
export declare function render(jsc: JSONCanvas, config?: Partial<Options>): Element | null;
