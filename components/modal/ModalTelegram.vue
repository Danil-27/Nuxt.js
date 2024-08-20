<template>
	<div class="min-h-[50vh] container flex flex-col justify-center px-[20px] bg-dark m-auto border-t-[1px] border-main">
		<div class="absolute top-[26px] right-[26px] flex justify-end">
			<img @click="closeModalChild" class="p-[6px]" src="~/assets/icons/X.svg" alt="X" />
		</div>
		<TitleBlockInfo class="mb-[42px] mt-[46px]">
			<template #icon><img src="~/assets/icons/bonus/telegram-logo.svg" alt="Layer" /> </template>
			<template #title>Join our Telegram channel</template>
			<template #subtitle>And get reward for your first completed task!</template>
		</TitleBlockInfo>
		<nuxt-link to="/registry" class="flex mb-[10px] uppercase"><Button class="grow">SUBSCRIBE</Button></nuxt-link>
		<BlockBonus class="mb-[10px]">
			<template #bonusIcon>
				<img src="~/assets/icons/bonus/bonus.svg" alt="bonus" />
			</template>
			<template #bonusNumber>5000</template>
		</BlockBonus>
	</div>
</template>

<script setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
//
function closeModalChild() {
	emit('update:modelValue', !props.modelValue);
}
</script>

<style lang="scss" scoped>
:deep(.icon) {
	margin-bottom: 18px;
}
:deep(.title) {
	margin-bottom: 8px;
	font-size: 24px;
}
:deep(.subtitle) {
	font-size: 14px;
}
</style>
