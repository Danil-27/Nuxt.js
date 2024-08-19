<template>
	<div class="mb-[40px] text-center">
		<div class="flex justify-center mb-[16px]">
			<slot name="icon">icon</slot>
		</div>
		<h1 class="mb-[16px] text-main text-H1 uppercase">
			<slot name="title">title</slot>
		</h1>
		<p class="text-lightGreen text-lg font-geistMono">
			<slot name="subtitle">subtitle</slot>
		</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
