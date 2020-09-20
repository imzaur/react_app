export default class GotService {
    constructor(){
        this._apiBase = 'https://anapioficeandfire.com/api';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5,pageSize=10');
        return res.map(this._transformCharater);
    }
    getCharacterId = async (id) => {
        const res =  await this.getResource(`/characters/${id}`);
        return this._transformCharater(res);
    }
    getAllHouses = async () => {
        const houses = await this.getResource('/houses/');
        return houses.map(this._transformHouse);    
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }
    getAllBooks = async () => {
        const books = await this.getResource('/books/');
        return books.map(this._tranfromBook);
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._tranfromBook(book);
    }

    _transformCharater(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overload: house.overload,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _tranfromBook(book){
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}