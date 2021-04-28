export function timeSince(date) {
// debugger
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  // 24*60*
  var aDay =60*1000;
  console.log(timeSince(new Date(Date.now()-aDay)));
  console.log(timeSince(new Date(Date.now()-aDay*2)));
  console.log(timeSince(new Date(Date.now())));


  export const processUrl = (baseUrl) => {
    let url = new URL(baseUrl.toString());
    return url.hostname;
  }