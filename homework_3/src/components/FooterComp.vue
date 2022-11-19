<template>
    <div class="cool-footer">
        <div class="cool-guys-h">Cool guys: </div>
        <div class="cool-guys">Copyright © Ingvar Drikkit, Urmo Schults-Kopp, Kasper Kaljuste</div>
    </div>
</template>


<script>
export default {
    name: "FooterComp"
}
</script>


<style>
    .cool-footer {
        margin-top: auto;
        border-radius: 20px;
        color: lightgreen;
        background-color: black;
    }

    .cool-guys {
        
        font-size: smaller;
        padding: 5px;
    }

    .cool-guys-h {
        
        font-weight: bold;
        font-size: large;
        padding: 5px;
    }
</style>

