// import { loadable } from "frontity";
import loadable from "@loadable/component";

/**
 * Codesplit the list component so it's not included if the users
 * load a post directly.
 */
export default loadable(() => import("./Organic"));
