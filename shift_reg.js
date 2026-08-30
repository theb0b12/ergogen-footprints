module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: 'Qb' },
    P2: { type: 'net', value: 'Qc' },
    P3: { type: 'net', value: 'Qd' },
    P4: { type: 'net', value: 'Qe' },
    P5: { type: 'net', value: 'Qf' },
    P6: { type: 'net', value: 'Qg' },
    P7: { type: 'net', value: 'Qh' },
    P8: { type: 'net', value: 'GND' },
    P9: { type: 'net', value: 'VCC' },
    P10: { type: 'net', value: 'Qa' },
    P11: { type: 'net', value: 'SER' },
    P12: { type: 'net', value: 'OE' },
    P13: { type: 'net', value: 'RCLK' },
    P14: { type: 'net', value: 'SRCLK' },
    P15: { type: 'net', value: 'SRCLR' },
    P16: { type: 'net', value: 'Qhp' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint 74HC595`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "<b>Small Outline package</b> 150 mil")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd rect (at -4.445 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P1})`);
fp.push(`(pad "2" smd rect (at -3.175 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P2})`);
fp.push(`(pad "3" smd rect (at -1.905 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P3})`);
fp.push(`(pad "4" smd rect (at -0.635 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P4})`);
fp.push(`(pad "5" smd rect (at 0.635 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P5})`);
fp.push(`(pad "6" smd rect (at 1.905 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P6})`);
fp.push(`(pad "7" smd rect (at 3.175 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P7})`);
fp.push(`(pad "8" smd rect (at 4.445 ${flipN(flip, 2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P8})`);
fp.push(`(pad "9" smd rect (at 4.445 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P9})`);
fp.push(`(pad "10" smd rect (at 3.175 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P10})`);
fp.push(`(pad "11" smd rect (at 1.905 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P11})`);
fp.push(`(pad "12" smd rect (at 0.635 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P12})`);
fp.push(`(pad "13" smd rect (at -0.635 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P13})`);
fp.push(`(pad "14" smd rect (at -1.905 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P14})`);
fp.push(`(pad "15" smd rect (at -3.175 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P15})`);
fp.push(`(pad "16" smd rect (at -4.445 ${flipN(flip, -2.8)} ${flipR(flip, p.r + 0)}) (size 0.6 1.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.P16})`);

