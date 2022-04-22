import { Controller, Get, Param, Query, Req, Post, Body, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDto } from './book.dto';

@Controller('books')
export class BooksController{

    constructor(private booksService: BooksService){}

    @Get()
    findAll(@Req() request: Request){
        return this.booksService.findAll(request.query);
    }

    @Post()
    createBook(@Body()newBook: BookDto){
        return this.booksService.createBook(newBook);
    }

    @Delete(':bookId')
    deleteBook(@Param('bookId') bookId: string){
        return this.booksService.deleteBook(bookId);
    }


    @Put(':bookId')
    updateBook(@Param('bookId') bookId: string, @Body() body){
        let newBook: BookDto = body;
        return this.booksService.updateBook(bookId,newBook);
    }


    @Get(':bookId')
    findBook(@Param('bookId') bookId: string){
        return this.booksService.findBook(bookId);
    }

}
