import { EventEntity } from "./models/Event";
import { Participant } from "./models/Participant";
import { EventManager } from "./services/EventManager";
import { ParticipantManager } from "./services/ParticipantManager";
import { groupEventsByCategory } from "./utils/Grouping";

// Rendezvénnyel kapcsolatos példák a funkciókra
const eventManager = new EventManager();

const event1 = new EventEntity("1", "Koncert", "Budapest", new Date(), [], "Zenei");
const event2 = new EventEntity("2", "Sportnap", "Debrecen", new Date(), [], "Sport");
const event3 = new EventEntity("3", "Családi nap", "Győr", new Date(), [], "Családi");

eventManager.createEvent(event1);
eventManager.createEvent(event2);
eventManager.createEvent(event3);

console.log("Rendezvények listája:");
console.log(eventManager.listEvents());

eventManager.updateEvent("1", { name: "Éjszakai Koncert" });
console.log("Frissített rendezvény:");
console.log(eventManager.getEventById("1"));

eventManager.deleteEvent("2");
console.log("Rendezvények a törlés után:");
console.log(eventManager.listEvents());

const groupedEvents = groupEventsByCategory(eventManager.listEvents());
console.log("Kategória szerinti csoportosítás:");
console.log(groupedEvents);

// Résztvevőkkel kapcsolatos példák a funkciókra
const participantManager = new ParticipantManager();

const participant1 = new Participant("p1", "Kiss János", "janos.kiss@example.com");
const participant2 = new Participant("p2", "Nagy Anna", "anna.nagy@example.com");
const participant3 = new Participant("p3", "Szabó Péter", "peter.szabo@example.com");

participantManager.addParticipant(participant1);
participantManager.addParticipant(participant2);
participantManager.addParticipant(participant3);

console.log("Résztvevők listája:");
console.log(participantManager.listParticipants());

console.log("Résztvevő adatai ID alapján:");
console.log(participantManager.getParticipantById("p2"));

participantManager.removeParticipant("p3");
console.log("Résztvevők a törlés után:");
console.log(participantManager.listParticipants());

event1.participants.push(participant1.id);
event1.participants.push(participant2.id);

event3.participants.push(participant2.id);

console.log("Résztvevők hozzárendelve a rendezvényekhez:");
console.log(eventManager.listEvents());