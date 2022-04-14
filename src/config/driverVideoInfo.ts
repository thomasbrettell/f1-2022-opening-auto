import {Drivers} from './drivers';

export interface ClipInfo {
	startFrame: number;
	endFrame: number;
}

const driverVideoInfo: {
	[key in Drivers]: ClipInfo;
} = {
	[Drivers.Guanyu]: {
		startFrame: 64,
		endFrame: 118,
	},
	[Drivers.Albon]: {
		startFrame: 118,
		endFrame: 146,
	},
	[Drivers.Magnussen]: {
		startFrame: 209,
		endFrame: 233,
	},
	[Drivers.Ocon]: {
		startFrame: 233,
		endFrame: 256,
	},
	[Drivers.Latifi]: {
		startFrame: 256,
		endFrame: 281,
	},
	[Drivers.Alonso]: {
		startFrame: 281,
		endFrame: 323,
	},
	[Drivers.Tsunoda]: {
		startFrame: 387,
		endFrame: 429,
	},
	[Drivers.Stroll]: {
		startFrame: 429,
		endFrame: 475,
	},
	[Drivers.Gasly]: {
		startFrame: 475,
		endFrame: 520,
	},
	[Drivers.Schumacher]: {
		startFrame: 563,
		endFrame: 609,
	},
	[Drivers.Bottas]: {
		startFrame: 609,
		endFrame: 639,
	},
	[Drivers.Russell]: {
		startFrame: 697,
		endFrame: 740,
	},
	[Drivers.Ricciardo]: {
		startFrame: 740,
		endFrame: 784,
	},
	[Drivers.Vettel]: {
		startFrame: 784,
		endFrame: 830,
	},
	[Drivers.Norris]: {
		startFrame: 875,
		endFrame: 922,
	},
	[Drivers.Sainz]: {
		startFrame: 922,
		endFrame: 971,
	},
	[Drivers.Perez]: {
		startFrame: 971,
		endFrame: 1021,
	},
	[Drivers.Leclerc]: {
		startFrame: 1083,
		endFrame: 1131,
	},
	[Drivers.Hamilton]: {
		startFrame: 1131,
		endFrame: 1193,
	},
	[Drivers.Verstappen]: {
		startFrame: 1193,
		endFrame: 1261,
	},
};

export default driverVideoInfo;
