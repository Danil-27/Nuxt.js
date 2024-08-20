<template>
	<div class="flex justify-center gap-[10px] py-[8px] w-full">
		<div class="max-w-[32px] max-h-[32px]"><slot class="w-full" name="bonusIcon">icon</slot></div>
		<p class="text-main text-[20px]"><slot name="bonusNumber">0</slot></p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
