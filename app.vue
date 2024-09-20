<script setup lang="ts">
// Set up some state
const description = useState('description', () => 'A test page');
const items = useState('items', () => []);
const title = useState('title', () => 'My test page');

await callOnce(async () => {
  // Get the environment variables
  let { alias, projectId, accessToken } = useRuntimeConfig().app; // Fetch data
  useFetch(
    `https://cms-${alias}.cloud.contensis.com/api/delivery/projects/${projectId}/contentTypes/test/entries/?accessToken=${accessToken}`
  ).then((response) => {
    items.value = response.data.value.items;
  });
});
</script>

<template>
  <div class="container-fluid p-0">
    <NuxtPage />
  </div>
</template>
