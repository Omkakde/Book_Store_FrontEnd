import axios from "axios";

const BOOK_URL =`https://bookstore.incubation.bridgelabz.com/bookstore_user/`;

export const getAllBooksAPI =(PATH)=>{
    console.log("api")
    return axios.get(`${BOOK_URL}${PATH}`);

}