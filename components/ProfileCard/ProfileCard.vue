<template>
	<div v-if="loading">Loading...</div>
	<div v-else class="profile-card">
		<div class="profile-image">
			<img class="profile-image__img" :src="userData.pic" />
		</div>
		<div class="profile-info">
			<span> Written By </span>
			<h3>{{ userData.name }}</h3>
		</div>
	</div>
</template>

<script setup>
const userData = ref(null);
const loading = ref(true);
const loadSetData = async () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				name: 'jonh',
				pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxQwzkOhOPos_EQVdm6ElGi1iCpXiq4ZMiw&s',
			});
		}, 5000);
	});
};

// Загрузка данных при монтировании компонента
onMounted(async () => {
	userData.value = await loadSetData();
	loading.value = false; // Данные загружены, состояние загрузки завершено
});
</script>

<style lang="scss">
.profile-card {
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	padding: 30px;
	box-sizing: border-box;
	border-radius: 20px;
	background-color: #fff;
	overflow: hidden;
	position: relative;
	min-height: 150px;
}

.profile-card .profile-image__img {
	width: 10%;
	height: auto;
	border-radius: 50%;
	position: absolute;
	top: 30px;
	left: 30px;
}

.profile-card .profile-image__border {
	width: calc(10% + 20px);
	height: auto;
	position: absolute;
	top: 20px;
	left: 20px;
}

.profile-info {
	width: 85%;
	float: right;
	padding-left: 10px;
	box-sizing: border-box;
}

.profile-info span {
	text-transform: uppercase;
	color: #666;
	letter-spacing: 3px;
}

.profile-info h3 {
	margin: 10px 0;
	font-weight: 700;
	font-size: 1.5em;
	color: #222;
}

.profile-info p {
	line-height: 140%;
	color: #666;
}
</style>
