const createShips = () => {
  return {
    checkWinner() {
      if (
        this.carrier.checkSunk() &&
        this.battleship.checkSunk() &&
        this.warship.checkSunk() &&
        this.submarine.checkSunk() &&
        this.patrol.checkSunk()
      )
        return true
      else return false
    },
    carrier: {
      totalHits: 0,
      size: 5,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        return this.totalHits >= this.size
      },
    },
    battleship: {
      totalHits: 0,
      size: 4,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        return this.totalHits >= this.size
      },
    },
    warship: {
      totalHits: 0,
      size: 3,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        return this.totalHits >= this.size
      },
    },
    submarine: {
      totalHits: 0,
      size: 3,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        return this.totalHits >= this.size
      },
    },
    patrol: {
      totalHits: 0,
      size: 2,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        return this.totalHits >= this.size
      },
    },
  }
}

export default createShips
