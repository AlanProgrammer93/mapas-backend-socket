
class Marcadores {

    constructor() {
        this.activos = {};
    }

    agregarMarcador( marvador ) {
        this.activos[ marvador.id ] = marvador;
        return marvador;
    }

    removerMarcador( id ) {
        delete this.activos[ id ];
    }

    actualizarMarcador( marcador ) {
        this.activos[marcador.id] = marcador;
    }
}

module.exports = Marcadores;