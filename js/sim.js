class Sim {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        /*por defecto se inicializa con un valor determinado (no se coloca como parametro) para luego con metodos ir cambiandolo o seteandolo (set)*/
        this.nivelSatisfecho = 100;
        this.nivelEnergia = 100;
        this.nivelVegija = 0;
        this.nivelDiversion = 100;
        
        this.estadoDurmiendo = false;
        this.estadoMalDormido = false;

    }

    setEdad (edad) {
        this.edad = edad;
    }

    setGenero (genero) {
        this.genero = genero;
    }

    setColorPelo (colorPelo) {
        this.colorPelo = colorPelo;
    }

    setTipoDeCuerpo (tipoDeCuerpo) {
        this.tipoDeCuerpo = tipoDeCuerpo;
    }

    setColorDePiel (colorDePiel) {
        this.colorDePiel = colorDePiel;
    }

    setFormaDeCaminar (formaDeCaminar) {
        this.formaDeCaminar = formaDeCaminar;
    }

    comer (comida) {
        switch (comida) {
            case 'ensalada': 
                this.nivelSatisfecho = this.nivelSatisfecho + 20;
                this.nivelEnergia = this.nivelEnergia + 10;
                this.nivelVegija = this.nivelVegija + 10;
                break;
            case 'emparedado':
                this.nivelSatisfecho = this.nivelSatisfecho + 40;
                this.nivelEnergia = this.nivelEnergia + 20;
                this.nivelVegija = this.nivelVegija + 20;
                break;
            case 'pasta':
                this.nivelSatisfecho = this.nivelSatisfecho + 60;
                this.nivelEnergia = this.nivelEnergia + 40;
                this.nivelVegija = this.nivelVegija + 40;
                break;
            default: 
                throw new Error (comida + ' no es comida');
        }
        
    }

    dormir() {
        if (this.nivelEnergia >= 100) {
            alert (this.nombre + ' no tiene sueño');
        } else {
            this.estadoDurmiendo = true;
        }
    }

    despertar() {
        if (this.estadoDurmiendo === true) {
            this.estadoDurmiendo = false;

            if (this.nivelEnergia < 20) {
                this.estadoMalDormido = true;
            }
        }
    }

    vaciarVegija() {
        this.nivelVegija = 0;
    }

    nadar() {
        this.nivelDiversion = this.nivelDiversion + 40;
        this.nivelEnergia = this.nivelEnergia - 30;
        this.nivelVegija = this.nivelVegija + 40;
    }

    interactuarConObjeto(objeto) {
        objeto.interactuar(this);
    }

}

