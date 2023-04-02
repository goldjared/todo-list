import { todoAddDisplay, todoBtn, addGroup } from './dom-workers';
import { viewVault, currentDate } from './logic';

export default function homePage() {
  const content = document.querySelector('.content');

  const homeHeader = document.createElement('div');
  homeHeader.classList.add('home-header');
  homeHeader.textContent = 'Home';
  content.appendChild(homeHeader);

  const welcomeMsg = document.createElement('div');
  welcomeMsg.classList.add('home-msg');
  welcomeMsg.textContent = `Welcome, Steve!` ;
  const statsMsg = document.createElement('div');
  statsMsg.classList.add('home-msg');
  statsMsg.textContent = ` You have ${viewVault().length} todos! Today's date is ${currentDate()}` ;
  content.append(welcomeMsg, statsMsg);

  addGroup(viewVault());
}
