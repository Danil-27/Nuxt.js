<template>
	<button
		@click="handleClick"
		:disabled="isDisabled"
		:class="isDisabled ? 'opacity-60' : 'hover:bg-additional'"
		class="text-sm py-[8px] px-[12px] bg-main uppercase transition duration-300 ease-in-out border-[1px] border-nain">
		<slot> {{ isDisabled ? loading : textMain }}</slot>
	</button>
</template>

<script setup>
import { ref } from 'vue';

let loading = 'loading';
let textMain = 'Connect wallet';

let isDisabled = ref(false);

function handleClick() {
	setTimeout(() => {
		isDisabled.value = !isDisabled.value;
		return setTimeout(() => {
			isDisabled.value = !isDisabled.value;
		}, 2000);
	}, 500);
}
</script>

<style scoped></style>
