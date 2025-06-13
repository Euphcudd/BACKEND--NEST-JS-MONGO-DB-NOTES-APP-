import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: CreateNoteDto): Promise<import("./schemas/note.schema").Note>;
    findAll(): Promise<import("./schemas/note.schema").Note[]>;
    findOne(id: string): Promise<import("./schemas/note.schema").Note>;
    update(id: string, updateNoteDto: UpdateNoteDto): Promise<import("./schemas/note.schema").Note>;
    remove(id: string): Promise<import("./schemas/note.schema").Note>;
}
