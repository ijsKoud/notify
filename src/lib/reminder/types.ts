export interface ScheduleData {
	date: Date;
	items: ScheduledItem[];
}

export interface ScheduledItem {
	title: string;
	message: string;
}

export interface ScheduledDatabaseItem {
	title: string;
	message: string;
	date: Date;
}
