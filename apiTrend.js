

    function gets(){

        if(!!document.getElementById("mv_img")){
        const element = document.getElementById("mv_img");
        element.remove();}

        
    let mov=document.getElementById("myText").value;
const url='https://api.themoviedb.org/3/movie/popular?api_key=bfac75eed7ea2964815538e5c47534fa&language=en-US&page=1';



async function getdata(){
const response=await fetch(url);

const data= await response.json();

alert(data.results.length);

for(var i=0;i<data.results.length;i++){
const img = document.createElement("img");
img.id="mv_img";
img.src = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+data.results[i].poster_path;
document.body.appendChild(img);
const p = document.createElement("p");
p.id="mv_title"
p.innerHTML=data.results[i].original_title+'\t('+data.results[i].release_date.substring(0,4)+')';
document.body.appendChild(p);
}
}
getdata();
    }

