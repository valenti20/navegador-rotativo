const translateEn = document.getElementById('En');
const abierto = document.getElementById('abierto');
const cerrado = document.getElementById('cerrado');
const contenedor = document.querySelector('.contenedor');

var trOff = document.getElementById('cont')
var int = document.getElementById('int')
var def = document.getElementById('def')
var uno = document.getElementById('uno')
var dos = document.getElementById('dos')
var tres = document.getElementById('tres')
var cuatro = document.getElementById('cuatro')
var i = document.getElementById('i')
var s = document.getElementById('s')
var c = document.getElementById('c')

var trOn = "System of a Down is an Armenian-American heavy metal band, formed in 1994 in Glendale, California.It consists of vocalist Serj Tankian, guitarist Daron Malakian, bassist Shavo Odadjian and drummer John Dolmayan. The members of the band are of Armenian origin. All of them have relatives who were killed during the Armenian genocide and belong to the Armenian diaspora. Although they would not describe System of a Down as a political band, they have pledged to spread knowledge about the Armenian genocide and propagandize against American militarism and totalitarianism.";
var intOn = 'Band Members';
var defOn = 'Armenian Nu Metal Rock Band';
var unoOn = 'Serj Tankian (1994-present): Vocals, keyboards, rhythm guitar.';
var dosOn = 'Daron Malakian (1994-present): Lead guitar, vocals, backing vocals.';
var tresOn = 'Shavo Odadjian (1994-present): Bass, backing vocals.';
var cuatroOn = 'John Dolmayan (1997-present): Drums, percussion.';
var iOn = 'Home';
var sOn = 'About';
var cOn = 'Contact';

abierto.addEventListener('click' , () => contenedor.classList.add('show-nav'));
cerrado.addEventListener('click' , () => contenedor.classList.remove('show-nav'));

function traducirEn(){
    trOff.innerText = trOn
    int.innerText = intOn
    def.innerText = defOn
    uno.innerText = unoOn
    dos.innerText = dosOn
    tres.innerText = tresOn
    cuatro.innerText = cuatroOn
    i.innerText = iOn
    s.innerText = sOn
    c.innerText = cOn
};
