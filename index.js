const slideBar1 = document.getElementById("slide-bar-1")
const slideBar2 = document.getElementById("slide-bar-2")
const slideBar3 = document.getElementById("slide-bar-3")
const slideBar4 = document.getElementById("slide-bar-4")
const slideBar5 = document.getElementById("slide-bar-5")
const slideBar6 = document.getElementById("slide-bar-6")
const slideBar7 = document.getElementById("slide-bar-7")
const h3N1 = document.getElementById("h3-1")
const h3N2 = document.getElementById("h3-2")
const h3N3 = document.getElementById("h3-3")
const h3N4 = document.getElementById("h3-4")
const h3N5 = document.getElementById("h3-5")
const h3N6 = document.getElementById("h3-6")
const h3N7 = document.getElementById("h3-7")
const img = document.getElementById("firstRightImg")
const img1 = document.getElementById("secondLeftImg")
const a1 = document.getElementById("parSlideSecondRow")
const a2 = document.getElementById("parSlideSecondRow2")
const a3 = document.getElementById("parSlideSecondRow3")
const a4 = document.getElementById("parSlideSecondRow4")
const a5 = document.getElementById("parSlideSecondRow5")
const a6 = document.getElementById("parSlideSecondRow6")
const a7 = document.getElementById("parSlideSecondRow7")
const li1 = document.getElementById("firstLi")
const li2 = document.getElementById("secondLi")
const li3 = document.getElementById("thirdLi")
const li4 = document.getElementById("lastLi")

let i = 0
let height = 0
let id = ""
let boolen = false
let i1 = 0
let height1 = 0
let id1 = ""
let boolean1 = false
move()
move1()

function move(){
    if(i == 0){
        i = 1
        id = setInterval(frame, 25)
            function frame(){
                if(height >= 100){
                    clearInterval(id)
                    i=0
                    if(height >= 100){
                        h3N1.style.color = "#161618"
                        height = 0
                        slideBar1.style.height = height+"%"
                        id = setInterval(()=>{
                            if(height>=100){
                                clearInterval(id)
                               h3N2.style.color = "#161618"
                               height = 0
                               slideBar2.style.height = height+"%"
                               id = setInterval (()=>{
                                if(height >= 100){
                                    clearInterval(id)
                                    h3N3.style.color = "#161618"
                                    height = 0
                                    slideBar3.style.height = height +"%"
                                    id = setInterval(()=>{
                                        if(height >=100){
                                            clearInterval(id)
                                            h3N4.style.color = "#161618"
                                            height = 0
                                            slideBar4.style.height = height+"%"
                                            move()
                                        }else if (boolen == false){
                                            height++
                                            slideBar4.style.height = height+"%"
                                            h3N4.style.color = "#1a73e8"
                                            img.src = "./image/primoSwing-ultima.jpg"
                                            img.style.width = "800px"
                                        }
                                    },25)
                                }else if(boolen == false){
                                    height++
                                    slideBar3.style.height = height +"%"
                                    h3N3.style.color = "#1a73e8"
                                    img.src = "./image/primoSwing-terza.jpg"
                                    img.removeAttribute("style")
                                }
                               }, 25)
                            } else if(boolen == false){
                                    height++
                                    slideBar2.style.height = height+"%"
                                    h3N2.style.color = "#1a73e8"
                                    img.src = "./image/primoSwing-seconda.jpg"
                                    img.style.width = "650px";
                                }
                        },25)
                    }
                }else if(boolen == false){
                    height ++
                    slideBar1.style.height = height + "%"
                    h3N1.style.color = "#1a73e8"
                    img.src = "./image/primoSwing-prima.jpg"
                    img.removeAttribute("style")

                }   
        }
    }
} 


