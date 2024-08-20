<template>
	<button
		@click="handleClick"
		:disabled="isDisabled"
		:class="isDisabled ? 'opacity-60' : 'hover:shadow-[0_0_0_1px] hover:shadow-main'"
		class="text-xs flex gap-[6px] items-center py-[13px] px-[20px] uppercase bg-transparent text-main border border-main transition-all duration-1000 ease-in-out">
		<p>
			<slot name="btnText"> {{ isDisabled ? loading : textMain }}</slot>
		</p>
		<slot name="btnIcon"></slot>
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
