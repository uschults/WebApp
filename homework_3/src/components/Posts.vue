<template>
    <div class="middle">  
        <div class="left_sidebar"></div>
        <div class="middle_postbar" id="posts">
            <div class = "post" v-for = "post in postsList" :key = "post.name">
            
                <div class = "post_head">
                    <p class = "post_name">
                    {{post.name}}
                    </p>
                    <p class = "post_time">
                        {{post.time}}
                    </p>
                </div>
                
                <div class = "post_body">
                    <p>{{post.body}}</p>
                    <div class = "post_image">
                        <img :src=post.image>
                    </div>   
                    
                </div>
                
                <div class = "post_footer">
                    <button type="submit" class="like_button" id="like_button" @click="IncreaseLike(post.itemid)"> <img src="..\..\public\like_button.png" width="40" height="40" alt="Like" /> </button>
                    <p>Likes:{{post.likes}}</p>
                    <p>Comments:{{post.comments}}</p>
                    
                </div>
            </div>
            <button type="submit" class="like_button"  v-on:click="ResetLike">"Reset likes"</button>
        </div> 
        
        <div class="right_sidebar"></div>
    </div>  

</template>

<script>
export default {
    name: "Posts",

    methods: {
      IncreaseLike(postid){
        this.$store.dispatch("IncreaseLikeAct", {postid})
      },

      ResetLike: function(){
        this.$store.dispatch("ResetLikeAct")
      }
        
    
    },
        
    computed: {
        postsList(){
    return this.$store.getters.postsList
        },
    }
}


</script>

<style>

body {
  align-items: center;
  overflow-x: hidden;
  position: relative;
  line-height: 1.6;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/*  When screen width < n px :*/
@media (min-width: 1000px) {
  .header {
    justify-content: space-between;
  }
}

@media (max-width: 800px) {
  .left_sidebar {
    visibility: hidden;
    width: 0px;
  }

  .right_sidebar {
    visibility: hidden;
    width: 0px;
  }

  .middle_postbar {
    width: 100%;
  }

  .header {
    width: 100%;
  }

  .middle {
    width: 100%;
  }
}


.post {
  background-color: rgb(84, 217, 250);
  margin: 10px;
  padding: 10px;
  border-radius: 25px;
}

.post_body {
  color: rgb(227, 243, 7);
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.747);
  border-radius: 25px;
}

.post_id{
  width: auto;
  height: auto;
}

.post_body > p {
  padding-left: 8px;
}

.post_image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.post_image > img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

#like_button {
  background-color: white;
  transition-duration: 0.4s;
  border-radius: 10px;
  border: 2px solid black;
}

#like_button:hover {
  border-radius: 20px;
  border: 2px solid red;
  cursor: pointer;
}

#like_button:active {
  transition-duration: 0ms;
  box-shadow: -3px -3px -3px black;
  outline: 2px solid black;
}

/* Selects all p after button.like_button (with same parent) */
button.like_button ~ p {
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: red;
  color: white;
  border-radius: 10px;
  vertical-align: middle;
}

.post_head {
  display: flex;
  flex-direction: row;
}

.post_name {
  margin-left: 10px;
  margin-right: auto;
  color: rgb(108, 1, 129);
  font-size: larger;
  font-weight: 900;
}

.post_time {
  margin-left: auto;
  padding-right: 20px;
}

.post_footer {
  padding-top: 5px;
  display: flex;
  
}

.middle_postbar {
  width: 80%;
  max-width: 1000px;
  min-width: 350px;
}

.right_sidebar {
  background-image: linear-gradient(rgb(0, 253, 156), rgb(60, 200, 255));
  background-color: #cccccc;
  background-size: cover;
  width: 100%;
  max-width: 150px;
  margin-right: auto;
  margin-left: 0px;
  border-radius: 25px;
}

.left_sidebar {
  background-image: linear-gradient(rgb(0, 253, 156), rgb(60, 200, 255));
  background-color: #cccccc;
  background-size: cover;
  max-width: 150px;
  width: 100%;
  border-radius: 25px;
  margin-right: 0px;
  margin-left: auto;
}

.middle {
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 5px;
  justify-content: center;
}

/* Applies to any element with immediate p.formfield parent */
p {
  vertical-align: middle;
  
  display: table-cell;
  margin: 5px;
  font-size: medium;
}

p.formfield label {
  font-size: large;
}
</style>
