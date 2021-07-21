let medicinesContainerEl = document.getElementById("medicinesContainer");

let medicineDetails = [{
        name: "IBUPROFEN 600MG TAB",
        icon: "fa-tablets",
        reason: "For treatment of lower back pain.",
        notes: "1 tablet by mouth 4 times a day with food every 4 hours",
        timings: ["8:00AM", "12:00PM", "4:00PM", "8:00PM"],
        sideEffects: [{
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/headache.png",
                effect: "Headache"
            },
            {
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/depression-stress.png",
                effect: "Dizziness"
            },
        ],
        symptoms: "Experiencing chest pain, shortness of breath, and rapid weight gain.",
    },
    {
        name: "INSULIN, GLARGINE, HUMAN 100 UNT/ML INJ",
        icon: "fa-syringe",
        reason: "Reduce blood pressure.",
        notes: "1 injection at bedtime (Inject 10 ml vial under the skin as directed for 28 days inject 25 units under the skin at bedtime do not mix with other insulins.)",
        timings: ["Bedtime"],
        sideEffects: [{
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/headache.png",
                effect: "Headache"
            },
            {
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/depression-stress.png",
                effect: "Dizziness"
            },
            {
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/knee-pain.png",
                effect: "Body pains"
            },
        ],
        symptoms: "Experiencing itching skin, wheezing, and fast heart rate.",
    },
    {
        name: "TERAZOSIN HCL 2MG CAPSULE",
        icon: "fa-capsules",
        reason: "For treatment of symptoms of an enlarged prostate.",
        notes: "3 capsules before bed",
        timings: ["Bedtime"],
        sideEffects: [{
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/headache.png",
                effect: "Headache"
            },
            {
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/depression-stress.png",
                effect: "Dizziness"
            },
            {
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/15-healthcare-and-medical/hemorrhoids-piles-pain.png",
                effect: "Constipation"
            },
            {
                effectUrl: "https://uxwing.com/wp-content/themes/uxwing/download/20-food-and-drinks/food-dinner.png",
                effect: "Loss of appetite"
            },
        ],
        symptoms: "Experiencing symptoms of an enlarged prostate.",
    }
]
let activeMedEl = document.getElementById("activeMed")
activeMedEl.textContent = medicineDetails.length

localStorage.setItem("medicineDetails", JSON.stringify(medicineDetails));

let stringifiedMedicineDetails = localStorage.getItem("medicineDetails");
let parsedDetails = JSON.parse(stringifiedMedicineDetails);

function createAndAppendItem(details) {
    let medicineElement = document.createElement("div")
    medicineElement.classList.add("medicine-conatiner")
    medicinesContainerEl.appendChild(medicineElement)

    let nameEl = document.createElement("h1")
    nameEl.textContent = details.name
    nameEl.classList.add("med-name")
    medicineElement.appendChild(nameEl)

    let sectionsContainerEl = document.createElement("div")
    sectionsContainerEl.classList.add("sections-container")
    medicineElement.appendChild(sectionsContainerEl)

    let section1El = document.createElement("div")
    section1El.classList.add("section-1")
    sectionsContainerEl.appendChild(section1El)

    let iconEl = document.createElement("i")
    iconEl.classList.add("fas", details.icon, "icon")
    let iconContainer = document.createElement("div")
    iconContainer.classList.add("icon-div")
    iconContainer.appendChild(iconEl)
    section1El.appendChild(iconContainer)
    let hrLine = document.createElement("hr")
    section1El.appendChild(hrLine)
    let subHeadEl = document.createElement("p")
    subHeadEl.classList.add("sub-head")
    subHeadEl.textContent = "REASON FOR MEDICATION"
    section1El.appendChild(subHeadEl)
    let reasonEl = document.createElement("p")
    reasonEl.classList.add("reason")
    reasonEl.textContent = details.reason
    section1El.appendChild(reasonEl)

    let section2El = document.createElement("div")
    section2El.classList.add("section-2")
    sectionsContainerEl.appendChild(section2El)

    let subHead2El = document.createElement("p")
    subHead2El.classList.add("sub-head")
    subHead2El.textContent = "DIRECTIONS / NOTES"
    section2El.appendChild(subHead2El)
    let notesEl = document.createElement("p")
    notesEl.classList.add("note")
    notesEl.textContent = details.notes
    section2El.appendChild(notesEl)

    let timeContainer = document.createElement("div");
    timeContainer.classList.add("time-container");
    let dayEl = document.createElement("i");
    dayEl.classList.add("fas", "fa-sun", "symbol");
    timeContainer.appendChild(dayEl)
    let boxEl = document.createElement("div")
    boxEl.classList.add("box-card")

    function createAndAppendTime(time) {
        let timeEl = document.createElement("p")
        timeEl.classList.add("time")
        timeEl.textContent = time
        boxEl.appendChild(timeEl)
    }
    for (let time of details.timings) {
        createAndAppendTime(time)
    }
    timeContainer.appendChild(boxEl)
    let nightEl = document.createElement("i");
    nightEl.classList.add("fas", "fa-moon", "symbol");
    timeContainer.appendChild(nightEl)

    section2El.appendChild(timeContainer)

    let section3El = document.createElement("div")
    section3El.classList.add("section-3")
    sectionsContainerEl.appendChild(section3El)

    let subHead3El = document.createElement("p")
    subHead3El.classList.add("sub-head")
    subHead3El.textContent = "POSSIBLE SIDE EFFECTS"
    section3El.appendChild(subHead3El)

    function createAndAppendSideEffect(item) {
        let sideEffectEl = document.createElement("div");
        sideEffectEl.classList.add("side-effect");
        let imageEl = document.createElement("img");
        imageEl.classList.add("effect-img");
        imageEl.src = item.effectUrl;
        sideEffectEl.appendChild(imageEl);
        let effectEl = document.createElement("p");
        effectEl.classList.add("effect-name");
        effectEl.textContent = item.effect;
        sideEffectEl.appendChild(effectEl);
        section3El.appendChild(sideEffectEl);
    }
    for (let item of details.sideEffects) {
        createAndAppendSideEffect(item)
    }

    let subHead4El = document.createElement("p")
    subHead4El.classList.add("sub-head", "margins")
    subHead4El.textContent = "GET MEDICAL HELP IF"
    section3El.appendChild(subHead4El)
    let symptomEl = document.createElement("p")
    symptomEl.classList.add("symptoms")
    symptomEl.textContent = details.symptoms
    section3El.appendChild(symptomEl)
}

for (let details of parsedDetails) {
    createAndAppendItem(details)
}