a1.addEventListener("click", ()=>{
    boolen = true
    reset()
    slideBar1.style.height = "100%"
    h3N1.style.color = "#1a73e8"
    img.src = "./image/primoSwing-prima.jpg"
    img.removeAttribute("style")
})
a2.addEventListener("click", ()=>{
    boolen = true
    reset()
    slideBar2.style.height = "100%"
    h3N2.style.color = "#1a73e8"
    img.src = "./image/primoSwing-seconda.jpg"
    img.style.width = "650px";
})
a3.addEventListener("click", ()=>{
    boolen = true
    reset()
    slideBar3.style.height = "100%"
    h3N3.style.color = "#1a73e8"
    img.src = "./image/primoSwing-terza.jpg"
    img.removeAttribute("style")
})
a4.addEventListener("click", ()=>{
    boolen = true
    reset()
    slideBar4.style.height = "100%"
    h3N4.style.color = "#1a73e8"
    img.src = "./image/primoSwing-ultima.jpg"
    img.style.width = "800px"
})

function reset(){
    
    slideBar1.style.height = "0%"
    slideBar2.style.height = "0%"
    slideBar3.style.height = "0%"
    slideBar4.style.height = "0%"
    h3N1.style.color = "#161618"
    h3N2.style.color = "#161618"
    h3N3.style.color = "#161618"
    h3N4.style.color = "#161618"
}






function move1(){
    if(i1 == 0){
        i1 = 1
        id1 = setInterval(()=>{
            if(height1 >= 100){
                clearInterval(id1)
                i1 = 0
                height1 = 0
                slideBar5.style.height = height1 + "%"
                h3N5.style.color = "#161618"
                id1 = setInterval(()=>{
                    if(height1>=100){
                        clearInterval(id1)
                        i1 = 0
                        height1 = 0
                        slideBar6.style.height = height1 + "%"
                        h3N6.style.color = "#161618"
                        id1 = setInterval(()=>{
                            if(height1 >= 100){
                                clearInterval(id1)
                                i = 0
                                height1 = 0
                                slideBar7.style.height = height1 + "%"
                                h3N7.style.color = "#161618"
                                move1()
                            }else if(boolean1 == false){
                                height1++
                                slideBar7.style.height = height1 + "%"
                                img1.src = "./image/secondoSwing-ultima.jpg"
                                h3N7.color = "#1a73e8"
                            }
                        },25)
                    }else if(boolean1 == false){
                        height1++
                        slideBar6.style.height = height1+"%"
                        img1.src = "./image/secondoSwing-seconda.jpg"
                        img1.style.marginTop = "70px"
                        h3N6.style.color = "#1a73e8"
                    }
                },25)
            }else if(boolean1 == false){
                height1++
                slideBar5.style.height = height1 + "%"
                img1.src = "./image/secondoSwing-prima.jpg"
                img1.removeAttribute ("style")
                h3N5.style.color = "#1a73e8"
                
            }
        },25)
    }
}

a5.addEventListener("click",()=>{
    boolean1 = true
    reset1()
    slideBar5.style.height = "100%"
    h3N5.style.color = "#1a73e8"
    img1.src = "./image/secondoSwing-prima.jpg"
    img1.removeAttribute("style")
})
a6.addEventListener("click",()=>{
    boolean1 = true
    reset1()
    slideBar6.style.height = "100%"
    h3N6.style.color = "#1a73e8"
    img1.src = "./image/secondoSwing-seconda.jpg"
    img1.style.marginTop = "70px"
})
a7.addEventListener("click",()=>{
    boolean1 = true
    reset1()
    slideBar7.style.height = "100%"
    h3N7.style.color = "#1a73e8"
    img1.src = "./image/secondoSwing-ultima.jpg"
    img1.style.marginTop = "70px"
})

function reset1(){
    slideBar5.style.height = "0%"
    slideBar6.style.height = "0%"
    slideBar7.style.height = "0%"
    h3N5.style.color = "#161618"
    h3N6.style.color = "#161618"
    h3N7.style.color = "#161618"
}

