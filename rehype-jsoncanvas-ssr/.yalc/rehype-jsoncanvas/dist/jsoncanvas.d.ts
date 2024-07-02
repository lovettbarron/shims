import { JSONCanvas } from "@trbn/jsoncanvas";
import { Options } from "./options";
export declare function validate(jsonCanvasData: JSONCanvas): boolean;
export declare function render(jsc: JSONCanvas, config?: Partial<Options>): String | any | null;
