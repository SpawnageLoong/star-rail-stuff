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