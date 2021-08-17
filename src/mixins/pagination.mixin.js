import _ from 'lodash'

export default {
    data() {
        return {
            page: +this.$route.query.page || 1,
            pageSize: 20,
            pagesNumber: 0,
            commentsChunked: [],
            items: []
        }
    },
    methods: {
        setupPagination(comments) {
            this.commentsChunked = _.chunk(comments, this.pageSize)
            this.pagesNumber = this.commentsChunked.length
            this.items = this.commentsChunked[this.page - 1] || this.commentsChunked[0]
        },
        changePage(page) {
            this.$router.push({query: {page: page}})
            this.items = this.commentsChunked[page - 1] || this.commentsChunked[0]
        }
    }
}