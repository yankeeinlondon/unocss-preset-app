import type { Theme } from "@unocss/preset-uno";
import type { CssKeyframeCallback } from "inferred-types/runtime";
import type { CssDefinition } from "inferred-types/types";
import type { CSSObject, DynamicRule, RuleContext, RuleMeta } from "unocss";
import { createCssKeyframe, isString } from "inferred-types/runtime";

export function keyFrame(name: string, config: `{${string}}`, theme: Theme, scrollAnimation: boolean = false) {
  const duration = theme?.animation?.durations?.[name] ?? "1s";
  const timing = theme?.animation?.timingFns?.[name] ?? "linear";
  const count = theme?.animation?.counts?.[name] ?? 1;
  const props = theme?.animation?.properties?.[name];

  const scroll = scrollAnimation
    ? { "animation-timeline": "view(var(--animate-view-start, 70%), var(--animate-view-end, 5%))" }
    : {};

  return [
    `@keyframes ${name}${config}`,
    {
      animation: `${name} ${duration} ${timing} ${count}`,
      ...props,
      ...scroll,
    },
  ];
}

export function css<T extends CssDefinition>(defn: T) {
  return defn;
}

interface RuleState {
  name: string;
  re: RegExp;
  keyframe?: [name: string, css: string];
  css?: CSSObject;
  meta?: RuleMeta;
}

function ruleApi(state: RuleState) {
  return {

    addAnimationKeyframe: <
      TFrame extends CssKeyframeCallback,
      TAnimateName extends string,
    >(name: TAnimateName,
      cb: TFrame,
    ) => {
      const kf = createCssKeyframe(name, cb);

      return ruleApi({
        ...state,
        keyframe: [name, kf.css],
      });
    },

    addCss: <T extends CssDefinition>(css: T) => {
      return ruleApi({
        ...state,
        css: css as CSSObject,
      });
    },

    ruleMeta: <T extends Omit<RuleMeta, "__hash">>(meta: T) => {
      return ruleApi({
        ...state,
        meta,
      });
    },

    done: () => {
      const [keyframeName, kf] = state.keyframe ? state.keyframe : [undefined, undefined];
      let css: CssDefinition = {};
      let meta: RuleMeta = {
        autocomplete: state.name,
      };
      if (state.meta) {
        meta = {
          ...meta,
          ...state.meta,
        };
      }

      const handler = <
        TMatch extends RegExpMatchArray,
        TCtx extends Readonly<RuleContext>,
      >(_match: TMatch,
        ctx: TCtx,
      ) => {
        if (isString(keyframeName) && isString(kf)) {
          const duration = (ctx.theme as Theme)?.animation?.durations?.[keyframeName] ?? "1s";
          const timing = (ctx.theme as Theme)?.animation?.timingFns?.[keyframeName] ?? "linear";
          const count = (ctx.theme as Theme)?.animation?.counts?.[keyframeName] ?? 1;
          const props = (ctx.theme as Theme)?.animation?.properties?.[keyframeName];

          css = {
            ...css,
            animation: `${keyframeName} ${duration} ${timing} ${count}`,
            ...(props ? props as CssDefinition : {}),
          };
        } // end keyframe

        if (state.css) {
          css = {
            ...css,
            ...state.css,
          };
        }

        return [
          ...(state.keyframe?.[1] ? [state.keyframe?.[1]] : []),
          css as CSSObject,
          meta,
        ];
      };

      return [
        state.re,
        handler,
      ] as DynamicRule;
    },

  };
}

export function createRule<T extends string>(name: T) {
  const re = new RegExp(`^${name}(.*)$`);

  return ruleApi({ name, re });
}
