import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    findAll(params): any{
        let msg = `findAll funcionado. Parámetros:`;

        if(params.order !== undefined){
            msg = msg + ` order: ${params.order}`;
        }
        if(params.limit !== undefined){
            msg = msg + ` limit: ${params.limit}`; 
        }

        return msg;
    }


    createBook(newBook: any){
        return newBook;
    }


    deleteBook(bookId: string){
        return `deleteBook funcionando con bookId: ${bookId}`;
    }



    updateBook(bookId: string, newBook: any){
        return newBook;
    }


    findBook(bookId: string){
        return `findBook funcionando con bookId: ${bookId}`;
    }




}
