import { Plugin } from "siyuan";
import { setBlockAttrs, sql } from "./api";

const exprName = "custom-expr";

export default class expr extends Plugin {
  IntervalId = 0;
  async onload() {
    this.IntervalId = setInterval(async () => {
      /** 查询所有 'expr' 书签 or name = "custom-expr" 的属性 */
      const attr: attribute[] = await sql(`
 SELECT * FROM attributes
 WHERE
   name = "${exprName}"
   OR
   (name = "bookmark" AND VALUE ="expr")`);
      const notInitBlocks = await filterNotInitBlock(attr);
      notInitBlocks.map(async ({ block_id }) => {
        exprBlockInit(await getBlockByID(block_id));
      });

      if (notInitBlocks.length > 0) {
        console.log("未初始化节点", notInitBlocks);
      }
    }, 1000);
  }
  async onunload() {
    clearInterval(this.IntervalId);
  }
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
async function exprBlockInit(block: Block) {
  await setBlockAttrs(block.id, {
    [exprName]: block.content,
  });
}

async function getBlockByID(blockId: string): Promise<Block> {
  let sqlScript = `select * from blocks where id ='${blockId}'`;
  let data = await sql(sqlScript);
  return data[0];
}
