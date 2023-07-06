import { writable } from 'svelte/store';

const emptySubstat: substat = {
  substatID: 0,
  substatName: 'None',
  substatValue: 0
}

const emptymainStat: mainStat = {
  mainStatID: 0,
  mainStatName: 'None'
}

const emptyRelic: relic = {
  setID: 0,
  setName: 'None',
  pieceID: 0,
  pieceName: 'None',
  relicLevel: 0,
  mainStat: emptymainStat,
  substat1: emptySubstat,
  substat2: emptySubstat,
  substat3: emptySubstat,
  substat4: emptySubstat
}

export const mainStatStore = writable<mainStat>(emptymainStat);
export const substat1Store = writable<substat>(emptySubstat);
export const substat2Store = writable<substat>(emptySubstat);
export const substat3Store = writable<substat>(emptySubstat);
export const substat4Store = writable<substat>(emptySubstat);

export const relicStore = writable<relic>(emptyRelic);

mainStatStore.subscribe(value => {
  relicStore.update(n => {
    n.mainStat = value;
    return n;
  })
});

substat1Store.subscribe(value => {
  relicStore.update(n => {
    n.substat1 = value;
    return n;
  })
});

substat2Store.subscribe(value => {
  relicStore.update(n => {
    n.substat2 = value;
    return n;
  })
});

substat3Store.subscribe(value => {
  relicStore.update(n => {
    n.substat3 = value;
    return n;
  })
});

substat4Store.subscribe(value => {
  relicStore.update(n => {
    n.substat4 = value;
    return n;
  })
});
