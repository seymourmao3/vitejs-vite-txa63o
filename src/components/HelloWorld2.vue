<script>
export default {
  data() {
    return {
      msg: 'Hello World!',
    };
  },

  methods: {
    notify() {
      alert('navigation was prevented.');
    },
    onContextMenu(e: MouseEvent) {
      console.log('test...');
      // prevent the browser's default menu
      e.preventDefault();
      // show the context menu
      this.$contextmenu({
        x: e.x,
        y: e.y,
        items: [
          {
            label: 'A menu item',
            onClick: () => {
              alert('You clicked a menu item');
            },
          },
          {
            label: 'A submenu',
            children: [
              { label: 'Item 1' },
              { label: 'Item 2' },
              { label: 'Item 3' },
            ],
          },
        ],
      });
    },
  },
};
</script>

<template>
  <div class="box1" style="flex: 1" @click="notify($event)">
    Right1111 click to show2 contextmenu with custom content !
  </div>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
