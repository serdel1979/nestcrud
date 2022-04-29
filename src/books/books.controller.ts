import { Controller, Get, Param, Query, Req, Post, Body, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';

@Controller('books')
export class BooksController{

    constructor(private booksService: BooksService){}

    @Get()
    findAll(@Req() request: Request){
        return this.booksService.findAll(request.query);
    }

    @Post()
    createBook(@Body()body){
        let newBook:any = body;
        return this.booksService.createBook(newBook);
    }

    @Delete(':bookId')
    deleteBook(@Param('bookId') bookId: string){
        return this.booksService.deleteBook(bookId);
    }

    @Get(':bookId')
    findBook(@Param('bookId') bookId: string){
        return this.booksService.findBook(bookId);
    }

}
