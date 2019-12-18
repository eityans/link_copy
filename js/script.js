
var title = document.title;
var url = location.href+'';
var text = "["+title+"]("+url+")";
var listener = function(e){
  e.clipboardData.setData("text/plain" , text);
  e.preventDefault();
  document.removeEventListener("copy", listener);
}
document.addEventListener("copy" , listener);
document.execCommand('copy');
