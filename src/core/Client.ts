export default class Client {
    #id: string | null
    #name: string
    #age: number

    constructor(name: string, age: number, id: string | null) {
        this.#name = name
        this.#age = age
        this.#id = id
    }

    static emptyClient() {
        return new Client("", 0, null)
    }

    // Getters
    public id(): string | null {
        return this.#id;
    }

    public name(): string {
        return this.#name
    }

    public age(): number {
        return this.#age
    }

    // Setters
    public setId(id: string): void {
        this.#id = id
    }

    public setName(name: string): void {
        this.#name = name
    }

    public setAge(age: number): void {
        this.#age = age
    }
}
    