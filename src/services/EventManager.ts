import { EventEntity } from "../models/Event";

export class EventManager {
    private events: Map<string, EventEntity> = new Map();

    createEvent(event: EventEntity): void {
        if (this.events.has(event.id)) {
            throw new Error(`Rendezvény már létezik ezzel az ID-val: ${event.id}`);
        }
        this.events.set(event.id, event);
        console.log(`Rendezvény létrehozva: ${event.name}`);
    }

    deleteEvent(id: string): void {
        if (!this.events.has(id)) {
            throw new Error(`Nincs ilyen rendezvény ezzel az ID-val: ${id}`);
        }
        this.events.delete(id);
        console.log(`Rendezvény törölve: ${id}`);
    }

    updateEvent(id: string, updatedEvent: Partial<EventEntity>): void {
        if (!this.events.has(id)) {
            throw new Error(`Nincs ilyen rendezvény ezzel az ID-val: ${id}`);
        }
        const event = this.events.get(id)!;
        Object.assign(event, updatedEvent);
        console.log(`Rendezvény frissítve: ${event.name}`);
    }

    listEvents(): EventEntity[] {
        return Array.from(this.events.values());
    }

    getEventById(id: string): EventEntity | undefined {
        return this.events.get(id);
    }
}