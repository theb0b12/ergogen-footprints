module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P12: { type: 'net', value: 'P10' },
    P13: { type: 'net', value: 'P9' },
    P14: { type: 'net', value: 'P8' },
    P15: { type: 'net', value: 'P7' },
    P16: { type: 'net', value: 'P6' },
    P17: { type: 'net', value: 'P5' },
    P18: { type: 'net', value: 'P4' },
    P19: { type: 'net', value: 'P3' },
    P20: { type: 'net', value: 'P2' },
    P23: { type: 'net', value: 'P0' },
    P24: { type: 'net', value: 'P1' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "doru tht"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "12" thru_hole circle (at 14 ${flipN(flip, 0)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P12})`);
fp.push(`(pad "13" thru_hole circle (at 11.52 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P13})`);
fp.push(`(pad "14" thru_hole circle (at 8.98 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P14})`);
fp.push(`(pad "15" thru_hole circle (at 6.44 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P15})`);
fp.push(`(pad "16" thru_hole circle (at 3.9 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P16})`);
fp.push(`(pad "17" thru_hole circle (at 1.36 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P17})`);
fp.push(`(pad "18" thru_hole circle (at -1.18 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P18})`);
fp.push(`(pad "19" thru_hole circle (at -3.72 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P19})`);
fp.push(`(pad "20" thru_hole circle (at -6.26 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P20})`);
fp.push(`(pad "23" thru_hole circle (at -8.42 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P23})`);
fp.push(`(pad "24" thru_hole circle (at -10.96 ${flipN(flip, -0.01)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask" "In1.Cu" "In2.Cu" "In3.Cu" "In4.Cu" "In5.Cu" "In6.Cu" "In7.Cu" "In8.Cu" "In9.Cu" "In10.Cu" "In11.Cu" "In12.Cu" "In13.Cu" "In14.Cu" "In15.Cu" "In16.Cu" "In17.Cu" "In18.Cu" "In19.Cu" "In20.Cu" "In21.Cu" "In22.Cu" "In23.Cu" "In24.Cu" "In25.Cu" "In26.Cu" "In27.Cu" "In28.Cu" "In29.Cu" "In30.Cu") (remove_unused_layers no)  ${p.P24})`);

// Drawings on B.SilkS
fp.push(`(fp_text user "P3" (at -3 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P9" (at 12 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P10" (at 14.5 ${flipN(flip, -4.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P4" (at -0.5 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P8" (at 9.5 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P0" (at -8 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P7" (at 7 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P2" (at -5.5 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P5" (at 2 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P1" (at -10.5 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);
fp.push(`(fp_text user "P6" (at 4.5 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? "" : " mirror"})))`);

// Drawings on F.SilkS
fp.push(`(fp_text user "P0" (at -8 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P6" (at 4.5 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P10" (at 14.5 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P8" (at 9.5 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P1" (at -10.5 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P7" (at 7 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P3" (at -3 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P2" (at -5.5 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P9" (at 12 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P4" (at -0.5 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);
fp.push(`(fp_text user "P5" (at 2 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 90) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -0.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "doru tht" (at 0 ${flipN(flip, 2)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Footprint" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

