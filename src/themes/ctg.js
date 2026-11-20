// CTG: a work-report slide look.
// A chapter is a bare panel the full width of the sheet: its ### is the chapter title (red, red bar), and the paragraph after it is the
// chapter's point (red text on the grey band). The panels after it are the chapter's boxes:
//   ## A Overview {bare span=2}
//   ### Overview
//   The one sentence the reader must take from this chapter.
// *emphasis* is red upright text, for the key numbers in a sentence.
// look=tab is a navy tab on a grey box, look=tab-strong a red one; look=plain has a red centred caption and no box, and a kv in it shows
// large numbers (a KPI row). A red title with a red bar on its left, the key message in red on a grey band, navy panel heads
// and table heads with white text, navy labels and bullets, thin grey rules, square corners.
import { SANS, MONO } from './fonts.js';

// The two brand colors, the grey band behind the key message and the grey rule of panels and tables; the decoration css reads them.
// --ctg-tab-red is the ground of a red tab under white text (the dark --ctg-red is too light for that).
// --ctg-bar / --ctg-bar-over fill a limits bar: 3:1 or more against --paper, so the length reads (--accent-bg / --err-bg are about 1.1:1).
// Built-in themes set no diagram tokens (test/diagram-tokens.test.js), so diagrams take their navy strokes from --line.
const LIGHT_BRAND = { '--ctg-red': '#c00000', '--ctg-navy': '#004b74', '--ctg-band': '#f2f2f2', '--ctg-rule': '#d9d9d9', '--ctg-bar': '#6693ac', '--ctg-bar-over': '#d96666', '--ctg-tab-red': '#c00000' };
const DARK_BRAND = { '--ctg-red': '#ff6b6b', '--ctg-navy': '#0f5f8f', '--ctg-band': '#1a2633', '--ctg-rule': '#2e3d4d', '--ctg-bar': '#45708f', '--ctg-bar-over': '#ac4f53', '--ctg-tab-red': '#b3261e' };

