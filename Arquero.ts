class Arquero extends Jugador {
    private _porcentajeAtajadas: number;
    private _golesRecibidos: number;

    constructor( nombre: string,  fechaNacimiento: Date, posicion: Posicion.Arquero,  provincia: string, historialEquipos: Equipo[], numeroCamiseta: number, porcentajeAtajadas: number, golesRecibidos: number) {
        super(nombre, fechaNacimiento, posicion , provincia, historialEquipos,numeroCamiseta);
        this._porcentajeAtajadas = porcentajeAtajadas;
        this._golesRecibidos = golesRecibidos;
    }

    get porcentajeAtajadas(): number {
        return this._porcentajeAtajadas;
    }

    set porcentajeAtajadas(porcentajeAtajadas: number) {
        this._porcentajeAtajadas = porcentajeAtajadas;
    }

    get golesRecibidos(): number {
        return this._golesRecibidos;
    }

    set golesRecibidos(golesRecibidos: number) {
        this._golesRecibidos = golesRecibidos;
    }
}