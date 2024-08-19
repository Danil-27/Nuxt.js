<template>
	<div class="container m-auto w-full min-h-[100vh] px-[16px] bg-dark">
		<TitleBlockInfo>
			<template #icon><img src="~/assets/icons/referral/Layer.svg" alt="Layer" /> </template>
			<template #title>Referral code</template>
			<template #subtitle>Enter your referral code, or just skip this step.</template>
		</TitleBlockInfo>
		<form @submit.prevent="handleSubmit">
			<InputBase>
				<template #inputTitle>Referral code </template>
			</InputBase>
		</form>
	</div>
</template>

<script setup>
const referralCode = ref('');
const referralError = ref('');
</script>

<style lang="scss" scoped></style>
