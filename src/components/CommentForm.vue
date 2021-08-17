<template>
    <form class="mb-4" @submit.prevent="submit">
      <div>
        <ul class="errors" v-if="errors.length">
          <li v-for="error in errors" :key="error" style="color: red">{{ error }}</li>
        </ul>
      </div>
      <div class="comment-form">
        <label class="form-label" for="comment">Добавить комментарий</label>
        <textarea id="comment"
                  required
                  class="form-control"
                  v-model="comment_text">
        </textarea>
        <small class="d-flex justify-content-end">{{ comment_text.trim().length }}/1000</small>
        <button type="submit" class="btn btn-primary">Добавить</button>
      </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "CommentForm",
  data() {
    return {
      comment_text: '',
      errors: []
    }
  },
  methods: {
    ...mapActions(["addComment"]),
    submit() {
      this.errors = []

      if (this.comment_text.trim().length > 1000)
        this.errors.push('Комментарий может содержать не более 1000 символов.')

      if (this.comment_text.trim().split(" ").length < 3)
        this.errors.push('Комментарий должен состоять как минимум из 3 слов.')

      if (!this.errors.length) {
        const comment = {
          id: Date.now(),
          body: this.comment_text.trim(),
          created_at: new Date().toISOString(),
          author: {
            id: 16,
            name: "John Doe",
            avatar: "http://placeimg.com/640/480/business",
            company: "BigCountry"
          }
        }
        this.addComment(comment)
        this.comment_text = ''
      }
    }
  },
}
</script>

<style scoped>
.errors {
  padding: 0;
  list-style-type: none;
}
</style>