<script>
  import WonderPush from "../lib/WonderPush.svelte";
  import { WonderPushState } from "../lib/WonderPushStore";
</script>

<WonderPush options={{ ...yourWonderPushOptions }}></WonderPush>

{#if $WonderPushState}
  <!-- Put your content or components that require WonderPush to be ready here -->
  <h1>WonderPush is ready!</h1>
{/if}
