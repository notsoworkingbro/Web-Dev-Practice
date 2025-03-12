/* NavBar toggle system*/ 
function id(id){
  return document.getElementById(id);
}

// const toggleButton = document.getElementById('toggle-btn')
const toggleButton = id('toggle-btn')
const sidebar = id('sidebar')

const sidebar_selection = document.getElementsByClassName('selection')

function toggleSidebar(){
    toggleButton.classList.toggle('rotate')
    sidebar.classList.toggle('close')

    Array.from(sidebar.getElementsByClassName('show-submenu')).forEach(ul => {
        ul.previousElementSibling.classList.remove('rotate')
        ul.classList.remove('show-submenu')
    })
}

function toggleSubMenu(button){
    button.classList.toggle('rotate')
    button.nextElementSibling.classList.toggle('show-submenu')
    
    if(sidebar.classList.contains('close')){
        toggleButton.classList.toggle('rotate')
        sidebar.classList.toggle('close')
    }
}

var previous = 'home-container';

function toggleContainer(container_name){
  current = document.getElementById(container_name);

  if(previous === container_name){ 
    return;  
  }
  
  const previous_container = document.getElementById(previous)
  previous_container.style.display = 'none';
  previous = container_name;

  if(current.style.display === "flex") {
    current.style.display = 'none';
    return;
  }

  current.style.display = 'flex';
}	
