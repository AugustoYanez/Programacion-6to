class Jugador {
    private _nombre: string;
    private _fechaNacimiento: Date;
    private _posicion: Posicion;
    private _provincia: string;
    private _historialEquipos: Equipo[];
    private _numeroCamiseta: number;


    constructor( nombre: string,  fechaNacimiento: Date, posicion: Posicion,  provincia: string, historialEquipos: Equipo[], numeroCamiseta: number,)   {
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._posicion = posicion;
        this._provincia = provincia;
        this._historialEquipos = historialEquipos;
        this._numeroCamiseta = numeroCamiseta;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento: Date) {
        this._fechaNacimiento = fechaNacimiento;
    }

    get posicion(): Posicion {
        return this._posicion;
    }

    set posicion(posicion: Posicion) {
        this._posicion = posicion;
    }

    get provincia(): string {
        return this._provincia;
    }

    set provincia(provincia: string) {
        this._provincia = provincia;
    }

    get historialEquipos(): Equipo[] {
        return this._historialEquipos;
    }

    set historialEquipos(equipos: Equipo[]) {
        this._historialEquipos = equipos;
    }

    agregarEquipo(equipo: Equipo): void {
        this._historialEquipos.push(equipo);
    }

    get numeroCamiseta(): number {
        return this._numeroCamiseta;
    }

    set numeroCamiseta(numeroCamiseta: number) {
        this._numeroCamiseta = numeroCamiseta;
    }

    get edad(): number {
        return new Date().getFullYear() - this._fechaNacimiento.getFullYear();
    }
}