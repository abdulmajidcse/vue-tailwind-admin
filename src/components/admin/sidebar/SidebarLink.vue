<script setup lang="ts">
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import type { IconDefinition } from '@fortawesome/free-regular-svg-icons'

interface SidebarLinkPropsType {
  to: string | object
  active?: boolean
  icon?: IconDefinition
  topLinkIs?: boolean
}

withDefaults(defineProps<SidebarLinkPropsType>(), {
  active: false,
  icon: () => faCircle,
  topLinkIs: true
})
</script>

<template>
  <li :class="{ 'mb-1': topLinkIs }">
    <RouterLink
      :to="to"
      class="flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
      :class="[
        topLinkIs ? 'top-link' : 'sub-link',
        {
          active: active
        }
      ]"
      exact-active-class="active"
    >
      <div class="mr-2 shadow-sm dark:highlight-white/10">
        <font-awesome-icon :icon="icon ?? faCircle" :class="{ 'text-lg': topLinkIs }" />
      </div>
      <slot></slot>
    </RouterLink>
  </li>
</template>
