<template>
	<div class="flex flex-col justify-center gap-[40px] container m-auto w-full min-h-[100vh] px-[16px] bg-dark">
		<TitleBlockInfo>
			<template #icon><img src="~/assets/icons/registry/registry.svg" alt="Layer" /> </template>
			<template #title>Nickname</template>
			<template #subtitle>Choose your nickname, or leave the current.</template>
		</TitleBlockInfo>
		<div class="flex flex-col gap-[40px]">
			<InputRegistry v-model:nickname="nickname" :error="error">
				<template #inputTitle>Your nickname</template>
			</InputRegistry>
			<div class="flex gap-[16px]">
				<nuxt-link class="grow" to="/referral"> <Button class="w-full">DONE</Button></nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
const nickname = ref('');
const error = ref('referral is required');
</script>

<style lang="scss" scoped></style>
