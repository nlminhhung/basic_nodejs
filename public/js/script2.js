const yourName = localStorage.getItem('your-name');
const friendName = localStorage.getItem('friend-name');
const day = localStorage.getItem('day');
const month = localStorage.getItem('month');
const message = localStorage.getItem('message');
const printButton = document.getElementById("printButton");
const bgAudio = document.getElementById("bgAudio");
const btn = document.getElementById("printButton");

function From(yourName, friendName, message, day, month)
{
  if (message == '')
  {
      var defaultText = "A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always.";
      message = defaultText;
  }
    const a = document.createElement("p");
    const b = document.createElement("p");
    const c = document.createElement("p");
    const d = document.createElement("p");
    a.innerHTML = "From: " + yourName;
    b.innerHTML = "To: " + friendName;
    c.innerHTML = '<q>' + message + '</q>';
    c.style.lineHeight = "2em";
    d.innerHTML = "Date: " + month + " " + day;
    document.getElementById("container").appendChild(d);
    document.getElementById("container").appendChild(a);
    document.getElementById("container").appendChild(b);
    document.getElementById("container").appendChild(c);
}

From(yourName, friendName, message, day, month);


function Print()
{
  document.getElementById("footer").style.opacity = "0";
  var element = document.getElementById('body');
  html2pdf(element);
}

function copyText()
{
  navigator.clipboard.writeText('https://happy-birthday-website.onrender.com');
}