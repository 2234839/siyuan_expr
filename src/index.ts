import { Plugin } from "siyuan";
import { sql } from "./api";
import { hash_time33 } from "@llej/js_util/src/hash";

type attribute = {
  block_id: "id";
  box: "id";
  id: "id";
  name: "bookmark";
  path: "/id/id.sy";
  root_id: "id";
  type: "b";
  value: "expr";
};

export default class expr extends Plugin {
  async onload() {
    /** 查询所有 bookmark = 'expr' or name = "custom-expr" 的属性 */
    const attr: attribute[] = await sql(`
    SELECT * FROM attributes
    WHERE
      name = "custom-expr"
      OR
      (name = "bookmark" AND VALUE ="expr")`);
    console.log("启动", hash_time33("dfadfa"), attr, filterNotInitBlock(attr));
  }
  async onunload() {}
}
function filterNotInitBlock(attrs: attribute[]) {
  const idCount: { [block_id: string]: { count: number; attrs: attribute[] } } = {};
  attrs.forEach(async (attr: attribute) => {
    if (idCount[attr.block_id] === undefined) {
      idCount[attr.block_id] = { count: 0, attrs: [] };
    }
    idCount[attr.block_id].count += 1;
    idCount[attr.block_id].attrs.push(attr);
  });
  return Object.keys(idCount)
    .filter((block_id: string) => idCount[block_id].count === 1)
    .map((block_id: string) => idCount[block_id].attrs[0]);
}
async function exprBlockInit(block: any) {}
