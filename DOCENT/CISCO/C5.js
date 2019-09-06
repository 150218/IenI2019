class Bescheiden {
    constructor(v,a) {
        this.voornaam = v;
        this.achternaam = a;
        this.volledigeNaam = 'lady ' + this.voornaam + ' ' + this.achternaam;
        this.leeg = null;
    }
}

class Boss {
    constructor(v,a) {
        this.setVoornaam(v);
        this.setAchternaam(a);
    }
    
    setVoornaam(n) {
        this.voornaam = 'sir ' + n;
    }
    
    setAchternaam(n) {
        this.achternaam = n;
    }    

    get getVoornaam() {
        return this.voornaam;
    }
    
    get getAchternaam() {
        return this.achternaam;
    }    
    
    get getVolledigeNaam() {
        return this.voornaam+' ' + this.achternaam;
    }
}

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  textFont("Monospace");
  textSize(40);
  textAlign(CENTER,CENTER);
  fill(255);
  
  at = new Boss('Alan','Turing');
  al = new Bescheiden('Ada','Lovelace');
}

function draw() {
    background('silver');
    fill('darkgreen');
    text('Mijn naam is\n' + al.volledigeNaam,0,0,canvas.width,canvas.height / 2);    
    fill('orange');
    if (mouseIsPressed) {
        at.setVoornaam('Gerrit');
        text('Mijn naam is\n' + at.getVolledigeNaam,0,canvas.height / 2,canvas.width,canvas.height / 2);
    }
    else {
        text('Mijn naam is\n' + at.voornaam,0,canvas.height / 2,canvas.width,canvas.height / 2);
    }
}