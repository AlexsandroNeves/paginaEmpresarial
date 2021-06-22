function carrosel() {
    $('.banner').slick({

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [{
                breakpoint: 800,
                settings: {
                    infinite: true,
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 880,
                settings: {
                    infinite: true,
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });
}


function menuMobile() {
    document.querySelector(".menuMobile").addEventListener("click", function (e) {   
        var header = document.querySelector('.header');
        var menu = document.querySelector(".ul");

            if(menu.style.display =='flex'){
                menu.style.display='none';  
                header.style.marginBottom = "0px";
                header.style.transition = "all 0.5s ease-out";    
            }else{
                menu.style.display = 'flex';
                header.style.marginBottom = "147px";
                header.style.transition = "all 0.5s ease-out";
            }
       
    })
}

function acessarEquipe() {

    var equipe = document.querySelector('.nossa-equipe');
    var transition = document.querySelector(".trasition-button");

    equipe.style.display = "none";
    document.querySelector(".botao-equipe").addEventListener("click", function (e) {

        if (equipe.style.display == "none") {
            equipe.style.display = "flex";
            transition.style.transform = "rotate(0deg)";

        } else {
            equipe.style.display = "none";
            transition.style.transform = "rotate(-90deg)";

        }
    })
}