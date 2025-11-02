import type { BookDraft } from "./Book-draft";


export interface Book extends BookDraft{
    id: string,
    createdAt: Date | string;
    updatedAt: Date | string;
}