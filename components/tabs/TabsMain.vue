<template>
	<div class="flex gap-3">
		<button
			v-for="tab in tabs"
			:key="tab.id"
			@click="handleClick(tab.content)"
			:class="[
				'font-geistMono py-[8px] px-[12px]  uppercase transition duration-300 ease-in-out border-[1px] border-main',
				tab.content === localSelectedTad ? 'bg-main text-dark' : 'bg-transparent text-main',
			]">
			{{ tab.content }}
		</button>
	</div>
	<slot name="content"></slot>
</template>

<script setup>
const props = defineProps(['tabs', 'selectedTad']);
const emit = defineEmits(['selectedTad']);

let localSelectedTad = ref(props.selectedTad);

function handleClick(content) {
	localSelectedTad.value = content;
	emit('selectedTad', localSelectedTad.value);
}
</script>

<style>
.selected {
	background-color: rgb(189, 44, 44);
}
</style>
