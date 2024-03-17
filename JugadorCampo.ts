class JugadorCampo extends Jugador {
    private _porcentajeGolesConvertidos: number;
    private _asistenciasRealizadas: number;

    constructor( nombre: string,  fechaNacimiento: Date, posicion: Posicion,  provincia: string, historialEquipos: Equipo[], numeroCamiseta: number, porcentajeGolesConvertidos: number, asistenciasRealizadas: number) {
        super(nombre, fechaNacimiento, posicion , provincia, historialEquipos,numeroCamiseta);
        this._porcentajeGolesConvertidos = porcentajeGolesConvertidos;
        this._asistenciasRealizadas = asistenciasRealizadas;
    }

    get porcentajeGolesConvertidos(): number {
        return this._porcentajeGolesConvertidos;
    }

    set porcentajeGolesConvertidos(porcentajeGolesConvertidos: number) {
        this._porcentajeGolesConvertidos = porcentajeGolesConvertidos;
    }

    get asistenciasRealizadas(): number {
        return this._asistenciasRealizadas;
    }

    set asistenciasRealizadas(asistenciasRealizadas: number) {
        this._asistenciasRealizadas = asistenciasRealizadas;
    }
}