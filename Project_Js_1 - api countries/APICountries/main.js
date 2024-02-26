async function getData (countryNameFromUser) {
    let response = await fetch(`https://restcountries.com/v3.1/name/israel?fullText=true`);
        if (response.ok && response.status === 200) {
            return response.json();
        }
} 

function country (data) {
    console.log(data);
}

function updateUI () {
    let theData = getData();
    country(theData);

}

document.getElementById('btn').addEventListener('click', updateUI)