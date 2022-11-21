import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts : [
      { 
        itemid: 1,
        name: "GRANDmom",
        time: "Oct 22, 2022",
        image: "/soup.png",
        body: "Eat your veggies",
        likes: 500,
        comments: 15
      },
      {
        itemid: 2,
        name: "Peeter",
        time: "Oct 23, 2022",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies lorem et leo luctus,non tincidunt nisi malesuada. Pellentesque semper ullamcorper augue. Sed nisi metus, facilisissed ornare eget, dapibus non magna. Proin nulla tellus, tempor vel condimentum at, lobortis sed justo.",
        likes: 1,
        comments: 0
      },
      {
        itemid: 3,
        name: "Marvin",
        time: "Oct 23, 2022",
        body: "Which one crossed the road first?",
        likes: 1,
        comments: 23554
      },
      {
        itemid: 4,
        name: "Tellytubby",
        time: "Oct 24, 2022",
        image: "/wow.png",
        body: "Birdwatching",
        likes: 69,
        comments: 42
      },
      {
        itemid: 5,
        name: "xxxS3xyb3astxxx",
        time: "Oct 24, 2022",
        body: "I'm lonely",
        likes: 9999999,
        comments: 420
      },
      {
        itemid: 6,
        name: "Ain",
        time: "Oct 26, 2022",
        body: "The strange quantum uncertainty here, there, and everywhere, within, without, nonrandom bits sustain universal poetic harmony. The aetheric history matter dark intones",
        likes: 50,
        comments: 2
      },
      {
        itemid: 7,
        name: "Lauri",
        time: "Oct 27, 2022",
        body: "Selling csgo skins",
        likes: 69,
        comments: 42
      },
      {
        itemid: 8,
        name: "Vallo",
        time: "Oct 28, 2022",
        body: "What day was the Homework 3 deadline???????",
        likes: 0,
        comments: 5
      },
      {
        itemid: 9,
        name: "Vilma",
        time: "Oct 28, 2022",
        body: "Hello darkness my old friend",
        likes: 1,
        comments: 1
      },
      {
        itemid: 10,
        name: "Tiit ja teet",
        time: "Oct 29, 2022",
        body: "Pakun Soome tööd, palk igal reedel ausalt kätte",
        likes: 0,
        comments: 0
      }
    ]
  },
  getters: {
    postsList : state => {
      var postsList = state.posts.map(post =>{
        return {
          itemid: post.itemid,
          name: post.name,
          time: post.time,
          image: post.image,
          body: post.body,
          likes: post.likes
        }
      });
      return postsList
    }
  },
  mutations: {
    IncreaseLike(state, payload){
      state.posts.forEach(item => {    
        if(item.itemid == payload.postid){
          item.likes += 1;
        }
      });
    },
  
    ResetLike: state => {
      state.posts.forEach(item => {
          item.likes = 0;
      })}
  },
  
  actions: {
    IncreaseLikeAct: ({commit}, payload) => {
     commit("IncreaseLike", payload)
  },
  ResetLikeAct: act => {
    
    setTimeout(function() {
      
      act.commit("ResetLike")
    }, 10)
}
},

  modules: {
  }

})
