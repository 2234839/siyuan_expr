import { Plugin } from "siyuan";
import { getBlockKramdown, setBlockAttrs, sql, updateBlock } from "./api";
import "./index.css";

/** 用于控制插件属性显示 */
const pluginClassName = "expr-plugin";
const exprName = "custom-expr";
const exprValueName = "custom-expr-value";

const dev = console.log;

export default class expr extends Plugin {
  IntervalId = 0;
  async onload() {
    this.IntervalId = setInterval(updateExprEval, 5_000);
    this.onunloadFn.push(() => clearInterval(this.IntervalId));

    document.body.classList.add(pluginClassName);
    this.onunloadFn.push(() => document.body.classList.remove(pluginClassName));
  }

  onunloadFn = [] as (() => void)[];
  async onunload() {
    dev("expr plugin unload");
    this.onunloadFn.forEach((fn) => fn());
  }
}
/** 对最近更新过的表达式进行求值 */
async function updateExprEval() {
  const exprAttr: attribute[] = await sql(
    /** 查询所有 'expr' 书签 or name = "custom-expr" 的属性 */
    `SELECT * FROM attributes WHERE name = "${exprName}"`,
  );
  console.log(exprAttr);
  exprAttr.forEach(exprEval);
}
async function exprEval(exprAttr: attribute) {
  const evalValue = await eval(exprAttr.value);
  /** 将求值结果存储到属性中 */
  setBlockAttrs(exprAttr.block_id, {
    [exprValueName]: String(evalValue),
  });
  const Kramdown = await getBlockKramdown(exprAttr.block_id);
  const KramdownRows = Kramdown.kramdown.split("\n");
  const KramdownAttr = KramdownRows.pop();

  /** 块原本的内容 */
  const markdown = KramdownRows.join("\n");
  /** 将求值结果更新到块文本 */
  await updateBlock(
    "markdown",
    String(evalValue + "\n" + KramdownAttr),
    exprAttr.block_id,
  );
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
