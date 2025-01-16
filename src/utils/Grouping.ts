import { EventEntity } from "../models/Event";

export function groupEventsByCategory<T extends EventEntity>(
    events: T[]
): Record<string, T[]> {
    return events.reduce((groups, event) => {
        const category = event.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(event);
        return groups;
    }, {} as Record<string, T[]>);
}