const Marcadores = require("./marcadores");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // enviar marcadores activos
            socket.emit('marcadores-activos', this.marcadores.activos);

            // enviar nuevo marcador
            socket.on('marcador-nuevo', ( marcador ) => {
                console.log('marcador nuevo');
                this.marcadores.agregarMarcador( marcador );

                socket.broadcast.emit('marcador-nuevo', marcador);
            });

            // enviar marcador actualizado
            socket.on('marcador-actualizado', (marcador) => {
                this.marcadores.actualizarMarcador(marcador);

                socket.broadcast.emit('marcador-actualizado', marcador);
            });

        });
    }


}


module.exports = Sockets;