// Drawings on F.Fab
fp.push(`(fp_text value "74HC595" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 0.787401574803 0.787401574803) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_poly (pts (xy -0.890254 ${flipN(flip, -3.0988)}) (xy -0.381 ${flipN(flip, -3.0988)}) (xy -0.381 ${flipN(flip, -1.95856)}) (xy -0.890254 ${flipN(flip, -1.95856)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -4.70042 ${flipN(flip, 1.9558)}) (xy -4.191 ${flipN(flip, 1.9558)}) (xy -4.191 ${flipN(flip, 3.09974)}) (xy -4.70042 ${flipN(flip, 3.09974)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -3.42933 ${flipN(flip, 1.9558)}) (xy -2.921 ${flipN(flip, 1.9558)}) (xy -2.921 ${flipN(flip, 3.0991)}) (xy -3.42933 ${flipN(flip, 3.0991)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -2.15947 ${flipN(flip, 1.9304)}) (xy -1.651 ${flipN(flip, 1.9304)}) (xy -1.651 ${flipN(flip, 3.07407)}) (xy -2.15947 ${flipN(flip, 3.07407)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -0.890714 ${flipN(flip, 1.9558)}) (xy -0.381 ${flipN(flip, 1.9558)}) (xy -0.381 ${flipN(flip, 3.10478)}) (xy -0.890714 ${flipN(flip, 3.10478)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -2.16023 ${flipN(flip, -3.0988)}) (xy -1.651 ${flipN(flip, -3.0988)}) (xy -1.651 ${flipN(flip, -1.95691)}) (xy -2.16023 ${flipN(flip, -1.95691)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -3.43131 ${flipN(flip, -3.0988)}) (xy -2.921 ${flipN(flip, -3.0988)}) (xy -2.921 ${flipN(flip, -1.95712)}) (xy -3.43131 ${flipN(flip, -1.95712)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy -4.70327 ${flipN(flip, -3.0988)}) (xy -4.191 ${flipN(flip, -3.0988)}) (xy -4.191 ${flipN(flip, -1.95758)}) (xy -4.70327 ${flipN(flip, -1.95758)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 0.381138 ${flipN(flip, 1.9558)}) (xy 0.889 ${flipN(flip, 1.9558)}) (xy 0.889 ${flipN(flip, 3.09992)}) (xy 0.381138 ${flipN(flip, 3.09992)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 1.652 ${flipN(flip, 1.9558)}) (xy 2.159 ${flipN(flip, 1.9558)}) (xy 2.159 ${flipN(flip, 3.10069)}) (xy 1.652 ${flipN(flip, 3.10069)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 2.92247 ${flipN(flip, 1.9558)}) (xy 3.429 ${flipN(flip, 1.9558)}) (xy 3.429 ${flipN(flip, 3.10036)}) (xy 2.92247 ${flipN(flip, 3.10036)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 4.19314 ${flipN(flip, 1.9558)}) (xy 4.699 ${flipN(flip, 1.9558)}) (xy 4.699 ${flipN(flip, 3.10038)}) (xy 4.19314 ${flipN(flip, 3.10038)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 0.381136 ${flipN(flip, -3.0988)}) (xy 0.889 ${flipN(flip, -3.0988)}) (xy 0.889 ${flipN(flip, -1.9565)}) (xy 0.381136 ${flipN(flip, -1.9565)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 1.65367 ${flipN(flip, -3.0988)}) (xy 2.159 ${flipN(flip, -3.0988)}) (xy 2.159 ${flipN(flip, -1.95897)}) (xy 1.65367 ${flipN(flip, -1.95897)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 2.92672 ${flipN(flip, -3.0988)}) (xy 3.429 ${flipN(flip, -3.0988)}) (xy 3.429 ${flipN(flip, -1.95963)}) (xy 2.92672 ${flipN(flip, -1.95963)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);
fp.push(`(fp_poly (pts (xy 4.19273 ${flipN(flip, -3.0988)}) (xy 4.699 ${flipN(flip, -3.0988)}) (xy 4.699 ${flipN(flip, -1.95661)}) (xy 4.19273 ${flipN(flip, -1.95661)})) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.01))`);

// Drawings on F.SilkS
//fp.push(`(fp_text reference REF** (at -6.36252 ${flipN(flip, -0.63624)} ${flipR(flip, p.r + 900) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1.00196850394 1.00196850394) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
fp.push(`(fp_line (start 5.08 ${flipN(flip, -1.9558)}) (end -5.08 ${flipN(flip, -1.9558)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1524))`);
fp.push(`(fp_line (start -5.08 ${flipN(flip, 1.9558)}) (end 5.08 ${flipN(flip, 1.9558)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1524))`);
fp.push(`(fp_line (start 5.08 ${flipN(flip, 1.9558)}) (end 5.08 ${flipN(flip, -1.9558)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1524))`);
fp.push(`(fp_arc (start -5.08 ${flipN(flip, 0.0)}) (end -5.08 ${flipN(flip, -0.635)}) (angle 180.0) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1524))`);
fp.push(`(fp_line (start -5.08 ${flipN(flip, 1.6002)}) (end 5.08 ${flipN(flip, 1.6002)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.0508))`);
fp.push(`(fp_line (start -5.08 ${flipN(flip, 1.9558)}) (end -5.08 ${flipN(flip, 0.635)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1524))`);
fp.push(`(fp_line (start -5.08 ${flipN(flip, -0.635)}) (end -5.08 ${flipN(flip, -1.9558)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.1524))`);

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

