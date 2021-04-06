import '../css/hmr.css'

export default function HMR() {
    var btn = document.createElement('button');
    btn.innerHTML = '添加';
    document.body.appendChild(btn);

    btn.onclick = function () {
        var div = document.createElement('div');
        div.innerHTML = 'item';
        document.body.appendChild(div);
    }
}