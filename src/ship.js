/* eslint-disable prefer-const */
export default function Ship(length) {
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

    return { length, hits, sunk, hit, getHits, getLength };
}
