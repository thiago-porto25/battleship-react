const createShips = () => {
  return {
    carrier: {
      totalHits: 0,
      size: 5,
      isSunk: false,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        this.isSunk = this.totalHits >= 5 ? true : false
      },
    },
    battleship: {
      totalHits: 0,
      size: 4,
      isSunk: false,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        this.isSunk = this.totalHits >= 5 ? true : false
      },
    },
    warship: {
      totalHits: 0,
      size: 3,
      isSunk: false,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        this.isSunk = this.totalHits >= 5 ? true : false
      },
    },
    submarine: {
      totalHits: 0,
      size: 3,
      isSunk: false,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        this.isSunk = this.totalHits >= 5 ? true : false
      },
    },
    patrol: {
      totalHits: 0,
      size: 3,
      isSunk: false,
      getHit() {
        this.totalHits = this.totalHits + 1
      },
      checkSunk() {
        this.isSunk = this.totalHits >= 5 ? true : false
      },
    },
  }
}

export default createShips
