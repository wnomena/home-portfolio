class ProjectAndTechno {
    name : string
    techno: string[] 
    image : string

    constructor(a:string,b : string[]) {
        this.name = a
        this.techno = b
        this.image = a
    }
}
class Contact {
    name: string
    img: string

    constructor(a: string) {
        this.img = a
        this.name = a
    }
}
export const Acceuil = {
    Nom : "Sedraniaina",
    Description : "Passionné par le codage, je peux effectuer d’innombrable application avec les technologies Javascript et Python, etc..."
}
export const explaination = `Aujourd’hui développeur Autodidacte, j’ai consacré la pupart de mon temps en tant que développeur Web, avec lesmodernes comme Flask, Fast API, Node js, Vuejs, etc....  Pendant ces trois ans, j’ai acquis des compétences solides dans le développement informatique y compris d’autres domaines en dehors du développement web.  Etant un développeur d’interface graphique, je peu aussi travailler avec les outils de design comme Adobe XD ou Figma.`
export const projectAndTechno:ProjectAndTechno[] = [{
    name : "Mon Portfolio",
    techno : ["Vue.js"],
    image : "../assets/vue-transparent-removebg-preview.png"
},{
  name : "Projets personnels",
  techno : ["Nuxt.js","Node.js"],
  image: "../assets/nuxt-seeklogo.png"
}, {
    name: "Task Manager",
    techno : ["Flask","Jquery"],
    image : "../assets/62a4bbf6fdee15d2905007bb.png"
},{
    name: "RestFull API",
    techno: ["Flask"],
    image: "../assets/62a4bbf6fdee15d2905007bb.png"
}]

export const contact:Contact[] = [{
    name : "Github", img : "../assets/github-mark-white.png"
},
{name : "Linkedin", img : "../assets/logo-linkedin-icon-4096.png"},
{
    name : "Gmail", img : "../assets/gmail_new_logo_icon_159149.png"
}]
