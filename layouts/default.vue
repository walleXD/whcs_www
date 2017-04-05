<template lang="pug">
  #default-layout
    v-app(top-toolbar,left-fixed-sidebar)
      v-toolbar
        v-toolbar-side-icon(@native.click.stop="sideBar = !sideBar")
        v-spacer
        v-menu
          v-btn(icon, dark, slot="activator")
            v-icon more_vert
          v-list
            v-list-item
              v-list-tile
                v-list-tile-title Shit
      main
        v-sidebar(left, fixed, drawer, v-model="sideBar")
          v-list
            v-list-item
              v-list-tile
                v-list-tile-title Items
        v-content
          v-container(fluid)
            nuxt
      v-footer Footer
</template>

<script>
export default {
  data () {
    return {
      sideBar: false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
