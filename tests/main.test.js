import { createShips } from "../dist/main";

// describe.each([
// 	{ shipName: "Battleship", shipSize: 4 },
// 	{
// 		shipName: "Carrier",
// 		shipSize: 5,
// 	},
// 	{ shipName: "Destroyer", shipSize: 3 },
// 	{ shipName: "Submarine", shipSize: 3 },
// 	{ shipName: "Patrol Boat", shipSize: 2 },
// ])(`Creates $shipName`, ({ shipName, shipSize }) => {
// 	test(`Return ${shipName}`, () => {
// 		expect(createShips(shipName, shipSize).shipName).toBe(shipName);
// 	});
// 	test(`Return ${shipName} ship size as an array`, () => {
// 		expect(createShips(shipName, shipSize).shipSize).toEqual(
// 			new Array(shipSize).fill("O")
// 		);
// 	});
// 	test(`Creates ship's hit function`, () => {
// 		expect(createShips(shipName, shipSize).hit(0)).toEqual();
// 	});

// 	test(`Creates ship's isSunk function`, () => {
// 		expect(createShips(shipName, shipSize).isSunk()).toBeTruthy();
// 	});
// });

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
	it("Correctly alters this shipSize array to reflect hit on first and fourth position", () => {
		expect(battleship.hit(3)).toEqual(["X", "O", "O", "X"]);
	});

	it("Correctly identified that a ship has NOT sank", () => {
		expect(battleship.isSunk()).toBe(false);
	});
	it("Correctly identified that a ship has sank", () => {
		battleship.shipSize = ["X", "X", "X", "X"];
		expect(battleship.isSunk()).toBe(true);
	});
});
