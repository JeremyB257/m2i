let words = ['Responsive Design', 'Performance', 'SEO', 'Accessibilité'],
  part,
  i = 0,
  offset = 0,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 100;

let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= words.length) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.getElementById('word').innerHTML = part;
  }, speed);
};
