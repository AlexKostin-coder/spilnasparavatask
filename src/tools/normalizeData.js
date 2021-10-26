export function normalizeData(
	data,
	name,
	listName,
	byField = 'id',
) {
	if (Array.isArray(data)) {

		return data.reduce(
			(acc, obj) => {
				acc[name][obj[byField]] = { ...obj };
				acc[listName].push(obj[byField]);
				return acc;
			},
			{
				[name]: {},
				[listName]: [],
			},
		);
	}
	return {
		[name]: { [data[byField]]: data },
		[listName]: Object.keys(data),
	};
}