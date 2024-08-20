<template>
	<div class="text-center">
		<div class="icon flex justify-center mb-[16px]">
			<slot name="icon">icon</slot>
		</div>
		<h1 class="title mb-[16px] text-main text-H1 uppercase">
			<slot name="title">title</slot>
		</h1>
		<p class="subtitle text-lightGreen text-lg font-geistMono">
			<slot name="subtitle">subtitle</slot>
		</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
