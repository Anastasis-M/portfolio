<script lang="ts">
	export let classes = '';
</script>

<h1
	class={`font-[var(--title-f)] font-black tracking-[2px] sm:tracking-[4px] text-center 
	text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] 
	leading-tight sm:leading-normal
	px-2 sm:px-4 
	${classes}`}
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text; word-break: break-word;"
>
	<slot />
</h1>
