import {Preset, Rule } from 'unocss'

const ScrollRotate: Rule = [
  /^animate-scroll-rotate(.*)$/, 
  () => [
    [ 'animation', "scrollRotate" ],
    [ "animation-timeline", "view()"]
  ]
];

export function preset(): Preset {
  return {
    name: 'unocss-preset-tapp',
    rules: [
      ScrollRotate
    ]
  }
}