const textSpan = "Expand_less"
const textSpanExpand = "Expand_more"
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const span1 = document.getElementById("expand1")
const span2 = document.getElementById("expand2")
const span3 = document.getElementById("expand3")
const span4 = document.getElementById("expand4")
const p1 = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")
const p4 = document.createElement("p")
let button1 = document.createElement("button")
let button2 = document.createElement("button")


li1.addEventListener("click", ()=>{
    if(li1.childElementCount == 1){

        li1.appendChild(div1)

        div1.appendChild(p1)

        let textNode1 = document.createTextNode ("Gmail si basa da sempre su una solida sicurezza. Facciamo del nostro meglio per tenere alla larga spam, phishing e malware prima che giungano nella tua posta in arrivo. Le nostre funzionalità di filtro antispam potenziate per l'AI bloccano quasi 10 milioni di email di spam al minuto.")
        p1.appendChild(textNode1)

        p1.className = "lista-esposta"
        div1.className = "div1-esposto"


        span1.innerHTML = textSpan
    }else{
        div1.removeChild(p1)
        li1.removeChild(div1)
        p1.innerHTML = ""
        span1.innerHTML = textSpanExpand
    }

})


li2.addEventListener("click", ()=>{
    if(li2.childElementCount == 1){

        li2.appendChild(div2)


        div2.appendChild(p2)

        let textNode1 = document.createTextNode ("No. Anche se potresti vedere annunci nel tuo account Gmail senza costi, le tue email sono private. Google non analizza né elabora i contenuti di Gmail per scopi pubblicitari.")
        p2.appendChild(textNode1)

        p2.className = "lista-esposta"
        div2.className = "div1-esposto"
        div2.style.width = "650px"



        span2.innerHTML = textSpan
    }else{
        div2.removeChild(p2)
        li2.removeChild(div2)
        p2.innerHTML = ""
        span2.innerHTML = textSpanExpand
    }
})

li3.addEventListener("click", ()=>{
    if(li3.childElementCount == 1){

        li3.appendChild(div3)


        div3.appendChild(p3)

        let textNode1 = document.createTextNode ("Le funzionalità di Gmail sono già sufficientemente sicure, ma alcuni account potrebbero necessitare di ulteriori livelli di sicurezza. Il programma di protezione avanzata di Gmail salvaguarda gli utenti con elevata visibilità e le informazioni sensibili che sono a rischio di attacchi online mirati.")
        p3.appendChild(textNode1)


        div3.appendChild(button1)
        button1.innerHTML = "Scopri di piu"
        button1.style.margin = "10px 0px -30px -20px"
        p3.className = "lista-esposta"
        div3.className = "div1-esposto"
        div3.style.width = "650px"
        span3.innerHTML = textSpan

    }else{
        li3.removeChild(div3)
        div3.removeChild(p3)
        p3.innerHTML = ""
        div3.removeChild(button1)
        span3.innerHTML = textSpanExpand
    }
})

li4.addEventListener("click", ()=>{
    if(li4.childElementCount == 1){

        li4.appendChild(div4)


        div4.appendChild(p4)

        let textNode1 = document.createTextNode ("Gmail è parte di Google Workspace per il quale puoi scegliere diversi piani. Oltra alle funzionalità di Gmail che ami, avrai un indirizzo email personalizzato (@azienda.it), indirizzi email di gruppo illimitati, il 99,9% di tempo di attività garantito, uno spazio di archiviazione doppio rispetto a Gmail per uso personale, zero annunci pubblicitari, assistenza 24/7, Google Workspace Sync per Microsoft Outlook e tanto altro ancora.")
        p4.appendChild(textNode1)


        div4.appendChild(button2)
        button2.innerHTML = "Scopri di piu"
        button2.style.margin = "10px 0px -30px -20px"
        p4.className = "lista-esposta"
        div4.className = "div1-esposto"
        div4.style.width = "650px"
        span4.innerHTML = textSpan

    }else{
        li4.removeChild(div4)
        div4.removeChild(p4)
        p4.innerHTML = ""
        div4.removeChild(button2)
        span4.innerHTML = textSpanExpand
    }
})