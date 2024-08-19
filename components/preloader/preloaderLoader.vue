<template>
	<div>
		<img src="~/assets/image/preloader/loader.png" alt="loader..." />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
img {
	animation: loader 2s linear infinite;
}

@keyframes loader {
	0% {
		transform: rotate(360deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
</style>
