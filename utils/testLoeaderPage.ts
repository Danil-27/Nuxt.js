export const userData = ref(null);
export const loading = ref(true);
export const loadSetData = async () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				name: 'jonh',
				pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxQwzkOhOPos_EQVdm6ElGi1iCpXiq4ZMiw&s',
			});
		}, 1000);
	});
};
// export onMounted(async () => {
// 	userData.value = await loadSetData();
// 	loading.value = false; // Данные загружены, состояние загрузки завершено
// });
