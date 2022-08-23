var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    //should allow blog.html to grab datetime and place it in card-title with some modification although would rather use .getMonth/.getDay/.getDate()

var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

    //https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
    //Should also grab last post time.