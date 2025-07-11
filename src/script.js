
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


// registretion form
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzBFtLeAmUtRi8x0DxU2saRzWKjxYU_tVPVwhAeNFQh7uYoroFl-WSwu0m2JaBpCPiH/exec'
    const form = document.forms['submit-to-google-sheet']

    const btn = document.getElementById('formSubmitBtn')
    const nameInp = document.getElementById('nameInp')
    const phoneInp = document.getElementById('phoneInp')
    const emailInp = document.getElementById('emailInp')
    const formHed = document.getElementById('formHed');
    const formContaint = document.getElementById('formContaint');
    const formLoadingAni = document.getElementById('formLoadingAni');
    const formBox = document.getElementById('formBox');
    const submitedParaSec = document.createElement('div');


    //when client click on submit button
    btn.addEventListener('click', () =>{
    let nameInpVal = nameInp.value;
    let phoneInpVal = phoneInp.value;
    let emailInpVal = emailInp.value;
    
    if (nameInpVal,phoneInpVal,emailInpVal === "" ) {
        return;
    } else {
        //submiting animation
        btn.innerHTML= `<div class="loadingio-spinner-spin-2by998twmg8"><div class="ldio-yzaezf3dcmj">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
        </div></div><h1>submiting</h1>`;
    }
    })

    //when form submited
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {

        //submited animation (2s)
        formContaint.innerHTML = `<div id="check-animation" class="check-animation">
                    <svg id="submitedSvg" class="submitedSvg" viewBox="-100 -100 260 260">
                        <circle class="circle" cx="26" cy="26"/>
                        <path class="check" d="M16 27 L23 34 L36 20" />
                    </svg>
                    <h1 class="submitedText">Submited</h1>
                </div>`;
        form.reset();
        setTimeout(() => 
        {
            //remove animated icon
            formBox.style.backgroundColor = "#73946B";
           let submitedSvg = document.getElementById('submitedSvg');
           submitedSvg.remove();

           //animatad 'Thank You' test (0.6s)
           let checkAnimation = document.getElementById('check-animation');
           let submitedHed = document.createElement('h1');   
           submitedHed.textContent = "Thank You";
           submitedHed.classList = "registrationDoneHed";
           checkAnimation.appendChild(submitedHed);

           //1st end typing animatad msg(1s)
           setTimeout(() => {
            submitedParaSec.classList = "registrationDoneParaSec";
            
            let submitedPara = document.createElement('p');
            submitedPara.classList = "registrationDonePara";
            submitedPara.textContent = "your registration is done successfully."
            submitedParaSec.appendChild(submitedPara);
            checkAnimation.appendChild(submitedParaSec);
            }, 700);
        
            //2nd end typing animated msg(1s)
            setTimeout(() => {
                let submitedPara2 = document.createElement('p');
                submitedPara2.classList = "registrationDonePara2";
                submitedPara2.textContent = "our team will contact you within 24hr."

                submitedParaSec.appendChild(submitedPara2);
            }, 1800);

            //back button animation(0,7s)
            setTimeout(() => {
                let completeBtn = document.createElement('a');
                completeBtn.classList = "completeBtn";
                completeBtn.textContent = "Back To Home"
                completeBtn.setAttribute('href','/src/index.html#home');
                checkAnimation.appendChild(completeBtn);

            }, 3000);
        }, 2000);
      })
      .catch(error => console.error('Error!', error.message))
    })
