<script setup>
// Get the state
const title = useState('title');
const items = useState('items');
const description = useState('description');

useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: description.value,
    },
  ],
});

useSeoMeta({
  ogTitle: title.value,
  ogDescription: description.value,
});
</script>

<template>
  <NuxtLayout name="default">
    <template #default>
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="item in items">
          {{ item.entryTitle }}
        </li>
      </ul>
    </template>
  </NuxtLayout>
</template>
