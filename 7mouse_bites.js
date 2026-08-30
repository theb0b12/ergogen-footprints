module.exports = {
  params: {
    designator: 'XX',
    side: 'F',

  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "Mouse_Bites_7"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, -4.8)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, -3.2)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, -1.6)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 1.6)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 3.2)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 4.8)} ${flipR(flip, p.r + 0)}) (size 1.1 1.1) (drill 1.1) (layers "F&B.Cu" "*.Mask") )`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 ${flipN(flip, -4)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "Mouse_Bites_7" (at 0 ${flipN(flip, 4)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
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

// this footprint was made by scottokeebs and put through kicad2ergogen