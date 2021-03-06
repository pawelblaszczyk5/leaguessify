<script lang="ts">
	import type { Participant, Team } from '../model/game';

	import SingleParticipant from './SingleParticipant.svelte';
	import GiCrossedSwords from 'svelte-icons/gi/GiCrossedSwords.svelte';
	import GiWhiteTower from 'svelte-icons/gi/GiWhiteTower.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import GiCurledTentacle from 'svelte-icons/gi/GiCurledTentacle.svelte';
	import GiSheikahEye from 'svelte-icons/gi/GiSheikahEye.svelte';
	import GiSpikedDragonHead from 'svelte-icons/gi/GiSpikedDragonHead.svelte';
	import GiCircularSaw from 'svelte-icons/gi/GiCircularSaw.svelte';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import Button from '$lib/shared/components/Button.svelte';
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { createEventDispatcher } from 'svelte';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';
	import RevealButton from './RevealButton.svelte';

	const dispatch = createEventDispatcher<{ guess: number }>();

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
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.CHAMPION_KILLS;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		try {
			const championKillsResponse = await fetch(`api/game/team/championKills?${getParams()}`);

			if (!championKillsResponse.ok) {
				await handleRequestNotOk(championKillsResponse);
				return;
			}
			const championKillsData: { championKills: number } = await championKillsResponse.json();

			reduceScoreAfterRevealing(revealType);
			team.championKills = championKillsData.championKills;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const revealTowerKills = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.TOWER_KILLS;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		try {
			const towerKillsResponse = await fetch(`api/game/team/towerKills?${getParams()}`);

			if (!towerKillsResponse.ok) {
				await handleRequestNotOk(towerKillsResponse);
				return;
			}
			const towerKillsData: { towerKills: number } = await towerKillsResponse.json();

			reduceScoreAfterRevealing(revealType);
			team.towerKills = towerKillsData.towerKills;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const revealDragonKills = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.DRAGON_KILLS;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		try {
			const dragonKillsResponse = await fetch(`api/game/team/dragonKills?${getParams()}`);

			if (!dragonKillsResponse.ok) {
				await handleRequestNotOk(dragonKillsResponse);
				return;
			}
			const dragonKillsData: { dragonKills: number } = await dragonKillsResponse.json();

			reduceScoreAfterRevealing(revealType);
			team.dragonKills = dragonKillsData.dragonKills;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const revealRiftHeraldKills = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.RIFT_HERALD_KILLS;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		try {
			const riftHeraldKillsResponse = await fetch(`api/game/team/riftHeraldKills?${getParams()}`);

			if (!riftHeraldKillsResponse.ok) {
				await handleRequestNotOk(riftHeraldKillsResponse);
				return;
			}
			const riftHeraldKillsData: { riftHeraldKills: number } = await riftHeraldKillsResponse.json();

			reduceScoreAfterRevealing(revealType);
			team.riftHeraldKills = riftHeraldKillsData.riftHeraldKills;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const revealBaronKills = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.BARON_NASHOR_KILLS;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		try {
			const baronKillsResponse = await fetch(`api/game/team/baronKills?${getParams()}`);

			if (!baronKillsResponse.ok) {
				await handleRequestNotOk(baronKillsResponse);
				return;
			}
			const baronKillsData: { baronKills: number } = await baronKillsResponse.json();

			reduceScoreAfterRevealing(revealType);
			team.baronKills = baronKillsData.baronKills;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const revealInhibitorKills = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.BARON_NASHOR_KILLS;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}

		try {
			const inhibitorKillsResponse = await fetch(`api/game/team/inhibitorKills?${getParams()}`);

			if (!inhibitorKillsResponse.ok) {
				await handleRequestNotOk(inhibitorKillsResponse);
				return;
			}
			const inhibitorKillsData: { inhibitorKills: number } = await inhibitorKillsResponse.json();

			reduceScoreAfterRevealing(revealType);
			team.inhibitorKills = inhibitorKillsData.inhibitorKills;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const guessWinningTeam = () => {
		dispatch('guess', teamIndex);
	};
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex w-full justify-start" class:flex-row-reverse={teamIndex === 1}>
		<div
			class="flex items-center justify- just relative px-2 py-1"
			use:tooltip={{
				content: 'Champion kills'
			}}
		>
			{#if isNaN(team.championKills)}
				<RevealButton ariaLabel="Reveal champion kills" on:click={revealChampionKills} />
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
				content: 'Tower kills'
			}}
		>
			{#if isNaN(team.towerKills)}
				<RevealButton ariaLabel="Reveal tower kills" on:click={revealTowerKills} />
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
				content: 'Dragon kills'
			}}
		>
			{#if isNaN(team.dragonKills)}
				<RevealButton ariaLabel="Reveal dragon kills" on:click={revealDragonKills} />
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
				content: 'Rift Herald kills'
			}}
		>
			{#if isNaN(team.riftHeraldKills)}
				<RevealButton ariaLabel="Reveal Rift Herald kills" on:click={revealRiftHeraldKills} />
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
				content: 'Baron kills'
			}}
		>
			{#if isNaN(team.baronKills)}
				<RevealButton ariaLabel="Reveal Baron kills" on:click={revealBaronKills} />
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
				content: 'Inhibitor kills'
			}}
		>
			{#if isNaN(team.inhibitorKills)}
				<RevealButton ariaLabel="Reveal inhibitor kills" on:click={revealInhibitorKills} />
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
	<Spacer y={4}>
		<Button on:click={guessWinningTeam}>Guess</Button>
	</Spacer>
</div>
