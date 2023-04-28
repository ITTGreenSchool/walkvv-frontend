export interface Footpath {
	id: number;
	name: string;
	description: string;
	imgPath?: string;
	checkpoints?: FootpathCheckpoint[];
	photos?: string[];
	status: FootpathStatus;
	start: string;
	end: string;
	mapCode: string;
}

export enum FootpathStatus {
	InProgress,
	NotDone,
	Done,
}

export interface FootpathCheckpoint {
	location: Coordinate;
}

export interface Coordinate {
	latitude: number;
	longitude: number;
}
