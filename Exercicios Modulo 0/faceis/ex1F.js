function pausecomp(millis) {
    var date = new Date();
    console.log(date);
    var curDate = null;
    do {
      curDate = new Date();
      console.log(curDate);
    } while (curDate - date < millis);
    console.log(curDate - date);
  }

  pausecomp(3000);