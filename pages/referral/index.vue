<template>
	<div class="flex flex-col justify-center gap-[40px] container m-auto w-full min-h-[100vh] px-[16px] bg-dark">
		<TitleBlockInfo>
			<template #icon><img src="~/assets/icons/referral/Layer.svg" alt="Layer" /> </template>
			<template #title>Referral code</template>
			<template #subtitle>Enter your referral code, or just skip this step.</template>
		</TitleBlockInfo>
		<form class="flex flex-col gap-[40px]">
			<InputReferral v-model:referral="referralData" :error="error">
				<template #inputTitle>Referral code</template>
			</InputReferral>
			<div class="flex gap-[16px]">
				<nuxt-link class="grow" to="/registry"> <Button class="w-full">Skip</Button></nuxt-link>
				<nuxt-link class="grow"
					><Button type="submit" @click.prevent="checkСorrectReferral()" class="w-full">Next</Button></nuxt-link
				>
			</div>
		</form>
		<transition name="overlay">
			<div
				v-if="isModal"
				@click="isModal = false"
				class="overlay fixed left-0 top-0 w-[100%] h-[100%] z-10 bg-dark opacity-90"></div>
		</transition>
		<transition name="modal">
			<ModalTelegram v-model:modelValue="isModal" v-if="isModal" class="fixed bottom-0 right-[50%] translate-x-[50%] z-20">
			</ModalTelegram
		></transition>
	</div>
</template>

<script setup>
const isModal = ref(false);

const referralData = ref('');
const error = ref('referral is required');

function toggleModal() {
	isModal.value = !isModal.value;
}

function checkСorrectReferral() {
	if (referralData.value.length > 5) {
		toggleModal();
	}
}
</script>

<style lang="scss" scoped>
/* Анимация для фона */
.overlay-enter-active,
.overlay-leave-active {
	transition: opacity 0.7s ease, bottom 0.9s ease, translateY 0.9s ease;
}
.overlay-enter-from,
.overlay-leave-to {
	opacity: 0;
}

/* Анимация для модального окна */
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.9s ease, bottom 0.9s ease, translateY 0.9s ease;
}
/* Появление модального  */
.modal-enter-from {
	bottom: -100%;
	opacity: 0;
}
.modal-enter-to {
	bottom: 0%;
	opacity: 1;
}

/* Исчезновение модального */
.modal-leave-from {
	bottom: 0%;
	opacity: 1;
}
.modal-leave-to {
	bottom: -100%;
	opacity: 0;
}
</style>
