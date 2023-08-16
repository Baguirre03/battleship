/* eslint-disable prefer-const */
export default function Ship(length, name) {
    let hits = 0;
    let sunk = false;

    function hit() {
        this.hits += 1;
        return this.hits;
    }

    function getLength() {
        return this.length;
    }

    function getHits() {
        return this.hits;
    }

    function isSunk() {
        if (this.length === this.getHits()) {
            return true;
        }
        return false;
    }

    return { length, name, hits, sunk, hit, getHits, getLength, isSunk };
}
