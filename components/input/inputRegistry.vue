<template>
	<div>
		<p class="mb-[8px] font-geistRegular text-sm text-main uppercase"><slot name="inputTitle">input title</slot></p>
		<input
			v-model="nickname"
			:class="{ '': error }"
			class="input focus:outline-none w-full px-[16px] py-[11px] text-md text-lightGreen bg-dark50 border-main border-[1px] focus:border-main"
			type="text" />
	</div>
</template>

<script setup>
const props = defineProps(['error']);
const nickname = defineModel('nickname');
</script>

<style lang="scss" scoped></style>
