import { NextFunction, Request, Response } from "express";
import Book from "../../models/Books";
import Author from "../../models/Authors";
import { Op } from "sequelize";

export async function createBook(req: Request, res: Response, next: NextFunction) {

    try {
        const newBook = await Book.create(req.body)
        await newBook.reload({include: Author})
        res.json(newBook)
    } catch (e) {
        next(e)
    }
}


export async function deleteBook(req: Request, res: Response, next: NextFunction) {
  try {
    const book = await Book.findByPk(req.params.id)
    if (!book) return res.status(404).json({ error: "Book not found" })
    await book.destroy()
    res.json({ message: "Book deleted" })
  } catch (e) {
    next(e)
  }
}


export async function searchBooks(req: Request, res: Response, next: NextFunction) {
  try {
    const q = req.query.q as string
    const books = await Book.findAll({
      where: {
        bookName: { [Op.like]: `%${q}%` }
      },
      include: Author
    })
    res.json(books)
  } catch (e) {
    next(e)
  }
}