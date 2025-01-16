import { Participant } from "../models/Participant";

export class ParticipantManager {
    private participants: Map<string, Participant> = new Map();

    addParticipant(participant: Participant): void {
        if (this.participants.has(participant.id)) {
            throw new Error(`Résztvevő már létezik ezzel az ID-val: ${participant.id}`);
        }
        this.participants.set(participant.id, participant);
        console.log(`Résztvevő hozzáadva: ${participant.name}`);
    }

    removeParticipant(id: string): void {
        if (!this.participants.has(id)) {
            throw new Error(`Nincs ilyen résztvevő ezzel az ID-val: ${id}`);
        }
        this.participants.delete(id);
        console.log(`Résztvevő eltávolítva: ${id}`);
    }

    listParticipants(): Participant[] {
        return Array.from(this.participants.values());
    }

    getParticipantById(id: string): Participant | undefined {
        return this.participants.get(id);
    }
}