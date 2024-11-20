setInterval(time, 1000);
function time(){
    const date  = new Date();


    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    hours = hours ? hours :12;
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}  ${ampm}`;

}
function todaysDate(){
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    document.getElementById("date").innerText = `${month}, ${day}, ${year}`;
}
window.onload = todaysDate


async function getJokes() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json();
    console.log(data)
    alert(data.setup);
    setInterval(alert(data.punchline), 5000)
    
}
