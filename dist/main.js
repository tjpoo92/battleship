function createShips(shipName, shipSize) {
	return {
		shipName: shipName,
		shipSize: new Array(shipSize).fill("O"),
		hit(hitLocation) {
			this.shipSize.splice(hitLocation, 1, "X");
			return this.shipSize;
		},
		isSunk() {
			return this.shipSize.includes("O") ? false : true;
		},
	};
}

// (function initializeShips() {
// 	const battleShip = createShips("Battleship", 5);
// 	const carrier = createShips("Carrier", 6);
// 	const destroyer = createShips("Destroyer", 3);
// 	const submarine = createShips("Submarine", 3);
// 	const patrolBoat = createShips("Patrol Boat", 2);
// })();

export { createShips };
