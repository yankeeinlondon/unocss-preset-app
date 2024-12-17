import type { PresetUnoOptions, Theme } from "@unocss/preset-uno";
import type { Preset, Rule } from "unocss";
import Uno from "@unocss/preset-uno";
import { colors } from "./colors";
import { ScrollRotate, ScrollShow } from "./rules";

function preset() {
  return (opt: PresetUnoOptions = {}): Preset<Theme> => {
    const uno: Omit<Preset<Theme>, "name"> = Uno(opt);
    const theme = uno.theme as Theme;
    delete theme.colors;
    const autoComplete = uno.autocomplete;

    return ({
      name: "unocss-preset-tapp",
      ...uno,
      rules: [
        ...(uno.rules ? uno.rules : []) as Rule[],
        ScrollRotate,
        ScrollShow,
      ],
      theme: {
        ...theme,
        colors,
      },
      autocomplete: {
        ...autoComplete,
      },
    });
  };
}

export default preset;
