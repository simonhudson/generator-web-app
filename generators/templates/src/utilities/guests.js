import { get } from '~/utilities/api';

const transform = (response) => {
	return response;
};

const getGuests = async () => await get(`guests`);

module.exports = {
	getGuests,
	getGuestsByTable: async (tableNumber) => {
		const guests = await getGuests();
		let guestsForTable = null;
		if (guests && guests.data && guests.data.length)
			guestsForTable = guests.data.filter((guest) => guest.table === tableNumber);
		return guestsForTable;
	},
	getBrideAndGroom: async () => {
		const guests = await getGuests();
		let bride;
		let groom;
		if (guests && guests.data && guests.data.length) {
			bride = guests.data.find((guest) => guest.isBride);
			groom = guests.data.find((guest) => guest.isGroom);
		}
		return { bride, groom };
	},
};