export default {
  name: 'ctg',
  summary: 'CTG work report',
  label: { zh: 'CTG', 'zh-Hant': 'CTG', en: 'CTG', ja: 'CTG', he: 'CTG', tr: 'CTG' }, // lang-ok: viewer-facing theme labels
  scope: ['page'],
  tokens: {
    common: {
      '--font-sans': SANS, '--font-mono': MONO, '--radius': '2px', '--shadow': 'none', '--bw': '1px', '--head-font': 'var(--font-sans)',
    },
    light: {
      ...LIGHT_BRAND,
      '--bg': '#ffffff', '--paper': '#ffffff', '--ink': '#000000', '--ink-2': '#404040', '--ink-3': '#7f7f7f',
      '--line': '#4d7f9e', '--line-2': '#e6e6e6', '--fill': '#f7f7f7',
      '--accent': '#004b74', '--accent-bg': '#e6eef4',
      '--ok': '#2e7d32', '--ok-bg': '#e8f3e9', '--err': '#c00000', '--err-bg': '#fbe9e9',
      '--warn': '#8a5a00', '--warn-bg': '#fff4d6', '--head-bg': '#004b74', '--head-fg': '#ffffff',
    },
    dark: {
      ...DARK_BRAND,
      '--bg': '#0b1218', '--paper': '#111b25', '--ink': '#e9eef3', '--ink-2': '#b4c0cc', '--ink-3': '#7d8b99',
      '--line': '#5a85a3', '--line-2': '#223040', '--fill': '#16222e',
      '--accent': '#6fb6e6', '--accent-bg': '#12324a',
      '--ok': '#7fcf86', '--ok-bg': '#163020', '--err': '#ff6b6b', '--err-bg': '#3a1618',
      '--warn': '#f0c060', '--warn-bg': '#3a2c10', '--head-bg': '#0f5f8f', '--head-fg': '#ffffff',
    },
  },
  css: `& .am-head h1 {
  color: var(--ctg-red); font-weight: 700; letter-spacing: 0.02em;
  border-inline-start: 10px solid var(--ctg-red); padding-inline-start: 18px;
}
& .am-intro {
  max-width: none; margin-top: 16px; margin-inline-end: -300px; padding: 8px 20px; background: var(--ctg-band);
  color: var(--ctg-red); font-weight: 700; font-size: var(--am-fs-heading); text-align: center;
}
& .am-intro p { margin: 0; }
& .am-intro p + p { margin-top: 4px; }
& .am-panel { border-color: var(--ctg-rule); }
& .am-panel-head { background: var(--ctg-navy); border-bottom: 0; min-height: 36px; }
& .am-panel-head h2 { color: #ffffff; font-weight: 700; justify-content: center; text-align: center; letter-spacing: 0.04em; }
& .am-panel-id { background: rgba(0, 0, 0, 0.18); color: #ffffff; }
& .am-panel-meta { color: rgba(255, 255, 255, 0.82); }
& .am-panel-head .am-comment-btn { color: rgba(255, 255, 255, 0.75); }
& .am-panel:hover .am-panel-head .am-comment-btn { border-color: rgba(255, 255, 255, 0.5); color: #ffffff; }
& .am-panel .am-panel-head .am-comment-btn.am-comment-btn--on { color: #ffffff; border-color: #ffffff; background: rgba(255, 255, 255, 0.16); }
& .am-panel--bare .am-panel-head { background: none; }
& .am-panel--bare { margin-top: 18px; }
& .am-panel--tab > .am-panel-head { border: 0; border-radius: 0 12px 0 0; min-width: min(36%, 360px); min-height: 34px; }
& .am-panel--tab > .am-panel-body { border: 1px solid var(--ctg-rule); border-radius: 0 6px 6px 6px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06); }
& .am-panel--tab-strong > .am-panel-head { background: var(--ctg-tab-red); }
& .am-panel--plain > .am-panel-head { background: none; }
& .am-panel--plain > .am-panel-head h2 { color: var(--ctg-red); letter-spacing: 0.04em; }
& .am-panel--plain > .am-panel-head .am-panel-id { background: none; color: var(--ink-3); }
& .am-panel.am-panel--plain .am-panel-head .am-comment-btn { color: var(--ink-3); }
& .am-panel.am-panel--plain:hover .am-panel-head .am-comment-btn { border-color: var(--line-2); color: var(--ink-2); }
& .am-panel.am-panel--plain .am-panel-head .am-comment-btn.am-comment-btn--on { color: var(--accent); border-color: var(--accent); background: none; }
& .am-panel--plain .am-kv dd { font-size: calc(var(--am-fs-stat) * 1.9); line-height: 1.15; }
& .am-panel--bare .am-md > h3 {
  margin: 0 0 12px; color: var(--ctg-red); font-size: calc(var(--am-fs-title) * 0.9); font-weight: 700; line-height: 1.3;
  letter-spacing: 0.02em; border-inline-start: 8px solid var(--ctg-red); padding-inline-start: 14px;
}
& .am-panel--bare .am-md > h3::before { content: none; }
& .am-panel--bare .am-md > h3 + p {
  margin: 0; padding: 8px 20px; background: var(--ctg-band);
  color: var(--ctg-red); font-weight: 700; font-size: var(--am-fs-heading); text-align: center;
}
& .am-panel-body .am-md p, & .am-panel-body .am-md li { font-size: var(--am-fs-lead); line-height: 1.75; }
& .am-panel-body .am-md li + li { margin-top: 6px; }
/* Top-level items of a slide list stand apart (about half a line); nested items stay close to their parent. A box stretched to its row
   keeps the items at the top and leaves the rest of its height white, as a slide does. */
& .am-panel-body .am-md > ul > li + li, & .am-panel-body .am-md > ol > li + li { margin-top: 12px; }
& .am-md table { font-size: var(--am-fs-body); }
& .am-md strong { color: var(--accent); }
& .am-md h3, & .am-md h4 { color: var(--accent); }
& .am-md h3::before { content: "■"; margin-inline-end: 0.45em; }
& .am-md ul { list-style-type: "■ "; }
& .am-md ul ul { list-style-type: "• "; }
& .am-md li::marker { color: var(--accent); }
& .am-md ul ul li::marker { font-size: 1.1em; }
& .am-md em { font-style: normal; color: var(--ctg-red); }
& .am-md table { border: 1px solid var(--ctg-rule); }
& .am-md thead th {
  background: var(--ctg-navy); color: #ffffff; font: 700 var(--am-fs-text)/1.35 var(--font-sans);
  text-align: center; border: 1px solid var(--ctg-navy); border-inline-end-color: rgba(255, 255, 255, 0.35);
}
& .am-md td, & .am-md tbody th { border: 1px solid var(--ctg-rule); }
& .am-md tbody tr:nth-child(even) td { background: transparent; }
& .am-md tbody tr:hover td { background: var(--fill); }
& .am-callout { border-top-color: var(--ctg-rule); border-bottom-color: var(--ctg-rule); border-inline-end-color: var(--ctg-rule); border-inline-start-width: 4px; }
& .am-callout-title { color: var(--accent); }
& .am-callout--err .am-callout-title { color: var(--err); }
& .am-kv { border: 0; gap: 14px; }
& .am-kv > * { border: 1.5px dashed var(--ctg-rule); padding: 10px 14px 12px; }
& .am-kv dt { font: 600 var(--am-fs-body)/1.4 var(--font-sans); color: var(--ink); }
& .am-lim-track { background: var(--paper); border-color: var(--ctg-rule); }
& .am-lim-fill { background: var(--ctg-bar); }
& .am-lim.is-over .am-lim-fill { background: var(--ctg-bar-over); }
& .am-kv dd { color: var(--accent); font-weight: 700; font-size: var(--am-fs-stat); line-height: 1.2; }
@media (max-width: 760px) {
  & .am-intro { margin-inline-end: 0; }
}`,
};
