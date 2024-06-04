import { Plugin } from "siyuan";
import { setBlockAttrs, sql, updateBlock } from "./api";
import "./index.css";

/** 用于控制插件属性显示 */
const pluginClassName = "expr-plugin";
const exprName = "custom-expr";
const exprValueName = "custom-expr-value";

const dev = console.log;

export default class expr extends Plugin {
  IntervalId = 0;
  async onload() {
    this.onunloadFn.push(() => clearInterval(this.IntervalId));
    const exprAttr: attribute[] = await sql(
      /** 查询所有 'expr' 书签 or name = "custom-expr" 的属性 */
      `SELECT * FROM attributes WHERE name = "${exprName}"`,
    );
    console.log(exprAttr);
    exprAttr.forEach(exprEval);

    document.body.classList.add(pluginClassName);
    this.onunloadFn.push(() => document.body.classList.remove(pluginClassName));
  }

  onunloadFn = [] as (() => void)[];
  async onunload() {
    dev("expr plugin unload");
    this.onunloadFn.forEach((fn) => fn());
  }
}
async function exprEval(exprAttr: attribute) {
  const evalValue = await eval(exprAttr.value);
  // const updateRes = await updateBlock("markdown", String(evalValue), exprAttr.block_id);
  const updateRes = await setBlockAttrs(exprAttr.block_id, {
    [exprValueName]: String(evalValue),
  });
  dev(exprAttr, updateRes, evalValue);
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
