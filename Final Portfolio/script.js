function show(){
    document.querySelector('.hambuger').classList.toggle('open')
    document.querySelector('.navbar').classList.toggle('active')
}

const about = document.querySelector('.to');
const topper = document.querySelector('.topper');
const experience = document.querySelector('.exp');
const troll = document.getElementById('ftro')

var tday = new Date()

let year = tday.getFullYear();
let cada = year - 2021;

experience.innerText = cada;

const aboutHeight = about.getBoundingClientRect().height

function blae() {
    if(window.scrollY >= aboutHeight){
    document.querySelector('.topper').style.display = 'flex'

    }else{
    document.querySelector('.topper').style.display = 'none'

    }
}

setInterval(blae, 500)


//Projects Sections


const data = [
    
    {
        link:`"https://lokosfood.netlify.app/"`,
        img:`"./img/Screenshot (205).png"`,
        tech: `<button class="btn">Design</button><button class="btn">Branding</button>`,
        name: `LOKO's FOOD`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://eatwitheva.netlify.app/"`,
        img:`"./img/Screenshot (209).png"`,
        tech: `<button class="btn">Design</button><button class="btn">Branding</button>`,
        name: `EAT WITH ANNA`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://paffsb.netlify.app/"`,
        img:`"./img/Screenshot (212).png"`,
        tech: `<button class="btn">React Js</button>`,
        name: `MAVIN`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://paffsb.netlify.app/"`,
        img:`"./img/Screenshot (67).png"`,
        tech: `<button class="btn">Design</button><button class="btn">Branding</button>`,
        name: `Paffsb`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://subwaycountercdw.netlify.app/"`,
        img:`"./img/Screenshot (49).png"`,
        tech: `<button class="btn">HTML & CSS</button><button class="btn">JS</button>`,
        name: `Subway Counter`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://empireexc.netlify.app"`,
        img:`"./img/Screenshot (79).png"`,
        tech: `<button class="btn">HTML & CSS</button><button class="btn">JS</button>`,
        name: `EMPIRE EXC`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://cdwnewyaearcdd.netlify.app/"`,
        img:`"./img/Screenshot (133).png"`,
        tech: `<button class="btn">HTML</button><button class="btn">CSS</button><button class="btn">JS</button>`,
        name: `CDWP COUNTDOWN`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://cdwpquotegenerator.netlify.app"`,
        img:`"./img/Screenshot (152).png"`,
        tech: `<button class="btn">HTML</button><button class="btn">CSS</button><button class="btn">JS</button>`,
        name: `CDWP Quote Generator`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    },
    {
        link:`"https://fraustin.netlify.app/"`,
        img:`"./img/Screenshot (206).png"`,
        tech: `<button class="btn">HTML</button><button class="btn">CSS</button><button class="btn">JS</button>`,
        name: `REV AUSTIN`,
        industry: `CDWP`,
        locat: `Lagos, NG`
    }
]

let info = data.map(item => {
   return(
    `
    <a href= ${item.link} >
    <div id="sub">
       <div id="img">
        <img src=${item.img} alt="">
       </div>
        <div id="text-sub">
            <div id="pclass">
                ${item.tech}
            </div>
            <h4>${item.name}</h4>
            <div id="location">
                <p><span>INDUSTRY</span><br>${item.industry}</p>
                <p><span>LOCATION</span><br>${item.locat}</p>
            </div>
            <button class="view">VIEW PRODUCT <div id="cic"></div></button>
        </div>
    </div>
</a>`
   )
})


info = info.join("")
troll.innerHTML = info