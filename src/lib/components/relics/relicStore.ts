import { writable } from 'svelte/store';

interface mainStat {
  mainstatID: number,
  mainstatName: string
}

interface substat {
  substatID: number,
  substatName: string,
  substatValue: number,
}

interface relic {
  setID: number,
  setName: string,
  pieceID: number,
  pieceName: string,
  relicLevel: number,
  mainstat: mainStat,
  substat1: substat,
  substat2: substat,
  substat3: substat,
  substat4: substat
}

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
