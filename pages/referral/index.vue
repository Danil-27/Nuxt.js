<template>
	<div class="flex flex-col justify-center gap-[40px] container m-auto w-full min-h-[100vh] px-[16px] bg-dark">
		<TitleBlockInfo>
			<template #icon><img src="~/assets/icons/referral/Layer.svg" alt="Layer" /> </template>
			<template #title>Referral code</template>
			<template #subtitle>Enter your referral code, or just skip this step.</template>
		</TitleBlockInfo>
		<div class="flex flex-col gap-[40px]">
			<inputReferral v-model:referral="referral" :error="error">
				<template #inputTitle>Referral code</template>
			</inputReferral>
			<div class="flex gap-[16px]">
				<nuxt-link class="grow" to="/registry"> <Button class="w-full">Skip</Button></nuxt-link>
				<nuxt-link class="grow" to="/registry"><Button class="w-full">Next</Button></nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
const referral = ref('');
const error = ref('referral is required');
</script>

<style lang="scss" scoped></style>
