<script setup>
import { ref } from 'vue';
import ContextMenu from '@imengyu/vue3-context-menu';

defineProps({
  msg: String,
});

const count = ref(0);

function onContextMenu(e) {
  //prevent the browser's default menu
  e.preventDefault();
  //show your menu
  ContextMenu.showContextMenu({
    // this.$contextmenu({
    x: e.x,
    y: e.y,
    items: [
      {
        label: 'A menu item',
        onClick: () => {
          alert('You click a menu item');
        },
      },
      {
        label: 'A submenu',
        children: [{ label: 'Item1' }, { label: 'Item2' }, { label: 'Item3' }],
      },
    ],
  });
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="box1" style="flex: 1" @contextmenu="onContextMenu($event)">
    Right22 click to show2 contextmenu with custom content !
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out222
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.box1 {
  background-color: gray;
}
</style>
