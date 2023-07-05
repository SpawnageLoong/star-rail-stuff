import { writable } from 'svelte/store';

const emptySubstat: substat = {
  substatID: 0,
  substatName: 'None',
  substatValue: 0
}

const emptyMainstat: mainStat = {
  mainstatID: 0,
  mainstatName: 'None'
}

export const relicStore = writable<relic>({
  setID: 0,
  setName: 'None',
  pieceID: 0,
  pieceName: 'None',
  relicLevel: 0,
  mainstat: emptyMainstat,
  substat1: emptySubstat,
  substat2: emptySubstat,
  substat3: emptySubstat,
  substat4: emptySubstat
});

export const substat1Store = writable<substat>(emptySubstat);
export const substat2Store = writable<substat>(emptySubstat);
export const substat3Store = writable<substat>(emptySubstat);
export const substat4Store = writable<substat>(emptySubstat);
