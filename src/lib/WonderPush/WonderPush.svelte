<script>
  import { onMount } from "svelte";
  import { setWonderPushState } from "./WonderPushStore";
  import { browser } from "$app/dev";

  export let options = {};

  onMount(() => {
    const s = document.createElement("script");
    s.src = "https://cdn.by.wonderpush.com/sdk/1.1/wonderpush-loader.min.js";
    s.onload = () => setWonderPushState(true);
    document.head.appendChild(s);
  });

  $: if (browser && window && window.WonderPush) {
      window.WonderPush.push([
        "init",
        { ...options, integrator: "sveltekit-wonderpush-1.0.9" },
      ]);
  }
</script>
