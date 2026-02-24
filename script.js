let interviewList = [];
let rejectedList = [];


// total counter
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');
const allCards = document.getElementById('allCards');


let filterSection = document.getElementById('filtered-cards');


function totalCount(){
    total.innerText = allCards.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;

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

    if(id == 'interviewFilterBtn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden')
    }
    else{
        allCards.classList.remove('hidden')
        filterSection.classList.add('hidden')

    }
}

// cards info manipulation
let mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function(event){

    if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;  
    
    const jobTitle = parentNode.querySelector('.job-Title').innerText;
    const skill = parentNode.querySelector('.skill').innerText; 
    const jobDetails = parentNode.querySelector('.job-details').innerText; 
    const status = parentNode.querySelector('.status').innerText; 
    const note = parentNode.querySelector('.note').innerText; 

    const cardInfo = {
        jobTitle,
        skill,
        jobDetails,
        status,
        note
    }    

    const existCheck = interviewList.find(item => item.jobTitle == cardInfo.jobTitle); 
    parentNode.querySelector('.status').innerText = 'APPLIED';

    if(!existCheck){
        interviewList.push(cardInfo);
    }    
    
    interviewAction();

   }
})


function interviewAction(){
    filterSection.innerHTML = '';

    for(let interview of interviewList){        
        let div = document.createElement('div');
        div.className = 'card flex justify-between p-6 shadow-lg rounded-lg mt-4';
        div.innerHTML = `
                    <div class="space-y-5">
                    <div>
                        <h4 class="job-Title font-semibold text-[18px]">Mobile First Corp</h4>
                        <p class="skill text-[#64748B]">React Native Developer</p>
                    </div>
                    <p class="job-details text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>

                    <p class="status w-[125px] bg-blue-100 px-3 py-2 text-[#002C5C] rounded-sm">APPLIED</p>

                    <p class="note text-[#64748B]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                    <div class="flex gap-2">
                        <button class="interview-btn border border-green-500 rounded-sm font-bold text-green-500 px-3 py-2">INTERVIEW</button>

                        <button class="rejected-btn border border-red-500 rounded-sm font-bold text-red-500 px-3 py-2">REJECTED</button>
                    </div>
                </div>
                    <!-- card delete part -->
                <div class="border w-8 h-8 rounded-full flex justify-center items-center opacity-40">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
        `
        filterSection.appendChild(div);

    }
}