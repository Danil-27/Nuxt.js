<template>
	<NuxtPage />
	<!-- <div class="flex justify-center">
		<div class="inline-flex items-center flex-col gap-4">
			<ButtomAdditionalButton></ButtomAdditionalButton>
			<ButtomAdditionalButtonIcon>
				<template #btnText>
					<div>btn</div>
				</template>
				<template #btnIcon>
					<div>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3.42383 3.33331L11.7347 14.6666H14.7572L6.44629 3.33331H3.42383Z"
								stroke="#9FE0C1"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M3.42383 14.6666L8.21783 9.87265M9.96033 8.13015L14.7572 3.33331"
								stroke="#9FE0C1"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</div>
				</template>
			</ButtomAdditionalButtonIcon>
			<ButtomButtonIcon>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M7.32422 11.7963C7.39414 11.866 7.44962 11.9487 7.48748 12.0399C7.52533 12.1311 7.54482 12.2288 7.54482 12.3275C7.54482 12.4262 7.52533 12.524 7.48748 12.6151C7.44962 12.7063 7.39414 12.7891 7.32422 12.8588L7.00422 13.1788C6.66453 13.5197 6.26062 13.7899 5.81585 13.9738C5.37107 14.1577 4.89426 14.2516 4.41297 14.25C3.68818 14.2503 2.9796 14.0355 2.37689 13.6329C1.77417 13.2304 1.3044 12.6581 1.027 11.9885C0.749603 11.3189 0.677047 10.582 0.818511 9.87119C0.959975 9.16034 1.3091 8.50741 1.82172 7.99502L3.9936 5.82315C4.45556 5.36126 5.03258 5.03124 5.66492 4.86725C6.29726 4.70326 6.96194 4.71126 7.59015 4.89043C8.21836 5.0696 8.78727 5.41342 9.23797 5.8863C9.68867 6.35919 10.0048 6.94394 10.1536 7.58002C10.1782 7.67674 10.1833 7.7774 10.1686 7.87611C10.1538 7.97482 10.1195 8.06959 10.0677 8.15487C10.0158 8.24015 9.94747 8.31422 9.86662 8.37274C9.78578 8.43127 9.69407 8.47307 9.59686 8.4957C9.49966 8.51833 9.39891 8.52132 9.30053 8.50452C9.20215 8.48771 9.10812 8.45144 9.02393 8.39782C8.93975 8.34421 8.86712 8.27433 8.81029 8.19229C8.75346 8.11024 8.71357 8.01768 8.69297 7.92002C8.60467 7.54454 8.41769 7.19946 8.15135 6.92045C7.88501 6.64144 7.54898 6.43863 7.17801 6.33298C6.80703 6.22734 6.41457 6.22269 6.0412 6.31952C5.66783 6.41635 5.3271 6.61115 5.05422 6.88377L2.88235 9.05565C2.5796 9.35815 2.37337 9.74363 2.28971 10.1633C2.20606 10.5831 2.24876 11.0182 2.4124 11.4136C2.57603 11.8091 2.85327 12.1471 3.20904 12.385C3.56481 12.6229 3.98313 12.7499 4.4111 12.75C4.69546 12.7508 4.97715 12.6952 5.23988 12.5864C5.50261 12.4777 5.74116 12.3179 5.94172 12.1163L6.2611 11.7963C6.33079 11.7263 6.41362 11.6707 6.50484 11.6328C6.59606 11.5949 6.69388 11.5754 6.79266 11.5754C6.89145 11.5754 6.98926 11.5949 7.08048 11.6328C7.1717 11.6707 7.25454 11.7263 7.32422 11.7963ZM14.1773 2.82315C13.4899 2.13597 12.5578 1.74994 11.5858 1.74994C10.6138 1.74994 9.68163 2.13597 8.99422 2.82315L8.67485 3.14252C8.53395 3.28342 8.4548 3.47452 8.4548 3.67377C8.4548 3.87303 8.53395 4.06413 8.67485 4.20502C8.81574 4.34592 9.00684 4.42508 9.2061 4.42508C9.40536 4.42508 9.59645 4.34592 9.73735 4.20502L10.0573 3.88503C10.4635 3.47891 11.0143 3.25076 11.5886 3.25076C12.1629 3.25076 12.7137 3.47891 13.1198 3.88503C13.526 4.29114 13.7541 4.84194 13.7541 5.41628C13.7541 5.99061 13.526 6.54141 13.1198 6.94753L10.9442 9.11627C10.7437 9.31791 10.5052 9.47775 10.2424 9.58654C9.97968 9.69533 9.69797 9.75089 9.4136 9.75002C8.92578 9.74968 8.45239 9.58455 8.07019 9.28142C7.68799 8.9783 7.4194 8.55494 7.30797 8.08002C7.26289 7.88625 7.14267 7.71832 6.97377 7.61319C6.80487 7.50805 6.60112 7.47431 6.40735 7.5194C6.21358 7.56449 6.04565 7.6847 5.94051 7.8536C5.83537 8.0225 5.80164 8.22625 5.84672 8.42002C6.03492 9.22432 6.48929 9.94146 7.13616 10.4551C7.78303 10.9688 8.58445 11.2489 9.41047 11.25H9.4136C9.89511 11.2513 10.3721 11.1572 10.817 10.973C11.2619 10.7888 11.6658 10.5182 12.0055 10.1769L14.1773 8.00502C14.5176 7.6648 14.7876 7.26088 14.9718 6.81632C15.1559 6.37177 15.2507 5.89528 15.2507 5.41409C15.2507 4.93289 15.1559 4.45641 14.9718 4.01185C14.7876 3.56729 14.5176 3.16337 14.1773 2.82315Z"
						fill="#030203" />
				</svg>
			</ButtomButtonIcon>
			<ButtomMainButton></ButtomMainButton>
		</div>
	</div> -->
	<div class="links flex gap-5 my-5 p-3">
		<nuxt-link class="link" to="/">/111111111111</nuxt-link>
		<nuxt-link class="link" to="/home">home</nuxt-link>
		<nuxt-link class="link" to="/about">about</nuxt-link>
	</div>
	<TabsMain :tabs="tabs" :selectedTad="selectedTad" @selectedTad="updateTab">
		<template #content>
			<div class="text-white" v-if="selectedTad === 'All'">
				All Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in voluptatum expedita dignissimos rerum deserunt
				optio eum voluptate, minima numquam voluptates veritatis ea nemo ducimus perspiciatis rem quaerat? Iste, cupiditate?
			</div>
			<div class="text-white" v-if="selectedTad === 'Available'">Available voluptates veritatis ea nemo ducimus pers</div>
			<div class="text-white" v-if="selectedTad === 'Completed'">
				Completed voluptatum expedita dignissimos rerum deserunt optio eum voluptate, minima numquam voluptates veritatis ea nemo
				ducimus perspi
			</div>
		</template>
	</TabsMain>
</template>

<script setup>
const tabs = ref([
	{ id: 1, content: 'All' },
	{ id: 2, content: 'Available' },
	{ id: 3, content: 'Completed' },
]);
const selectedTad = ref('');

function updateTab(data) {
	selectedTad.value = data;
}
</script>

<style lang="scss">
.link {
	margin-right: 10px;
	text-decoration: none;
	color: black;
	transition: color 0.3s;

	&:hover {
		color: blue;
	}
}
body,
html {
	background-color: var(--darck);
}
.block {
	width: 40px;
	height: 40px;
}
</style>
