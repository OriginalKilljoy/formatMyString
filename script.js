//Her lagres navnet
let userName = '';

//Denne tar imot informasjonen som kommer inn fra input feltet, og lagrer det som userName
function saveName(input){
    userName = input;
}

//Denne viser frem navnet
function showName(){
    userName = firstLetterCapitalize(userName);
    document.getElementById('display').innerHTML = userName;
}

//Denne gjør første bokstav stor + viser resten av navnet også i stedet for å fjerne det(slice)
function firstLetterCapitalize(text){
    return userName.charAt(0).toUpperCase() + userName.slice(1);
}

