import { writable } from 'svelte/store';

export interface customRelicStore extends writable<customRelic> {
  subscribe: (this: void, run: Subscriber<customRelic>, invalidate?: Invalidator<customRelic>) => Unsubscriber;
  setSetID: (setID: number) => void,
  setPieceID: (pieceID: number) => void,
  setRelicLevel: (relicLevel: number) => void,
  setMainStatID: (mainStatID: number) => void,
  setSubstatID: (substatIndex:number, substatID: number) => void,
  setSubstatValue: (substatIndex: number, substatVal: number) => void
}

function createRelicStore() {
  const { subscribe, set, update } = writable<customRelic>({
    setID: 0,
    pieceID: 0,
    relicLevel: 0,
    mainStatID: 0,
    substatIDs: [0,0,0,0],
    substatValues: [0,0,0,0]
  });
  return {
    subscribe,
    set,
    update,
    setSetID: (setID: number) => update((n) => { n.setID = setID; return n; }),
    setPieceID: (pieceID: number) => update((n) => { n.pieceID = pieceID; return n; }),
    setRelicLevel: (relicLevel: number) => update((n) => { n.relicLevel = relicLevel; return n; }),
    setMainStatID: (mainStatID: number) => update((n) => { n.mainStatID = mainStatID; return n; }),
    setSubstatID: (substatIndex:number, substatID: number) => update((n) => { n.substatIDs[substatIndex] = substatID; return n; }),
    setSubstatValue: (substatIndex: number, substatVal: number) => update((n) => { n.substatValues[substatIndex] = substatVal; return n; })
  };
}

export const customRelicStore = createRelicStore();

export const relicList = writable<relicData[]>([]);
