import type { DynamicRule } from "unocss";
import { createRule, keyFrame } from "./utility";

const scrollRotate = `{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}`;

export const ScrollRotate: DynamicRule = [
  /^animate-scroll-rotate(.*)$/,
  (_, { theme }) => [
    ...keyFrame("scrollRotate", scrollRotate, theme, true),
    { autocomplete: "animate-scroll-rotate" },
  ],
];

export const ScrollShow = createRule("animate-scroll-show")
  .addAnimationKeyframe("scrollShow", k => k
    .add("from", { opacity: "0", transform: "translateY(200px) scale(0.3)" })
    .add("to", { opacity: "1", transform: "translateY(0px) scale(1)" }))
  .done();
