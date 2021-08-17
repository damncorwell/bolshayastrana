<template>
  <div class="comments-list">
    <div class="d-flex justify-content-center">
      <paginate
          v-show="comments.length"
          v-model="page"
          :page-count="pagesNumber"
          :click-handler="changePage"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-class="'page-item'"
          :next-link-class="'page-link'">
      </paginate>
    </div>
    <p v-if="!comments.length">Комментариев на данный момент нет.</p>
    <Comment v-else
             v-for="comment in items"
             :comment="comment"
             :key="comment.id">
    </Comment>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
import { mapGetters, mapActions } from 'vuex';
import paginationMixin from "@/mixins/pagination.mixin"
export default {
  name: "CommentsList",
  mixins: [paginationMixin],
  components: {Comment},
  computed: mapGetters(["comments"]),
  methods: mapActions(["getComments"]),
  created() {
    this.getComments()
        .then(() => this.setupPagination(this.comments))
        .catch(err => console.error(err))
  },
  watch: {
    comments: function () {
      this.setupPagination(this.comments)
    }
  }
}
</script>

<style scoped>

</style>