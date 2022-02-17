import { createShips } from "../dist/main";

describe("Successfully creates a ship", () => {
	it("Creates ship name", () => {
		expect(createShips("Battleship", 4).shipName).toBe("Battleship");
	});
	it("Creates ship length", () => {
		expect(createShips("Battleship", 4).shipSize).toBe(4);
	});
	it("Creates ship's hit function", () => {
		expect(createShips("Battleship", 4).hit()).toBe();
	});

	it("Creates ship's isSunk function", () => {
		expect(createShips("Battleship", 4).isSunk()).toBe();
	});
});
