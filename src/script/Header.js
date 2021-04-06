import avatar from '../../assets/avater.jpg'
import styles from '../index.scss';

export default function Header(props) {
    const dom = document.getElementById('root');
    const frag = document.createDocumentFragment();

    const ele = document.createElement('div');
    ele.innerHTML = 'header';
    frag.appendChild(ele)

    const img = new Image();
    img.src = avatar;
    img.classList.add(styles.avatar);
    frag.appendChild(img)

    dom.appendChild(frag);
}