<script lang="ts">
	import type { Participant, Team } from '../model/game';

	import SingleParticipant from './SingleParticipant.svelte';
	import GiCrossedSwords from 'svelte-icons/gi/GiCrossedSwords.svelte';
	import GiWhiteTower from 'svelte-icons/gi/GiWhiteTower.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import GiCurledTentacle from 'svelte-icons/gi/GiCurledTentacle.svelte';
	import GiSheikahEye from 'svelte-icons/gi/GiSheikahEye.svelte';
	import GiSpikedDragonHead from 'svelte-icons/gi/GiSpikedDragonHead.svelte';
	import GiCircularSaw from 'svelte-icons/gi/GiCircularSaw.svelte';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';

	export let teamIndex: 0 | 1;
	export let participants: Array<Participant>;
	export let team: Team;

	const getParams = (): string => {
		const gameData = get(game);

		return new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			teamId: teamIndex.toString()
		}).toString();
	};

	const revealChampionKills = async () => {
		try {
			const championKillsResponse = await fetch(`api/game/team/championKills?${getParams()}`);
			const championKillsData: { championKills: number } = await championKillsResponse.json();

			team.championKills = championKillsData.championKills;
		} catch (e) {
			console.log(e);
		}
	};

	const revealTowerKills = async () => {
		try {
			const towerKillsResponse = await fetch(`api/game/team/towerKills?${getParams()}`);
			const towerKillsData: { towerKills: number } = await towerKillsResponse.json();

			team.towerKills = towerKillsData.towerKills;
		} catch (e) {
			console.log(e);
		}
	};

	const revealDragonKills = async () => {
		try {
			const dragonKillsResponse = await fetch(`api/game/team/dragonKills?${getParams()}`);
			const dragonKillsData: { dragonKills: number } = await dragonKillsResponse.json();

			team.dragonKills = dragonKillsData.dragonKills;
		} catch (e) {
			console.log(e);
		}
	};

	const revealRiftHeraldKills = async () => {
		try {
			const riftHeraldKillsResponse = await fetch(`api/game/team/riftHeraldKills?${getParams()}`);
			const riftHeraldKillsData: { riftHeraldKills: number } = await riftHeraldKillsResponse.json();

			team.riftHeraldKills = riftHeraldKillsData.riftHeraldKills;
		} catch (e) {
			console.log(e);
		}
	};

	const revealBaronKills = async () => {
		try {
			const baronKillsResponse = await fetch(`api/game/team/baronKills?${getParams()}`);
			const baronKillsData: { baronKills: number } = await baronKillsResponse.json();

			team.baronKills = baronKillsData.baronKills;
		} catch (e) {
			console.log(e);
		}
	};
	const revealInhibitorKills = async () => {
		try {
			const inhibitorKillsResponse = await fetch(`api/game/team/inhibitorKills?${getParams()}`);
			const inhibitorKillsData: { inhibitorKills: number } = await inhibitorKillsResponse.json();

			team.inhibitorKills = inhibitorKillsData.inhibitorKills;
		} catch (e) {
			console.log(e);
		}
	};
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex w-full justify-start" class:flex-row-reverse={teamIndex === 1}>
		<div
			class="flex items-center justify- just relative px-2 py-1"
			use:tooltip={{
				content: 'Champion kills',
				shouldShow: !isNaN(team.championKills)
			}}
		>
			{#if isNaN(team.championKills)}
				<button
					aria-label="Reveal champion kills"
					on:click={revealChampionKills}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="1rem">
				<GiCrossedSwords />
			</Icon>
			<span class="sr-only">Champion kills</span>
			&nbsp;{team.championKills ?? '?'}
		</div>
		<div
			class="flex items-center justify-center relative px-2 py-1"
			use:tooltip={{
				content: 'Tower kills',
				shouldShow: !isNaN(team.towerKills)
			}}
		>
			{#if isNaN(team.towerKills)}
				<button
					aria-label="Reveal tower kills"
					on:click={revealTowerKills}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="1rem">
				<GiWhiteTower />
			</Icon>
			<span class="sr-only">Tower kills</span>
			&nbsp;{team.towerKills ?? '?'}
		</div>
		<div
			class="flex items-center justify-center relative px-2 py-1"
			use:tooltip={{
				content: 'Dragon kills',
				shouldShow: !isNaN(team.dragonKills)
			}}
		>
			{#if isNaN(team.dragonKills)}
				<button
					aria-label="Reveal dragon kills"
					on:click={revealDragonKills}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="1rem">
				<GiSpikedDragonHead />
			</Icon>
			<span class="sr-only">Dragon kills</span>
			&nbsp;{team.dragonKills ?? '?'}
		</div>
		<div
			class="flex items-center justify-center relative px-2 py-1"
			use:tooltip={{
				content: 'Rift Herald kills',
				shouldShow: !isNaN(team.riftHeraldKills)
			}}
		>
			{#if isNaN(team.riftHeraldKills)}
				<button
					aria-label="Reveal Rift Herald kills"
					on:click={revealRiftHeraldKills}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="1rem">
				<GiSheikahEye />
			</Icon>
			<span class="sr-only">Rift herald kills</span>
			&nbsp;{team.riftHeraldKills ?? '?'}
		</div>
		<div
			class="flex items-center justify-center relative px-2 py-1"
			use:tooltip={{
				content: 'Baron kills',
				shouldShow: !isNaN(team.baronKills)
			}}
		>
			{#if isNaN(team.baronKills)}
				<button
					aria-label="Reveal Baron kills"
					on:click={revealBaronKills}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="1rem">
				<GiCurledTentacle />
			</Icon>
			<span class="sr-only">Baron kills</span>
			&nbsp;{team.baronKills ?? '?'}
		</div>
		<div
			class="flex items-center justify-center relative px-2 py-1"
			use:tooltip={{
				content: 'Inhibitor kills',
				shouldShow: !isNaN(team.inhibitorKills)
			}}
		>
			{#if isNaN(team.inhibitorKills)}
				<button
					aria-label="Reveal inhibitor kills"
					on:click={revealInhibitorKills}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="1rem">
				<GiCircularSaw />
			</Icon>
			<span class="sr-only">Inhibitor kills</span>
			&nbsp;{team.inhibitorKills ?? '?'}
		</div>
	</div>
	<div>
		{#each participants as participant (participant.championId)}
			<SingleParticipant {participant} reversed={Boolean(teamIndex)} />
		{/each}
	</div>
</div>
