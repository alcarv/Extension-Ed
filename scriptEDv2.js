//script do lefoso
const imp = document.querySelector('#imp');
const inpro = document.querySelector('#inpro');
const oncall = document.querySelector('#oncall');
const attempt = document.querySelector('#attempt');
const inactive = document.querySelector('#inactive');
const gtmBtn = document.querySelector('#gtmBtn');
const tasksBtn = document.querySelector('#tasksBtn');
mudStatus = () =>  {
    let count = 0;
    imp.addEventListener('click', (event) => {
        count ++;
        imp.src = 'images/implementedBtnAtv.svg'
        inpro.src = 'images/inProgressBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
            if(count%2 == 0) {  
                imp.src = 'images/educationOnlyBtn.svg'
                inpro.src = 'images/inProgressBtn.svg'
                attempt.src = 'images/attemptContactBtn.svg'
                inactive.src = 'images/inactiveBtn.svg'
            };
    });
    inpro.addEventListener('click', (event) => {
        inpro.src = 'images/inProgressBtnAtv.svg'
        imp.src = 'images/implementedBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
    });
    attempt.addEventListener('click', (event) => {
        attempt.src = 'images/attemptContactBtnAtv.svg'
        inpro.src = 'images/inProgressBtn.svg'
        inactive.src = 'images/inactiveBtn.svg'
        imp.src = 'images/implementedBtn.svg'
    });
    inactive.addEventListener('click', (event) => {
        inactive.src = 'images/inactiveBtnAtv.svg'
        imp.src = 'images/implementedBtn.svg'
        inpro.src = 'images/inProgressBtn.svg'
        attempt.src = 'images/attemptContactBtn.svg'
    });
    gtmBtn.addEventListener('click', (event) => {
        count ++;
        gtmBtn.src = 'images/gtmBtnAtv.svg'
        if(count%2 == 0) {
            gtmBtn.src = 'images/gtmBtn.svg'
        }
    });
    tasksBtn.addEventListener('click', (event) => {
        count ++;
        tasksBtn.src = 'images/tasksBtnAtv.svg'
        if(count%2 == 0) {
            tasksBtn.src = 'images/tasksBtn.svg'
        }
    });
};
mudStatus();

//Build de comentarios
