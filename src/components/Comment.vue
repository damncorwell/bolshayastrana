<template>
  <div class="comment border mb-4 p-3 rounded">
    <div class="d-flex mb-3">
      <div class="d-flex">
        <img class="avatar"
                :src="comment.author.avatar"
                alt="avatar">
        <div class="user-info">
          <p class="mb-0"><b>{{ comment.author.name }}</b></p>
          <small>{{ comment.author.company }}</small>
        </div>
      </div>
      <p class="date ms-auto">{{ date_converted }}</p>
    </div>
    <p class="comment-body">{{ comment.body }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Comment",
  props: {
    comment: Object
  },
  computed: {
    date_converted() {
      return moment(this.comment.created_at).format('LLL')
    }
  }
}
</script>

<style scoped>
.comment-body {
  text-align: justify;
  margin-bottom: 0;
  white-space: pre-wrap;
}

.avatar {
  object-fit: cover;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.user-info {
  text-align: left;
  display: flex;
  flex-direction: column;
}

@media (max-width: 600px) {
  .comment {
    font-size: 0.9em;
  }
  .avatar {
    width: 40px;
    height: 40px;
  }
}
</style>