import fs from 'fs';

const SRC = "D:/My knowledge/AI_Workflow/Syna's Workshop (〃∀〃)/✍️ Writing Projects/Fanfictions (同人作品)/知妙 海维";
const DEST = "C:/Users/Schlaflied/AppData/Local/Temp/room-work/schlaflied-room";

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function panel(paras, id, active) {
  const ps = paras.map(p => '<p>' + esc(p) + '</p>').join('');
  return '<div class="ep-panel' + (active ? ' active' : '') + '" data-ep="' + id + '">' + ps + '</div>';
}

const summer = JSON.parse(fs.readFileSync(SRC + '/夏日幻影.md.paras.json', 'utf8')).slice(0, 300);
const daylight = JSON.parse(fs.readFileSync(SRC + '/Daylight.md.paras.json', 'utf8')).slice(0, 155);
const grad = JSON.parse(fs.readFileSync(SRC + '/毕业（Graduation）.md.paras.json', 'utf8')).slice(0, 303);

fs.writeFileSync(DEST + '/zh_panel0.html', panel(summer, '0', true), 'utf8');
fs.writeFileSync(DEST + '/zh_panel1.html', panel(daylight, '1', false), 'utf8');
fs.writeFileSync(DEST + '/zh_panel2.html', panel(grad, '2', false), 'utf8');

console.log('done', summer.length, daylight.length, grad.length);
