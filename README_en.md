This is an AI-generated translation.

---

# SiYuan Expression Plugin

[Chinese Documentation](./README.md) [English Documentation](./README_en.md)

[Usage Documentation](#Usage Documentation)

QQ Group: 706761641 (XinZhan Space)

### You may use this product only after agreeing to the following terms

Trial Agreement:

You may try the product for any length of time, and after a month, if you find it useful, you will lose the trial qualification.

---

Paid Agreement:

You can use this product during the subscription period.

Situations that are considered as subscription: you have helped the author in any form, you have made a recognized contribution to society, or you are unable to pay.

Subscription amount: equivalent to 10 RMB, you can use any payment method, with no time limit (you can decide to take any payment measures at any time, but you can start using it now).

Subscription period: from the time of payment to the right to use for one hundred product updates or 365 days, whichever is longer in duration, and it is stackable. (That is, if I update more than a hundred times in a very short period, it will be calculated as one year)

[Pay through the Aifadian platform](https://afdian.net/@llej0)

It is not considered a violation of the payment agreement if you do not remember the above agreement.

---

Prohibition and Disclaimer Agreement:

It is prohibited to use this product for any illegal or disorderly activities.

The author is not responsible for any consequences arising from your use of this product.

## Usage Documentation

Add a custom attribute `expr` to a block, and set the value to a valid JavaScript expression. The plugin will use `eval` to evaluate the expression, and the returned value will be used as the block content and the value of the custom attribute `expr-_value`.

If the value is a Promise, the result of the Promise will be used as the block content.

### Automatic Evaluation

The plugin will continuously evaluate changes to blocks, but to avoid generating a large amount of computation and read/write operations, some optimizations have been made based on the block's `update` field. When the plugin is first launched, it will evaluate all expressions once, and after that, it will only evaluate the expressions of the blocks that have been updated.

Note! [Updating block attributes does not cause the block's `update` field to update](https://github.com/2234839/siyuan_expr/issues/1#issuecomment-2147809646), if you want to trigger the evaluation, you can manually modify the content of the block at will.

### Some special variables that can be directly referenced within the expression

#### expr

Plugin instance

#### block

The expression can directly input `block` to obtain the data of the block where the expression is located, where those starting with `a_` are attributes of `custom-expr`, and the rest are block attributes.

```js
const block = {
    a_block_id: "Block ID",
    a_box: "Notebook ID",
    a_id: "Attribute ID",
    a_name: "custom-expr",
    a_path: "/Document ID/Document ID/Document ID.sy",
    a_root_id: "Document ID",
    a_type: "b",
    a_value: "Expression script",
    alias: "",
    box: "Notebook ID",
    content: "Block content",
    created: "20240605121837",
    fcontent: "",
    hash: "f570917",
    hpath: "Readable path",
    ial: "Block attributes",
    id: "Block ID",
    length: 16,
    markdown: "Block content markdown",
    memo: "",
    name: "",
    parent_id: "Parent block ID",
    path: "/Document ID/Document ID/Document ID.sy",
    root_id: "Document ID",
    sort: 10,
    subtype: "",
    tag: "",
    type: "p",
    updated: "20240605134312"
}
```