import { createShips } from "../src/modules/ships";

describe("Successfully creates a ship and ship function operate correctly", () => {
	const battleship = createShips("Battleship", 4);

	it("Correctly creates ship name", () => {
		expect(battleship.shipName).toBe("Battleship");
	});
	it("Correctly creates ship length", () => {
		expect(battleship.shipSize).toEqual(["O", "O", "O", "O"]);
	});
	it("Correctly alters this shipSize array to reflect hit on first position", () => {
		expect(battleship.hit(0)).toEqual(["X", "O", "O", "O"]);
	});
	it("Correctly alters this shipSize array to reflect hit on first and third position", () => {
		expect(battleship.hit(2)).toEqual(["X", "O", "X", "O"]);
	});

	it("Correctly identified that a ship has NOT sank", () => {
		expect(battleship.isSunk()).toBe(false);
	});
	it("Correctly identified that a ship has sank", () => {
		battleship.shipSize = ["X", "X", "X", "X"];
		expect(battleship.isSunk()).toBe(true);
	});
});
