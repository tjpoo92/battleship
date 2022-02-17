function createShips(shipName, shipSize) {
	const hit = () => console.log("hit");
	const isSunk = () => console.log("isSuck");
	return {
		shipName: shipName,
		shipSize: shipSize,
		hit,
		isSunk,
	};
}
(function initializeShips() {
	const battleShip = createShips("Battleship", 5);
	const carrier = createShips("Carrier", 6);
	const destroyer = createShips("Destroyer", 3);
	const submarine = createShips("Submarine", 3);
	const patrolBoat = createShips("Patrol Boat", 2);
})();

export { createShips };
