module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    VIK1: { type: 'net', value: 'V33' },
    VIK2: { type: 'net', value: 'GND' },
    VIK3: { type: 'net', value: 'SDA' },
    VIK4: { type: 'net', value: 'SCL' },
    VIK5: { type: 'net', value: 'RGB_OUT' },
    VIK6: { type: 'net', value: 'V5' },
    VIK7: { type: 'net', value: 'VIK_GPIO1' },
    VIK8: { type: 'net', value: 'MOSI' },
    VIK9: { type: 'net', value: 'VIK_GPIO2' },
    VIK10: { type: 'net', value: 'VIK_CS' },
    VIK11: { type: 'net', value: 'MISO' },
    VIK12: { type: 'net', value: 'SCK' }
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "vik-keyboard-connector-horizontal"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd rect (at -2.75 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at -2.25 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P2})`);
fp.push(`(pad "3" smd rect (at -1.75 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P3})`);
fp.push(`(pad "4" smd rect (at -1.25 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P4})`);
fp.push(`(pad "5" smd rect (at -0.75 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P5})`);
fp.push(`(pad "6" smd rect (at -0.25 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P6})`);
fp.push(`(pad "7" smd rect (at 0.25 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P7})`);
fp.push(`(pad "8" smd rect (at 0.75 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P8})`);
fp.push(`(pad "9" smd rect (at 1.25 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P9})`);
fp.push(`(pad "10" smd rect (at 1.75 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P10})`);
fp.push(`(pad "11" smd rect (at 2.25 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P11})`);
fp.push(`(pad "12" smd rect (at 2.75 ${flipN(flip, -2.038)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P12})`);
fp.push(`(pad "13" smd rect (at 4.55 ${flipN(flip, 0.686)} ${flipR(flip, p.r + 0)}) (size 1.8 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P13})`);
fp.push(`(pad "14" smd rect (at -4.55 ${flipN(flip, 0.686)} ${flipR(flip, p.r + 0)}) (size 1.8 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P14})`);

// Drawings on User.2
fp.push(`(fp_text user "C479750" (at 0 ${flipN(flip, 0.75)} ${flipR(flip, p.r + 0) % 180}) (layer "User.2") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.Fab
fp.push(`(fp_text value "vik-keyboard-connector-horizontal" (at 0.05 ${flipN(flip, 5.09)} ${flipR(flip, p.r + unlocked) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.SilkS
fp.push(`(fp_text reference "REF**" (at 4.25 ${flipN(flip, -3.5)} ${flipR(flip, p.r + unlocked) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "3v3" (at -5.9 ${flipN(flip, -2.7)} ${flipR(flip, p.r + unlocked) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 0.75 0.75) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "VIK OUT" (at -3.05 ${flipN(flip, -3.48)} ${flipR(flip, p.r + unlocked) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify left bottom${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start -5.5 ${flipN(flip, -2.2)}) (end -3.131 ${flipN(flip, -2.2)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -5.5 ${flipN(flip, -0.539)}) (end -5.5 ${flipN(flip, -2.2)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -5.5 ${flipN(flip, 4.295)}) (end -5.5 ${flipN(flip, 1.912)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, -2.2)}) (end 3.131 ${flipN(flip, -2.2)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, -0.539)}) (end 5.5 ${flipN(flip, -2.2)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, 4.295)}) (end -5.5 ${flipN(flip, 4.295)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, 4.295)}) (end 5.5 ${flipN(flip, 1.912)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center -3.429 ${flipN(flip, -2.708)}) (end -3.302 ${flipN(flip, -2.708)}) (stroke (width 0.254) (type solid)) (fill none) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// Drawings on Cmts.User
fp.push(`(fp_line (start -3.5 ${flipN(flip, 2)}) (end -3.5 ${flipN(flip, 4.5)}) (stroke (width 0.12) (type default)) (layer "Cmts.User") )`);
fp.push(`(fp_line (start 3.5 ${flipN(flip, 2)}) (end 3.5 ${flipN(flip, 4.5)}) (stroke (width 0.12) (type default)) (layer "Cmts.User") )`);

// 3D Models
fp.push(`(model "../../kicad/3dmodels/vik-connector-horizontal.stp" (offset (xyz -2.75 2.3 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

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

