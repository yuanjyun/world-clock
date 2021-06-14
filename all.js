const placeEl = document.querySelectorAll('.place');
const dateEl = document.querySelectorAll('.date');
const timeEl = document.querySelectorAll('.time');

const zones = [
    "America/NEW_YORK",
    "Europe/LONDON",
    "Asia/BANGKOK",
    "Asia/TAIPEI",
    "Australia/SYDNEY",
];

function createTime(){
    zones.forEach((item,index) =>{
        const time = new Date();
        const years = time.toLocaleString("en-GB",{ year: 'numeric', timeZone: zones[index]});
        const month = time.toLocaleString("en-GB",{ month: 'short', timeZone: zones[index]});
        const day = time.toLocaleString("en-GB",{ day: '2-digit', timeZone: zones[index]});
        const clock = time.toLocaleString("en-GB",{ hour12: false, hour: '2-digit', minute: '2-digit',timeZone: zones[index]});
 
        const area = zones[index].split('/')[1].replace('_', ' ');
        const tw = zones[3].replace('Asia/TAIPEI','TAIWAN');
        placeEl[index].innerHTML = area;
        placeEl[3].innerHTML = tw;
        dateEl[index].innerHTML = `${day} ${month}. ${years}`;
        timeEl[index].innerHTML = clock;
    })
}

setInterval(()=>{
    createTime()
} , 1000)




