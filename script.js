let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');


const allCards = document.getElementById('allCards');
function totalCount(){
    total.innerText = allCards.children.length;
}

totalCount();

// toggle function writing

let allFilterBtn = document.getElementById('allFilterBtn');
let interviewFilterBtn = document.getElementById('interviewFilterBtn');
let rejectedFilterBtn = document.getElementById('rejectedFilterBtn');

function toggleBtn(id){
    allFilterBtn.classList.add('bg-gray-200', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-gray-200', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-gray-200', 'text-[#64748B]');

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');


    const selectedBtn = document.getElementById(id);

    selectedBtn.classList.remove('bg-gray-200', 'text-[#64748B]');
    selectedBtn.classList.add('bg-[#3B82F6]', 'text-white');
}
