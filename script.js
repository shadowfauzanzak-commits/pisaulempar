let score = 0;

function throwKnife(){

    let knife = document.getElementById("knife");

    let posisi = 20;

    let gerak = setInterval(()=>{

        posisi += 10;

        knife.style.bottom = posisi + "px";


        if(posisi >= 330){

            clearInterval(gerak);


            score++;

            document.getElementById("score").innerHTML = score;


            // Pisau kembali
            knife.style.bottom = "20px";

        }

    },50);

}