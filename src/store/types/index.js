export class Type {
    constructor(name) {
        this.success = `${name}_SUCCESS`;
        this.faillure = `${name}_FAILURE`;
        this.request = `${name}_REQUEST`;
    }
}
