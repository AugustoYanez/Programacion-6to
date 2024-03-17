class Equipo implements Contrato {
    private _nombre: string;
    private _jugadores: Jugador[] = [];
    private _sanciones: Map<Jugador, { amarillas: number, rojas: number }> = new Map();

    constructor(nombre: string, jugadores: Jugador[], sanciones: Map<Jugador, { amarillas: number, rojas: number }>  ) {
        this._nombre = nombre;
        this._jugadores = jugadores;
        this._sanciones = sanciones;
    }

    get nombre(): string {
        return this._nombre;
    }

    get jugadores(): Jugador[] {
        return this._jugadores;
    }

    get sanciones(): Map<Jugador, { amarillas: number, rojas: number }> {
        return this._sanciones;
    }

    contratar(jugador: Jugador): void {
        if (this._jugadores.some(j => j.nombre === jugador.nombre)) {
            throw new Error(`El jugador ${jugador.nombre} ya está en el equipo.`);
        }

        if (jugador.posicion === Posicion.Arquero) {
            const arquero = jugador as Arquero;
            if (arquero.porcentajeAtajadas < 60 || arquero.golesRecibidos >= 10) {
                throw new Error(`El arquero ${jugador.nombre} no cumple los requisitos para ser contratado.`);
            }
        } else {
            const jugadorCampo = jugador as JugadorCampo;
            if (jugadorCampo.porcentajeGolesConvertidos < 30 || jugadorCampo.asistenciasRealizadas <= 10) {
                throw new Error(`El jugador de campo ${jugador.nombre} no cumple los requisitos para ser contratado.`);
            }
        }

        console.log(`El jugador ${jugador.nombre} se contrató en ${this._nombre}.`);
        this._jugadores.push(jugador);
    }

    renovar(jugador: Jugador): void {
        const jugadorEnEquipo = this._jugadores.find(j => j.nombre === jugador.nombre);
        if (!jugadorEnEquipo) {
            throw new Error(`El jugador ${jugador.nombre} no está en el equipo.`);
        }

        if (jugadorEnEquipo.historialEquipos[jugadorEnEquipo.historialEquipos.length - 1]._nombre !== this._nombre) {
            throw new Error(`El jugador ${jugador.nombre} no puede renovar porque no está en el equipo actualmente.`);
        }

        if (jugador.edad > 35) {
            throw new Error(`El jugador ${jugador.nombre} tiene más de 35 años y no puede renovar.`);
        }

        console.log(`El jugador ${jugador.nombre} se renovó en ${this._nombre}.`);
    }

}