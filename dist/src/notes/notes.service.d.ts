import { Repository } from 'typeorm';
import { Note } from './note.entity';
export declare class NotesService {
    private notesRepository;
    constructor(notesRepository: Repository<Note>);
    getNotes(): Promise<Note[]>;
    findOne(id: string): Promise<Note>;
    createNote(note: Note): Promise<void>;
    remove(id: string): Promise<void>;
    editNote(id: number, note: Note): Promise<Note>;
}
