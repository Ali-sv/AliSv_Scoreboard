
const ResourceName = "LC_scoreboard";
let currentSection = "dashboard";


const QuantumJobs = {
    police: {
        name: "Police",
        description: "Maintain quantum stability in the city. Requires Q-Level 3 clearance. Use quantum entanglement for instant communication across the city.",
        logo: "./css/job/LAW_ENFORCE_MENT.png",
        department: "./css/job/LAW_ENFORCE_MENT.png",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    Sheriff: {
        name: "Sheriff",
        description: "Maintain quantum stability in the city. Requires Q-Level 3 clearance. Use quantum entanglement for instant communication across the city.",
        logo: "./css/job/SH.png",
        department: "./css/job/SH.png",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    medic: {
        name: "Medic",
        description: "Advanced quantum healing techniques. Can stabilize patients using quantum entanglement to prevent cellular decay.",
        logo: "./css/job/Medic_Quantom.png",
        department: "./images/departments/quantum-medic.jpg",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    mechanic: {
        name: "Mechanic",
        description: "Advanced quantum healing techniques. Can stabilize patients using quantum entanglement to prevent cellular decay.",
        logo: "./css/job/Quantom_Mc_logo-removebg-preview.png",
        department: "./images/departments/quantum-medic.jpg",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    Taxi: {
        name: "Taxi",
        description: "Advanced quantum healing techniques. Can stabilize patients using quantum entanglement to prevent cellular decay.",
        logo: "./css/job/TAX.png",
        department: "./images/departments/quantum-medic.jpg",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    metropolitan: {
        name: "metropolitan",
        description: "Advanced quantum healing techniques. Can stabilize patients using quantum entanglement to prevent cellular decay.",
        logo: "./css/job/MT.png",
        department: "./images/departments/MT.jpg",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    fbi: {
        name: "fbi",
        description: "Advanced quantum healing techniques. Can stabilize patients using quantum entanglement to prevent cellular decay.",
        logo: "./css/job/03.png",
        department: "./images/departments/CIA.jpg",
        discord: "https://discord.gg/X7qmPDG44T"
    },
    weazel: {
        name: "Weazel",
        description: "Advanced quantum healing techniques. Can stabilize patients using quantum entanglement to prevent cellular decay.",
        logo: "./css/job/weazel.png",
        department: "./images/departments/quantum-medic.jpg",
        discord: "https://discord.gg/X7qmPDG44T"
    },
   
};


const QuantumHeists = {
    quantum_CentralcBank: {
        name: "NameServerCENTRAL BANK",
        description: "هشت نفر نیروانتظامی(سه سوات)، هشت نفر رابر - اسلحه مجاز گان سنگین ، 2عدد گاز",
        image: "./images/Assets/bank.jpg",
        requirements: "8 Police | 8 Robber",
        cooldown: 30,
        icon:"./css/Robb/BankActive.png"
    },
    quantum_PaletoBank: {
        name: "NameServerPALETO BANK",
        description: "شش نفر نیروانتظامی(دو سوات) ، شش نفر رابر",
        image: "./images/Assets/bank.jpg",
        requirements: "6 police| 6Robber",
        cooldown: 30,
        icon:"./css/Robb/MinibankActive.png"
    },
    quantum_feelcabank: {
        name: "NameServerFeelcaBank ",
        description: "چهار نفر نیروانتظامی ، چهار نفر رابر (اسلحه مجاز:پیستول)",
        image: "./images/Assets/minibank.jpg",
        requirements: "4 police| 4Robber",
        cooldown: 30,
        icon:"./css/Robb/FleecaBankActive.png"
    },
    quantum_mazebank: {
        name: "NameServerMAZE BANK",
        description: "شش نفر نیرو انتظامی(دو سوات)، شش نفر رابر (اسلحه مجاز :سنگین).",
        image: "./images/Assets/bank.jpg",
        requirements: "6 police| 6Robber",
        cooldown: 30,
        icon:"./css/Robb/CargoActive.png"
    },
    quantum_shop: {
        name: "NameServerShop ",
        description: "دو نفر نیروانتظامی ، دو نفر رابر (اسلحه مجاز:پیستول)",
        image: "./images/Assets/shop1.jpg",
        requirements: "2 police| 2Robber",
        cooldown: 30,
        icon:"./css/Robb/ShopActive.png"
    },
    quantum_mythic: {
        name: "NameServerMythic ",
        description: "دوازده نفر نیروانتظامی (شش سوات) ، دوازده نفر رابر (اسلحه مجاز :سنگین)",
        image: "./images/Assets/mythic.jpg",
        requirements: "12 police| 12Robber",
        cooldown: 30,
        icon:"./css/Robb/MythicActive.png"
    },
    quantum_cargo: {
        name: "NameServerCargo ",
        description: "ده نفر نیروانتظامی (پنج سوات) ، ده نفر رابر (اسلحه مجاز :سنگین",
        image: "./images/Assets/cargo.jpg",
        requirements: "10 police| 10Robber",
        cooldown: 30,
        icon:"./css/Robb/CargoActive.png"
    },
    quantum_bimeh: {
        name: "NameServerBimeh ",
        description: "پنج نفر نیروانتظامی (دو سوات)، پنج نفر رابر (اسلحه مجاز:سنگین و 2 عدد گاز)",
        image: "./images/Assets/bimeh.jpg",
        requirements: "5 police| 5Robber",
        cooldown: 30,
        icon:"./css/Robb/LifeInsuranceActive.png"
    },

   
};
const quantomjb = document.querySelector('.job-info h4')

function showSection(sectionId) {
  
    document.querySelector(`.quantum-section.active`).classList.remove('active');
    
   
    document.getElementById(sectionId).classList.add('active');
    currentSection = sectionId;
    
   
    document.querySelectorAll('.quantum-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });
}


function showQuantumPopup(type, id) {
    const popup = document.getElementById('quantum-popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDesc = document.getElementById('popup-description');
    const popupIcon = document.getElementById('popup-icon');
    const popupImage = document.getElementById('popup-image');
    const popupDiscord = document.getElementById('popup-discord');
    
    if(type === 'job') {
        const job = QuantumJobs[id];
        popupTitle.textContent = job.name;
        popupDesc.textContent = job.description;
        popupIcon.src = job.logo;
        popupImage.src = job.department;
        popupDiscord.onclick = () => {
            copyToClipboard(job.discord);
            showNotification('Quantum Discord link copied!');
        };
    } else if(type === 'heist') {
        const heist = QuantumHeists[id];
        popupTitle.textContent = heist.name;
        popupDesc.textContent = heist.description + "\n\nRequirements: " + heist.requirements;
        popupIcon.src =heist.icon ;
        popupImage.src = heist.image;
        popupDiscord.style.display = 'none';
    }
    
    popup.classList.add('active');
}


function closeQuantumPopup() {
    document.getElementById('quantum-popup').classList.remove('active');
}


// function copyToClipboard(text) {
//     navigator.clipboard.writeText(text).then(() => {
//         showNotification('Copied to clipboard!');
//     }).catch(err => {
//         console.error('Failed to copy: ', err);
//     });
// }
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showNotification('Copied to clipboard!');
}


function showNotification(message) {
    const notif = document.getElementById('copy-notification');
    notif.textContent = message;
    notif.classList.add('active');
    
    setTimeout(() => {
        notif.classList.remove('active');
    }, 3000);
}


window.addEventListener('message', (event) => {
    const data = event.data;
    
    switch(data.action) {
        case 'updatePlayers':
            document.getElementById('player-count').textContent = `${data.players_counts}/128`;
            break;
            
        case 'updateTime':
            document.getElementById('server-time').textContent = data.data;
            break;
            
        case 'updateJobs':
            updateJobStatuses(data.jobs);
            break;
            
        case 'updateHeists':
            updateHeistStatuses(data.heists);
            break;
        case 'show':
            $("#quantum-container").show();
            showSection('dashboard');
            break;
        case 'hide':
            $("#quantum-container").hide();
            break;

    }
});
window.addEventListener('keydown', function (event) {
    if (event.key === 'F10' || event.key === 'Escape') {
        $("#quantum-container").hide();
        fetch('https://LC_scoreboard/close', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: 'some_data_if_needed' })
          });
    }
});

function updateJobStatuses(jobsData) {
    const jobMapping = {
        police: "police",
        sheriff: "sheriff",
        ambulance: "medic",
        mechanic: "mechanic",
        taxi: "Taxi",
        artesh: "artesh",
        nopo: "nopo",
        setadkol: "setadkol",
        dadgostari: "dadgostari",
        rahvar: "rahvar",
        sepah:"sepah",
        weazel: "weazel"
    };

    for (const [jobKey, jobValue] of Object.entries(jobMapping)) {
        const elements = document.querySelectorAll(`.quantum-job-card[data-job="${jobValue}"] .job-status`);
        elements.forEach(element => {
            if (jobsData[jobKey] > 0) {
                element.textContent = `${jobsData[jobKey]} Active`;
                element.className = 'job-status online';
            } else {
                element.textContent = 'Offline';
                element.className = 'job-status offline';
            }
        });
    }
}


function updateHeistStatuses(heistsData) {
    const heistMapping = {
        Bank: "quantum_bank",
        Minibank: "quantum_minibank",
        Feleca: "quantum_feelcabank",
        SheriffBank: "quantum_mazebank",
        shop: "quantum_shop",
        Bimeh: "quantum_bimeh",
        mythic: "quantum_mythic",
        cargo: "quantum_cargo"
    };

    for (const [heistKey, heistValue] of Object.entries(heistMapping)) {
        const element = document.querySelector(`.quantum-heist-card[data-heist="${heistValue}"] .heist-status`);
        if (element) {
            const cooldown = heistsData[heistKey];
            
            if (cooldown <= 0) {
                element.textContent = 'Active';
                element.className = 'heist-status available';
                element.innerHTML = 'Active<div class="pulse-effect"></div>';
            } else {
                const minutes = Math.ceil(Math.abs(cooldown) / 60);
                element.textContent = `${minutes} Min Cooldown`;
               element.className = 'heist-status cooldown';
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelectorAll('.quantum-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.section);
        });
    });
    
    
    // document.querySelectorAll('.quantum-job-card').forEach(card => {
    //     card.addEventListener('click', () => {
    //         showQuantumPopup('job', card.dataset.job);
    //     });
    // });
    
    
    document.querySelectorAll('.quantum-heist-card').forEach(card => {
        card.addEventListener('click', () => {
            showQuantumPopup('heist', card.dataset.heist);
        });
    });
    
   
    document.querySelector('.close-popup').addEventListener('click', closeQuantumPopup);
    
   
    document.getElementById('copy-discord').addEventListener('click', () => {
        copyToClipboard('https://discord.gg/X7qmPDG44T');
    });
    
  
    showSection('dashboard');
    
    document.getElementById('quantum-container').style.display = 'none';
    setTimeout(() => {
        window.dispatchEvent(new MessageEvent('message', {
            data: {
                action: 'updatePlayers',
                count: 128
            }
        }));
        
        window.dispatchEvent(new MessageEvent('message', {
            data: {
                action: 'updateTime',
                time: new Date().toLocaleTimeString()
            }
        }));
    }, 1000);
});
