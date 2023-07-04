<script setup lang="ts">
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { ref, type Ref } from 'vue'

interface SidebarDropdownType {
  title: string
  active?: boolean
  icon?: IconDefinition
  topLinkIs?: boolean
}

const props = withDefaults(defineProps<SidebarDropdownType>(), {
  active: false,
  icon: () => faCircle,
  topLinkIs: true
})

const openIs: Ref<boolean> = ref(props.active)

const toggleMenu = () => (openIs.value = !openIs.value)
</script>

<template>
  <li :class="{ 'mb-1': topLinkIs }">
    <div
      class="flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer"
      :class="[topLinkIs ? 'top-link' : 'sub-link', { active: openIs }]"
      @click="toggleMenu"
    >
      <div class="mr-2 shadow-sm dark:highlight-white/10">
        <font-awesome-icon :icon="icon ?? faCircle" :class="{ 'text-lg': topLinkIs }" />
      </div>
      {{ title }}
      <font-awesome-icon
        :icon="faAngleLeft"
        class="absolute right-2"
        :class="{ '-rotate-90': openIs }"
      />
    </div>
    <!-- dropdown menu -->
    <ul class="my-1" :class="[openIs ? 'block' : 'hidden']">
      <slot></slot>
    </ul>
  </li>
</template>
