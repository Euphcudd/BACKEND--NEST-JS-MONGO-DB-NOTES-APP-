import { Model } from 'mongoose';
import { Note, NoteDocument } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesService {
    private noteModel;
    constructor(noteModel: Model<NoteDocument>);
    create(createNoteDto: CreateNoteDto): Promise<Note>;
    findAll(): Promise<Note[]>;
    findOne(id: string): Promise<Note>;
    update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note>;
    remove(id: string): Promise<Note>;
}
