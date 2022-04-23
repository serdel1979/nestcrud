import { Injectable } from '@nestjs/common';
import { BookDto } from './book.dto';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';


@Injectable()
export class BooksService {


    constructor(@InjectRepository(Book) private booksRepository: Repository<Book>){}


    async findAll(params): Promise<Book[]>{
        return await this.booksRepository.find();
    }


    createBook(newBook: BookDto):Promise<Book>{
        return this.booksRepository.save(newBook);
    }


    async deleteBook(bookId: string):Promise<any>{
        return await this.booksRepository.delete({id:parseInt(bookId)});
    }



    async updateBook(bookId: string, newBook: BookDto):Promise<Book>{
        let toUpdate = await this.booksRepository.findOne({ where: {id: parseInt(bookId)}});
        let updated = Object.assign(toUpdate, newBook);
        return this.booksRepository.save(updated);
    }


    async findBook(bookId: string):Promise<Book>{
        return await this.booksRepository.findOne({ where: {id: parseInt(bookId)}});
    }




}
