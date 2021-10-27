export const formatDate = (date) => {
	const newDate = new Date(date);

	const year = newDate.getFullYear();
	const day = newDate.getDate();
	const month = newDate.getMonth();

	const hours = newDate.getHours();
	const minutes = newDate.getMinutes();

	return `${month.toString().length < 2 ? '0' + month : month}-${day.toString().length < 2 ? '0' + day : day}-${year} ${hours}:${minutes}`;
}