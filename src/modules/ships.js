function createShips(shipName, shipSize) {
	return {
		shipName: shipName,
		shipSize: Array(shipSize).fill("O"),
		hit(hitLocation) {
			this.shipSize.splice(hitLocation, 1, "X");
			return this.shipSize;
		},
		isSunk() {
			return this.shipSize.includes("O") ? false : true;
		},
	};
}
const shipArray = [];
(function initializeShips() {
	const battleship = createShips("Battleship", 5);
	shipArray.push(battleship);
	const carrier = createShips("Carrier", 6);
	shipArray.push(carrier);
	const destroyer = createShips("Destroyer", 3);
	shipArray.push(destroyer);
	const submarine = createShips("Submarine", 3);
	shipArray.push(submarine);
	const patrolBoat = createShips("Patrol Boat", 2);
	shipArray.push(patrolBoat);

	return shipArray;
})();

export { createShips, shipArray };
