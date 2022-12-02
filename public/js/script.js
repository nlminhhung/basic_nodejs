const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const yourName = document.getElementById("yname");
const friendName = document.getElementById("fname");
const message = document.getElementById("message");

const Months = ['','January', 'February', 'March', 'April', 'May'
, 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

(function monthContainer()
{
    for (let i = 0; i < Months.length; i++)
    {
        const options = document.createElement('option');
        options.textContent = Months[i];
        monthSelect.appendChild(options);
    }
    monthSelect.value = '';
})();

function dayContainer(month)
{
    while (daySelect.firstChild)
    {
        daySelect.removeChild(daySelect.firstChild);
    }
    let daynum;
    if (month === '')
    {
        return;
    }
    else
    {
        if (month === 'January' || month=== 'March' || month=== 'May' || month ==='July' ||
   month=== 'August' || month=== 'October' || month === 'December')
   {
    daynum = 31;
   }
   else if (month === 'February')
   {
    daynum = 29;
   }
   else
   {
    daynum = 30;
   }
   for (let i = 1; i <= daynum; i++)
   {
    const options = document.createElement('option');
    options.textContent = i;
    daySelect.appendChild(options);
   }
    }
    
}
dayContainer(monthSelect.value);
monthSelect.onchange = function() {
    dayContainer(monthSelect.value);
}

document.getElementById("form").addEventListener("submit", function(e){
    // e.preventDefault();
    const yourNameVal = yourName.value;
    const friendNameVal = friendName.value;
    const day = daySelect.value;
    const month = monthSelect.value;
    const myMessage = message.value;
    
    localStorage.setItem('your-name', yourNameVal);
    localStorage.setItem('friend-name', friendNameVal);  
    localStorage.setItem('day', day);
    localStorage.setItem('month', month);  
    localStorage.setItem('message', myMessage);  
    // window.location.href = "index2"; 
})


