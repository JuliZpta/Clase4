/*//ClasePadre
class Animal{
  constructor(especie,color,sonido,habitat){
      this.especie= especie
      this.color = color
      this.sonido = sonido
      this.habitat= habitat
  }

  moverse(tipomovimiento){
      console.log(`Mi movimiento es : ${tipomovimiento}`)
  }

  determinarEspecie(){
      return this.especie
  }

  sonidoCaracteristico(){
      return this.sonido
  }

  dondeSeEncuentra(){
      return this.habitat
  }
}

class Perro extends Animal{
  constructor(raza,color,sonido){
     
      super(raza,color,sonido,'Casa')//Inicializar el construcor del padre
  }

  ladrar(){
      return this.sonido;
  }
  
  sentarse(){
      console.log('Me he sentado')
  }
}

const Labrador= new Perro('Labrador','Negro', 'Woof')
Labrador.sentarse()
console.log(Labrador.sonidoCaracteristico()) //regresa en console 'Woof'


// CLASE QUE RECIBEN OBJETOS
      //CLASE PAPA
class Musica{
  constructor(info){
      this.fechaLanzamiento = info.fechaLanzamiento;
      this.artista = info.artista;
      this.genero= info.genero;
      this.titulo = info.titulo; 
  }

  reproducir(){
      console.log(`Se está reproduciendo ${this.titulo} del artista ${this.artista}`)
  }

  pausar(){
      return `Se ha pausado ${this.titulo} del artista ${this.artista}`
  }
}

//creoel objeto
const informacion = {
  fechaLanzamiento: 1992,
  artista: 'Maná',
  genero:'Rock Español',
  titulo:'Oye Mi Amor'
}
const RockEsp = new Musica(informacion)
RockEsp.reproducir();

const RockEsp1 = new Musica(
  {
      fechaLanzamiento: 1997;
      artista: 'Andrés Calamaro',
      genero:'Rock Español',
      titulo:'Flaca'
  }
)

RockEsp1.reproducir();*/

class Vehiculo {
  constructor(velocidadMaxima, tipoVehiculo, marca) {
    this.velocidadMaxima = velocidadMaxima;
    this.tipoVehiculo = tipoVehiculo;
    this.marca = marca;
  }

  getVelocidadMaxima() {
    return `Velocidad maxima: ${this.velocidadMaxima}`;
  }

  getTipoVehiculo() {
    return `Tipo vehiculo: ${this.tipoVehiculo}`;
  }

  getMarca() {
    return `Marca del vehiculo: ${this.marca}`;
  }
}

class Moto extends Vehiculo {
  constructor({ velocidadMaxima, tipoVehiculo, marca, pasajerosMaximos }) {
    super(velocidadMaxima, tipoVehiculo, marca);
    this.pasajerosMaximos = pasajerosMaximos;
  }

  getPasajerosMaximos() {
    return `Pasajeros maximos: ${this.pasajerosMaximos}`;
  }
}

const r6 = new Moto({
  velocidadMaxima: 262,
  tipoVehiculo: "Moto Deportiva",
  pasajerosMaximos: 2,
  marca: "YAMAHA"
});

console.log(r6.getTipoVehiculo());
console.log(r6.getVelocidadMaxima());
console.log(r6.getPasajerosMaximos());
console.log(r6.getMarca());
