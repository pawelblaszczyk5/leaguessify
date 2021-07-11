<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaBlog from 'svelte-icons/fa/FaBlog.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaAt from 'svelte-icons/fa/FaAt.svelte';
	import Section from '$lib/shared/components/Section.svelte';
	import IconLink from '$lib/about/components/IconLink.svelte';
</script>

<Section>
	<h1 class="text-center text-2xl">About the game</h1>
	<p class="text-center my-3">
		Leaguessify is my side-project built with SvelteKit. It's completely open-source and free to
		play It uses League of Legends API to provide information about the game statistics. The idea is
		taken from Reddit user <a
			class="text-blue-700 dark:text-blue-300"
			href="https://www.reddit.com/user/ClarenceDandridge/"
			rel="external nofollow noreferrer">u/ClarenceDandridge</a
		>, who made a simpler version of it. Here is my take on the same idea. I wanted to take it a
		step further and make it more analytical, random, and engaging. From here, I want to thank
		everyone from Riot Games API Developer Community. Especially Canisback, who is providing data
		that is powering this site. <br /><br />If you have any ideas about the future features of this
		game, you can reach out to me with the links below. To name a few that I have - add players or
		average game rank, other games mode, and some type of leaderboards/competing aspect.
	</p>
</Section>
<Section>
	<h1 class="text-center text-2xl">About me</h1>
	<p class="text-center my-3">
		My name is Paweł Błaszczyk, and I'm a web developer from Poland. I enjoy coding and trying new
		things, so I often end up doing side-projects to learn some new technologies in my free time.
		Below you can find some links where you can find me online. The Github one is where you can find
		all of my projects' source code. Feel free to contact me whether you have any feedback about
		this game or any of my work in general or just want a friendly chat.
	</p>
	<div class="flex items-center justify-evenly w-full my-4 max-w-sm">
		<IconLink href="https://github.com/pawelblaszczyk5" title="Github">
			<FaGithub />
		</IconLink>
		<IconLink href="https://pawel-blaszczyk-blog.netlify.app/" title="Blog">
			<FaBlog />
		</IconLink>
		<IconLink href="https://www.linkedin.com/in/pawel-blaszczyk/" title="LinkedIn">
			<FaLinkedinIn />
		</IconLink>
		<IconLink href="mailto:pawelblaszczyk@wir.pl" title="Email">
			<FaAt />
		</IconLink>
	</div>
</Section>
