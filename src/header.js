function Header(){
    const dom = document.getElementById('root');
    const header = document.createElement('div');
    header.innerText = 'header1';
    dom.appendChild(header);
    console.log(new Promise())
}

export default Header;