<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <div class="title">
              <h1>NuxtJS Skeleton</h1>
              <p>This is a skeleton for a NuxtJS project.</p>
              <p>It includes a simple API and a database.</p>
              <p>It also includes a simple UI with a list of users.</p>
              <v-chip-group>
                <v-chip>NuxtJS 4</v-chip>
                <v-chip>TypeORM</v-chip>
                <v-chip>SQLite</v-chip>
              </v-chip-group>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="mb-4" @click="createUser">Create User</v-btn>
            <v-btn class="mb-4" @click="clearUsers">Clear Users</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card title="Users">
                <v-list>
                  <v-list-item v-if="usersEmpty">
                    <v-list-item-title>No users found</v-list-item-title>
                  </v-list-item>
                  <v-list-item v-for="user in users" :key="user.id">
                    <v-list-item-title>{{ user.id }}</v-list-item-title>
                  </v-list-item>
                </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const { data: users, refresh } = useFetch<User[]>('/api/users')
const usersEmpty = computed(() => users?.value?.length === 0)

const createUser = async () => {
  await $fetch('/api/users', {
    method: 'POST',
  })
  refresh()
}

const clearUsers = async () => {
  await $fetch('/api/users', {
    method: 'DELETE',
  })
  refresh()
}
</script>