// let startBtn = document.getElementById('start'); 
// let stopBtn = document.getElementById('stop'); 
// let resetBtn = document.getElementById('reset'); 
// let lapBtn = document.getElementById('lap');
// let lapList = document.getElementById('lapList');

// startBtn.addEventListener('click', function () { 
// 	timer = true; 
// 	stopWatch(); 
// }); 

// stopBtn.addEventListener('click', function () { 
// 	timer = false; 
// }); 

// resetBtn.addEventListener('click', function () { 
// 	timer = false; 
// 	hour = 0; 
// 	minute = 0; 
// 	second = 0; 
// 	count = 0; 
//     lapList.innerHTML = '';
//     updateDisplay();
// 	document.getElementById('hr').innerHTML = "00"; 
// 	document.getElementById('min').innerHTML = "00"; 
// 	document.getElementById('sec').innerHTML = "00"; 
// 	document.getElementById('count').innerHTML = "00"; 
// }); 

// lapBtn.addEventListener('click', function () {
//     if (timer) {
//         addLap();
//     }
// });

// function addLap() {
//     let lapTime = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}.${formatTime(count)}`;
//     let lapItem = document.createElement('li');
//     lapItem.textContent = lapTime;
//     lapList.appendChild(lapItem);
// }

// function stopWatch() { 
// 	if (timer) { 
// 		count++; 

// 		if (count == 100) { 
// 			second++; 
// 			count = 0; 
// 		} 

// 		if (second == 60) { 
// 			minute++; 
// 			second = 0; 
// 		} 

// 		if (minute == 60) { 
// 			hour++; 
// 			minute = 0; 
// 			second = 0; 
// 		} 

// 		let hrString = hour; 
// 		let minString = minute; 
// 		let secString = second; 
// 		let countString = count; 

// 		if (hour < 10) { 
// 			hrString = "0" + hrString; 
// 		} 

// 		if (minute < 10) { 
// 			minString = "0" + minString; 
// 		} 

// 		if (second < 10) { 
// 			secString = "0" + secString; 
// 		} 

// 		if (count < 10) { 
// 			countString = "0" + countString; 
// 		} 

// 		document.getElementById('hr').innerHTML = hrString; 
// 		document.getElementById('min').innerHTML = minString; 
// 		document.getElementById('sec').innerHTML = secString; 
// 		document.getElementById('count').innerHTML = countString; 
// 		setTimeout(stopWatch, 10); 
// 	} 
// }




let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('reset');
    let lapBtn = document.getElementById('lap');
    let lapList = document.getElementById('lapList');

    let timer;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let count = 0;

    startBtn.addEventListener('click', function () {
        timer = true;
        stopWatch();
    });

    stopBtn.addEventListener('click', function () {
        timer = false;
    });

    resetBtn.addEventListener('click', function () {
        timer = false;
        hour = 0;
        minute = 0;
        second = 0;
        count = 0;
        lapList.innerHTML = '';
        updateDisplay();
    });

    lapBtn.addEventListener('click', function () {
        if (timer) {
            addLap();
        }
    });

    function addLap() {
        let lapTime = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}.${formatTime(count)}`;
        let lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }

    function stopWatch() {
        if (timer) {
            count++;

            if (count === 100) {
                second++;
                count = 0;
            }

            if (second === 60) {
                minute++;
                second = 0;
            }

            if (minute === 60) {
                hour++;
                minute = 0;
                second = 0;
            }

            updateDisplay();
            setTimeout(stopWatch, 10);
        }
    }

    function updateDisplay() {
        document.getElementById('hr').innerHTML = formatTime(hour);
        document.getElementById('min').innerHTML = formatTime(minute);
        document.getElementById('sec').innerHTML = formatTime(second);
        document.getElementById('count').innerHTML = formatTime(count);
    }

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
