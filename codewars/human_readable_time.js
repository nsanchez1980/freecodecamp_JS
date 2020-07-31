function humanReadable(seconds) {
    let HH = 0;
    let MM = 0;
    while (seconds>59){
        seconds = seconds - 60;
        MM = MM + 1;
    }
    while (MM>59){
        MM = MM - 60;
        HH = HH + 1
    }
    return String(HH+100).slice(1)+":"+String(MM+100).slice(1)+":"+String(seconds+100).slice(1);
}


console.log(humanReadable(0), '00:00:00', 'humanReadable(0)');
console.log(humanReadable(5), '00:00:05', 'humanReadable(5)');
console.log(humanReadable(60), '00:01:00', 'humanReadable(60)');
console.log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(359999), '99:59:59', 'humanReadable(359999)');