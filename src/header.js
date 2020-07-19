function Header(){
    var dom = document.getElementById('root');
    var header = document.createElement('div');
    header.innerText = 'header1';
    dom.appendChild(header);
}

export default Header;