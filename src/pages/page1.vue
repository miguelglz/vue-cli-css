<template>
  <div class="container" id="cc-gallery">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row" v-for="(row, index) in rowCount" :key="index">
      <div class="col-sm-4 list-item" v-for="item in getItemsInRow(row)" :key="item.id">
        <h3>{{ item.name }}</h3>
        <img :src="item.thumb" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data: function () {
    return {
      loading: false,
      items: [
        {
          id: 1,
          name: 'item 1',
          thumb: 'https://picsum.photos/200?image=1'
        },
        {
          id: 2,
          name: 'item 2',
          thumb: 'https://picsum.photos/200?image=2'
        },
        {
          id: 3,
          name: 'item 3',
          thumb: 'https://picsum.photos/200?image=3'
        },
        {
          id: 4,
          name: 'item 4',
          thumb: 'https://picsum.photos/200?image=4'
        }
      ]
    }
  },
  computed: {
    rowCount: function () {
      return Math.ceil(this.items.length / 3)
    }
  },
  methods: {
    getItemsInRow: function (index) {
      return this.items.slice((index - 1) * 3, index * 3)
    }
  }
}
</script>

<style lang="scss">
  #cc-gallery {
    $green: #c3e6cb;
    .list-item {
      color: $green;

      img {
        border: 3px solid $green;
      }
    }
  }
</style>
