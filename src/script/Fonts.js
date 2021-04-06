import '../css/iconfont.css'

export default function Fonts(params) {
    const root = document.getElementById('root');

    const icon = document.createElement('div');
    icon.classList.add('iconfont');
    icon.classList.add('icon-cherry');
    icon.style.color = 'rgb(255,0,0)';
    icon.style.width = '100px';
    icon.style.height = '100px';

    root.appendChild(icon)
}