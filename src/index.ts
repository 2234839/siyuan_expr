import { Plugin } from "siyuan";
import { getBlockKramdown, setBlockAttrs, sql, updateBlock } from "./api";
import "./index.css";

/** 用于控制插件属性显示 */
const pluginClassName = "expr-plugin";
const exprName = "custom-expr";
const exprValueName = "custom-expr-value";

/** 合并了block和attribute，其中attribute的属性key前面添加了`a_` */
type aliasAttribute = { [K in keyof attribute as `a_${K}`]: attribute[K] };
type MergedBlock = aliasAttribute & Block;

const dev = console.log;

export default class expr extends Plugin {
  IntervalId = 0;
  async onload() {
    // this.IntervalId = setInterval(updateExprEval, 5_000);
    updateExprEval();
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
  // type box = Block & attribute;
  const exprAttr: MergedBlock[] = await sql(
    /** 查询所有 'expr' 书签 or name = "custom-expr" 的属性 */
    // `SELECT * FROM attributes WHERE name = "${exprName}"`,
    `SELECT b.*,a.id AS a_id,a."name" AS a_name,a."value" as a_value,a."type" AS a_type,a.block_id AS a_block_id,a.root_id AS a_root_id,a.box AS a_box,a."path" AS a_path
    FROM blocks AS  b
    INNER JOIN attributes AS a
    ON b.id = a.block_id
    WHERE a.name = "${exprName}"
    ORDER BY b.updated DESC;`,
  );
  console.log(exprAttr);
  exprAttr.forEach(exprEval);
}
async function exprEval(block: MergedBlock) {
  const evalValue = await eval(block.a_value);
  /** 将求值结果存储到属性中 */
  setBlockAttrs(block.id, {
    [exprValueName]: String(evalValue),
  });

  /** 更新块的update时间戳 */
  const newKramdownAttr = block.ial!.replace(/updated="\d+"/, `updated="${generateTimestamp()}"`);

  /** 将求值结果更新到块文本 */
  await updateBlock("markdown", String(evalValue + "\n" + newKramdownAttr), block.id);
  dev(newKramdownAttr);
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
function generateTimestamp() {
  const now = new Date();
  return [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ]
    .map((part) => part.toString().padStart(2, "0"))
    .join("");
}
