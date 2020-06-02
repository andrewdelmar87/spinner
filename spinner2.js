const char = ['\r|', '\r/', '\r-', '\r\\', '\r|']
const delay = 100;

let i = 0;
const spinner = function () {  
if (i < char.length) {
  process.stdout.write(char[i]);
  i++;
  setTimeout(spinner, delay);
} else {
  console.log('');  
  }
}
spinner();