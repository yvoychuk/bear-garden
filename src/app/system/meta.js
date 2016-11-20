import * as utils from "../utils.js"

export function setMetadata (data={}) {
  let meta = data.meta;
  document.title = meta && meta.title || data.name || "App - " + data.path;
}
