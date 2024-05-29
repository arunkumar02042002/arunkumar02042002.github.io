// Side Bars
function openSidebar() {
  document.getElementById("portfolio-sidebar").setAttribute('style', 'display:flex !important; ');
}

function closeSidebar() {
  document.getElementById("portfolio-sidebar").setAttribute('style', 'display:none !important;');
}

if (matchMedia("(min-width: 835px)").matches) {
  // the viewport is at least 900 pixels wide
  closeSidebar();
}

const PROJECTS = [
  {
    'title':"Quiz APP",
    'description':"A Quiz App built using Vanilla Javascript.",
    'image_src':"assets/images/quiz-app.png",
    'project_link':"https://replit.com/@arunkumar2403gg/QizzApp#index.js"
  },
  {
    'title':"20 Python Projects",
    'description':"A collection of twenty Python Projects",
    'image_src':"assets/images/20-projects.png",
    'project_link':"https://github.com/arunkumar02042002/Python-Projects"
  },
  {
    'title':"Chat Bot",
    'description':"A simple chatbot built using Python and JSON.",
    'image_src':"assets/images/chat-bot.png",
    'project_link':"https://github.com/arunkumar02042002/BAB_BOT"
  },
  {
    'title':"Blog App",
    'description':"Simplying blogging using Django.",
    'image_src':"assets/images/Blog-app.png",
    'project_link':"https://github.com/arunkumar02042002/blog_app_django/"
  },
  {
    'title':"HangMan",
    'description':"Guess the Word or Die!",
    'image_src':"assets/images/hangman.png",
    'project_link':"https://github.com/arunkumar02042002/Python-Projects/tree/main/8.%20Hangman"
  },
  {
    'title':"FlipCart Scrapper",
    'description':"Built using Python, Flask, and MongoDB.",
    'image_src':"assets/images/web-scrape.png",
    'project_link':"https://github.com/arunkumar02042002/Flipcart_reveiw_Scrapper"
  },
  {
    'title':"X-O Game",
    'description':"A two player game built using Oops in Python.",
    'image_src':"assets/images/x-o-game.png",
    'project_link':"https://github.com/arunkumar02042002/Python-Projects/tree/main/4.%20X-O%20Game"
  },
  {
    'title':"Blog API",
    'description':"A backend api for Blogging in RestFramework.",
    'image_src':"assets/images/blog-api.png",
    'project_link':"https://github.com/arunkumar02042002/blog_api/"
  },
]

function createElement(name){
  return document.createElement(name);
}

function addProjects(PROJECTS){
  let otherProjects = document.getElementById("other-projects-container");

  PROJECTS.forEach(project => {
    console.log(project);
    let card = createElement("div");
    card.classList.add("card");
    card.style.width = "250px";

    let img = createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", project.image_src);
    img.setAttribute("alt", project.title);

    let cardBody = createElement("div");
    cardBody.classList.add("card-body");

    let title = createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = project.title;

    let cardText = createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = project.description;

    let link = createElement("a");
    link.setAttribute("href", project.project_link);
    link.setAttribute("target", "_blank");
    link.classList.add("black", "btn", "btn-outline-primary");
    link.innerHTML = 'GitHub <i class="fa fa-github"></i>'

    cardBody.appendChild(title);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText);
    cardBody.appendChild(link);

    card.appendChild(img);
    card.appendChild(cardBody);

    otherProjects.appendChild(card);
  });
}

// Call the function to add projects
addProjects(PROJECTS);