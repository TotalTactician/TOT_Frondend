<script lang="ts">
	import BlueThingPage from "./BlueThingPage.svelte";
	import RedThingPage from "./RedThingPage.svelte";

	const options = [
		{ name: 'blue',  component: BlueThingPage},
		{ name: 'red',  component: RedThingPage},
	]

    let selected = options[0];
</script>
<h1>TotalTactician Component Library</h1>
<div class="row">
	<div id="CompList">
		<h2>Componet List</h2>
		<div>
			<ul>
				{#each options as option}
				<li on:click={() => selected = option} >{option.name}</li>
				{/each}
			</ul> 
		</div>
	</div>
	<div id="CompPage">
		<svelte:component this={selected.component}/>
	</div>
</div>
<style lang="scss">
	* {
  		box-sizing: border-box;
		font-family: sans-serif;
	}	

	#CompList {
		border: 4px gray solid;
		border-right: 2px gray solid;
		float: left;
		width: 20%;
		min-width: 160px;
		height: 90vh;
		padding: 10px;
		overflow: hidden;

		h2 {
		text-align: center;
		color: white;
		background-color: darkred;
		padding: 2px 10px;
		}

		div {
			height: calc(100% - 50px);
			overflow-y: auto;

			ul {
				list-style-type:circle;

				li {
					font-size: x-large;
				}
			}
			
		}
	}

	#CompPage {
		border: 4px gray solid;
		border-left: 2px gray solid;
		float: left;
		width: 80%;
		min-width: fit-content;
		height: 90vh;
		padding: 10px;
		overflow: hidden;
		
	}

	.row:after {
		content: "";
		display: table;
		clear: both;
	}	
</style>