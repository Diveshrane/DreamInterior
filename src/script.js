
// hamburger manu
    const navHight = document.getElementById("sectionList");
    const hamburger = document.getElementById('hamb')
    const fLine = document.getElementById('firstLine')
    const sLine = document.getElementById('secondLine')
    const closeHamb = document.querySelectorAll('.closeHamb')
    const cityList = document.getElementById('cityList');
    const dropDown = document.getElementById('dropDown');
    const DropDownIcon = document.getElementById('DropDownIcon');

    function tog(){
        navHight.classList.toggle("sectionListHeight")
        fLine.classList.toggle("firstLineRotate")
        sLine.classList.toggle("secondLineRotate")
    }

    hamburger.addEventListener('click',tog)
    for (let i = 0; i < closeHamb.length; i++) {
        closeHamb[i].addEventListener('click',tog);
    }

    cityList.addEventListener('click', () =>{
        dropDown.classList.toggle('cityHight');
        DropDownIcon.classList.toggle('DropDownIconRotate');
    })

// our design section's scroll button active
    const backScroll = document.getElementById('backScroll');
    const forwardScroll = document.getElementById('forwardScroll');
    const slider = document.querySelector(".slider");
    const designSec =document.querySelector(".designSec");

    if (slider.scrollLeft == 0) {
        backScroll.style.opacity = "0";
    }
    slider.addEventListener('scroll',()=>{
        console.clear();
        let swidth = screen.width*85/100;
        console.log(screen.width);
        console.log(swidth);
        
        console.log((6 - swidth/300)*300);
        console.log(slider.scrollLeft);
        if(slider.scrollLeft == 0)
        {
            backScroll.style.opacity = "0";
        }
        else if(slider.scrollLeft > 0)
        {
            backScroll.style.opacity = "1";
        }

        if(slider.scrollLeft >= (6 - swidth/300)*300 )
        {
            forwardScroll.style.opacity = "0";
        }
        else if(slider.scrollLeft < (6 - swidth/300)*300)
        {
            forwardScroll.style.opacity = "1";
        }
    })

    backScroll.addEventListener('click',()=>{
        slider.scrollLeft -= 300;
    })
    forwardScroll.addEventListener('click',()=>{
        slider.scrollLeft += 300;
    })