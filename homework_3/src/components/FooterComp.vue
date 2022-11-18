<template>
    <div>
        <div class="cool-guys-h">Cool guys: </div>
        <div class="cool-guys">Ingvar Drikkit, Urmo Schults-Kopp, Kasper Kaljuste</div>
    </div>
</template>


<script>
export default {
    name: "FooterComp"
}
</script>


<style>
    div {
        color: black;
    }

    .cool-guys {
        background-color: black;
        color: white;
        font-size: smaller;
        padding: 5px;
    }

    .cool-guys-h {
        color: white;
        background-color: black;
        font-weight: bold;
        font-size: large;
        padding: 5px;
    }
</style>

