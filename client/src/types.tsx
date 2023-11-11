
export interface BookItem {
    bookId: number;
    title: string;
    author: string;
    price: number;
    isPublic: boolean;
    imgu: string;
}
export interface categoryListItem{
    name:String;
    categoryId:number;
    isSelected: boolean;
}
export interface categories{
    categories: categoryListItem[];
    name?:string;
    selected?:string;
}
export interface name{
    name?: string;
}

//this interface represents the items(books) in our shopping cart
export class ShoppingCartItem {
    id:number;
    item: BookItem;
    quantity: number;

    constructor(theBook: BookItem) {
        this.id = theBook.bookId;
        this.item = theBook;
        this.quantity = 1;
    }
}
// this is used by the reducer. You can define it on the CartReducer
export const initialCartState:ShoppingCartItem[] =  [];
