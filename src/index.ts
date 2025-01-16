import { EventEntity } from "./models/Event";
import { Participant } from "./models/Participant";
import { EventManager } from "./services/EventManager";
import { ParticipantManager } from "./services/ParticipantManager";

const eventManager = new EventManager();
const participantManager = new ParticipantManager();

const event1 = new EventEntity("1", "Szülinap", "Budapest", new Date(), [], "Családi");
const event2 = new EventEntity("2", "Koncert", "Mezőtúr", new Date(), [], "Zenei");

eventManager.createEvent(event1);
eventManager.createEvent(event2);

const participant1 = new Participant("p1", "Pelda Ember", "pelda.ember@example.com");
const participant2 = new Participant("p2", "Example Person", "example.person@example.com");

participantManager.addParticipant(participant1);
participantManager.addParticipant(participant2);

event1.participants.push(participant1.id);
event2.participants.push(participant2.id;