import Vue from 'vue'
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        comments: []
    },
    getters: {
        comments(state) {
            return state.comments
        }
    },
    mutations: {
        SET_COMMENTS(state, comments) {
            state.comments = comments
        },
        ADD_COMMENT(state, comment) {
            state.comments.unshift(comment)
        }
    },
    actions: {
        getComments(context) {
            return Axios.get('https://bigcountry-task.vercel.app/comments.json')
                .then(response => context.commit('SET_COMMENTS', response.data))
                .catch(err => console.error(err))
        },
        addComment(context, comment) {
            context.commit("ADD_COMMENT", comment)
        }
    }
})