let countdownElement = document.getElementById('countdown');
let flagElement = document.getElementById('flag');

setTimeout(function() {
    countdownElement.innerHTML = 10;
    setTimeout(function() {
        countdownElement.innerHTML = 9;
        setTimeout(function() {
            countdownElement.innerHTML = 8;
            setTimeout(function() {
                countdownElement.innerHTML = 7;
                setTimeout(function() {
                    countdownElement.innerHTML = 6;
                    setTimeout(function() {
                        countdownElement.innerHTML = 5;
                        setTimeout(function() {
                            countdownElement.innerHTML = 4;
                            setTimeout(function() {
                                countdownElement.innerHTML = 3;
                                setTimeout(function() {
                                    countdownElement.innerHTML = 2;
                                    setTimeout(function() {
                                        countdownElement.innerHTML = 1;
                                        setTimeout(function() {
                                            countdownElement.innerHTML = "Happy Independence Day!";
                                            flagElement.style.display = "block"; // Show the flag
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
