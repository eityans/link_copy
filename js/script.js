
var title = document.title;
var url = location.href+'';
var text = "["+title+"]("+url+")";
var textBox = document.createElement("textarea");
textBox.setAttribute("id", "target");
textBox.setAttribute("type", "hidden");
textBox.textContent = text.toString();;
document.body.appendChild(textBox);

textBox.select();
document.execCommand('copy');
document.body.removeChild(textBox);
