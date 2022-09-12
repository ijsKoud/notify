import type { ScheduleData, ScheduledItem } from "./types";

export class SchedulerTask {
	public date: Date;
	public items: ScheduledItem[];

	public timer: NodeJS.Timeout;

	public constructor(data: ScheduleData) {
		this.date = data.date;
		this.items = data.items;

		const timer = setTimeout(this.run.bind(this), this.date.getTime() - Date.now());
		this.timer = timer;
	}

	public run() {
		for (const item of this.items) {
			console.log(`title: ${item.title}\nmessage: ${item.message}`);
		}
	}
}
