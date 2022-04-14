# F1 2022 Opening Auto Generator

Update a config file and render the F1 2022 Opening video with the drivers in a different order

## Instructions

Change the order in `src/config/driverStandings.ts`

Render video using `npm run build`

### Example
Would replace all the drivers with Latifi
```ts
const driverStrandings: {
	[key: number]: Drivers;
} = {
	1: Drivers.Latifi,
	2: Drivers.Latifi,
	3: Drivers.Latifi,
	4: Drivers.Latifi,
	5: Drivers.Latifi,
	6: Drivers.Latifi,
	7: Drivers.Latifi,
	8: Drivers.Latifi,
	9: Drivers.Latifi,
	10: Drivers.Latifi,
	11: Drivers.Latifi,
	12: Drivers.Latifi,
	13: Drivers.Latifi,
	14: Drivers.Latifi,
	15: Drivers.Latifi,
	16: Drivers.Latifi,
	17: Drivers.Latifi,
	18: Drivers.Latifi,
	19: Drivers.Latifi,
	20: Drivers.Latifi,
};
```
