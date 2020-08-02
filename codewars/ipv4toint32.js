function ipToInt32(ip){
    return parseInt(ip.split(".")[3])+parseInt(ip.split(".")[2])*256+parseInt(ip.split(".")[1])*65536+parseInt(ip.split(".")[0])*16777216;
}



  console.log(ipToInt32("128.32.10.1"),2149583361);