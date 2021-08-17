<template>
  <div class="container">
    <h1 class="mt-5 mb-5">Тестовое задание</h1>
    <CommentForm></CommentForm>
    <h3>Комментарии</h3>
    <CommentsList></CommentsList>
    <h5 class="mb-3">&#129310; Хочу работать у вас &#129310;</h5>
  </div>
</template>

<script>
import CommentsList from "@/components/CommentsList";
import CommentForm from "@/components/CommentForm";
export default {
  name: 'Home',
  components: {CommentForm, CommentsList},
}
</script>

<style scoped>

</style>
