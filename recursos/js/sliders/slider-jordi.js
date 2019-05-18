window.addEventListener("load", function(){

    let imagenesSlider = document.querySelectorAll(".imagen-slider");
    let delante = document.querySelector(".delante");

    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;

    delante.addEventListener("click", adelantarImagen);
    
    function adelantarImagen() {

        //urls de miniaturas de jordi
        let act1 = "https://drive.google.com/file/d/13Qp15O1YeEQUyuI64s6C-3nKU1YOO5bh/view?usp=sharing";
        let cartaPresentacion = "https://drive.google.com/file/d/1OFs-rL6dYL5iQENFs4kF3lAbQRtcKJtF/view?usp=sharing";
        let curriculum = "https://drive.google.com/file/d/1obUmJP-csaMPUD3p2-Z223y50sFa4Nhz/view?usp=sharing";

        let imagenes1 = ["act 1", "contrato 4"];
        let links1 = [act1];

        let imagenes2 = ["carta de presentacio2", "lliurament 3 - 5"];
        let links2 = [cartaPresentacion];

        let imagenes3 = ["curriculum 3", "lliurament 4 - 6"];
        let links3 = [curriculum];

        
        if(cont1 < imagenes1.length-1){
            
            cont1++;
            links1++;

            cont2++;
            cont3++;

        }else{

            cont1 = 0;
            links1 = 0;

            cont2 = 0;
            cont3 = 0;
        }

        imagenesSlider[0].src = "../img/jordi miniaturas/" + imagenes1[cont1] + ".PNG";
        imagenesSlider[1].src = "../img/jordi miniaturas/" + imagenes2[cont2] + ".PNG";
        imagenesSlider[2].src = "../img/jordi miniaturas/" + imagenes3[cont3] + ".PNG";
       
       
    }
    
});