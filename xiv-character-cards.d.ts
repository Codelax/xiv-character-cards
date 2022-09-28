declare namespace "xiv-character-cards" {
    import * as Buffer from "buffer";

    class CardCreator {
        constructor(xivApiKey: string);
        createCard(characterId: number | string, customImage: string | Buffer | null | undefined, language: string): Promise<Buffer>;
    }
}