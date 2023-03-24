export default function homePage() {
const content = document.querySelector('.content');

const homeHeader = document.createElement('div');
homeHeader.classList.add('home-header');
homeHeader.textContent = 'Home';
content.appendChild(homeHeader);


}