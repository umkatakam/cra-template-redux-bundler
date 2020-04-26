import { composeBundles } from "redux-bundler";
import factsBundle from "./facts";

export default composeBundles(factsBundle);
