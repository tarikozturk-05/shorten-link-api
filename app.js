const input = document.querySelector("#input")
const btn = document.querySelector(".btn")
const main = document.querySelector(".main")
const uyarı = document.querySelector(".uyarı")

const getApi= async()=>{
const link = input.value;
const url =
  `https://api.shrtco.de/v2/shorte?url=${link}/very/long/link.html`; 
try{
const res = await fetch(url)
const veri = await res.json()
console.log(veri)
if(!res.ok){
     hata();
    throw new Error("Uyarı sıkıntı var!!")
   
}

const {
  result: { full_short_link },
  result: { short_link },
} = veri;


const par = document.createElement("p")
par.innerText = input.value
main.appendChild(par)

const par2 = document.createElement("a");
par2.href = full_short_link;
par2.innerText = short_link;
par2.target= "_blank";

main.appendChild(par2);





}
catch(error){
    console.log(error)
}

}

const hata=()=>{
uyarı.innerHTML = `Api de sıkıntı var SORRYY:(`

}


btn.addEventListener("click",()=>{
getApi();
})