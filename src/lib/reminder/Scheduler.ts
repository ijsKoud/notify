import type { ScheduledDatabaseItem } from "./types";
import moment from "moment";
import { SchedulerTask } from "./SchedulerTask";

export class Scheduler {
	// public constructor() {

	// }

	public async start() {
		const data = await this.getScheduledItems();
		const today: typeof data = [];

		for (const item of data) {
			const date = moment("2022-09-11T22:00:00.000Z");
			const momentDate = moment(item.date);

			if (momentDate.dayOfYear() === date.dayOfYear() && momentDate.get("year") === date.get("year")) today.push(item);
		}

		today.forEach((item) => new SchedulerTask({ date: item.date, items: [item] }));
	}

	public async getScheduledItems(): Promise<ScheduledDatabaseItem[]> {
		return new Promise((res) => {
			const data = [
				{
					date: moment("2022-09-12T14:11:00.000Z").toDate(),
					title: "test",
					message: "Reminder for tomorrow"
				},
				{
					date: new Date("09/15/2022"),
					title: "test",
					message: "Reminder for today"
				},
				{
					date: new Date("09/12/2023"),
					title: "test",
					message: "Reminder"
				},
				{
					date: new Date("09/13/2022"),
					title: "test",
					message: "Reminder for you"
				},
				{
					date: new Date("09/21/2022"),
					title: "test",
					message: "Reminder for time"
				}
			];

			res(data);
		});
	}
}
