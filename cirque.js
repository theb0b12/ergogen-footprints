module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P10: { type: 'net', value: undefined },
    P11: { type: 'net', value: undefined },
    P12: { type: 'net', value: undefined },
    P13: { type: 'net', value: undefined },
    P14: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
    P5: { type: 'net', value: undefined },
    P6: { type: 'net', value: undefined },
    P7: { type: 'net', value: undefined },
    P8: { type: 'net', value: undefined },
    P9: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "FPC-SMD_FPC05012-09200-.5mm-rev"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd rect (at 2.75 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at 2.25 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P2})`);
fp.push(`(pad "3" smd rect (at 1.75 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P3})`);
fp.push(`(pad "4" smd rect (at 1.25 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P4})`);
fp.push(`(pad "5" smd rect (at 0.75 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P5})`);
fp.push(`(pad "6" smd rect (at 0.25 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P6})`);
fp.push(`(pad "7" smd rect (at -0.25 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P7})`);
fp.push(`(pad "8" smd rect (at -0.75 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P8})`);
fp.push(`(pad "9" smd rect (at -1.25 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P9})`);
fp.push(`(pad "10" smd rect (at -1.75 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P10})`);
fp.push(`(pad "11" smd rect (at -2.25 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P11})`);
fp.push(`(pad "12" smd rect (at -2.75 ${flipN(flip, 1.362)} ${flipR(flip, p.r + 0)}) (size 0.28 1.25) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P12})`);
fp.push(`(pad "13" smd rect (at 4.55 ${flipN(flip, -1.362)} ${flipR(flip, p.r + 180)}) (size 1.8 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P13})`);
fp.push(`(pad "14" smd rect (at -4.55 ${flipN(flip, -1.362)} ${flipR(flip, p.r + 180)}) (size 1.8 2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Paste" "${(flip ? "B" : "F")}.Mask")  ${p.P14})`);

// Drawings on B.SilkS
fp.push(`(fp_text reference "J2" (at -0.232 ${flipN(flip, 2.448)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") hide (effects (font (size 1.143 1.143) (thickness 0.152)) (justify right${ flip ? "" : " mirror"})) )`);

// Drawings on F.SilkS
fp.push(`(fp_text value "CIRQUE" (at 0 ${flipN(flip, 3.556)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.125)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start -5.5 ${flipN(flip, -4.971)}) (end -5.5 ${flipN(flip, -2.588)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -5.5 ${flipN(flip, -0.137)}) (end -5.5 ${flipN(flip, 1.524)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start -5.5 ${flipN(flip, 1.524)}) (end -3.131 ${flipN(flip, 1.524)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, -4.971)}) (end -5.5 ${flipN(flip, -4.971)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, -4.971)}) (end 5.5 ${flipN(flip, -2.588)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, -0.137)}) (end 5.5 ${flipN(flip, 1.524)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start 5.5 ${flipN(flip, 1.524)}) (end 3.131 ${flipN(flip, 1.524)}) (stroke (width 0.254) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center -3.429 ${flipN(flip, 2.032)}) (end -3.302 ${flipN(flip, 2.032)}) (stroke (width 0.254) (type solid)) (fill none) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "C:/keyboards/hazel.pretty/models/TF31-12S-0.5SH.step" (offset (xyz 0 0.5 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 180)))`);

// Properties
// fp.push(`(property "Sheetfile" "bw2.kicad_sch")`);
// fp.push(`(property "Sheetname" "")`);
// fp.push(`(property "ki_description" "Generic connector, single row, 01x12, script generated")`);
// fp.push(`(property "ki_keywords" "connector")`);

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

