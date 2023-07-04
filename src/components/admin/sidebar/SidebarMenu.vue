<script setup lang="ts">
import {
  faGrip,
  faFileLines,
  faPenToSquare,
  faTableList,
  faTriangleExclamation,
  faToggleOff,
  faBarsStaggered,
  faCube
} from '@fortawesome/free-solid-svg-icons'
import { faDotCircle } from '@fortawesome/free-regular-svg-icons'
import SidebarLink from './SidebarLink.vue'
import SidebarDropdown from './SidebarDropdown.vue'

defineProps<{
  sidebarMenuOpenIs: boolean
  sidebarMenuClose: () => void
}>()
</script>

<template>
  <!-- mobile menu display blur wrapper in sidebar -->
  <div
    class="min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
    :class="{ hidden: !sidebarMenuOpenIs }"
    @click="sidebarMenuClose"
  ></div>

  <div
    class="fixed z-20 inset-0 top-[3.8125rem] right-auto w-[17rem] pb-10 px-4 overflow-y-auto bg-white dark:bg-inherit border-r border-slate-900/10 dark:border-slate-300/10 shadow-2xl transition-all duration-300 awesome-scrollbar scroll-smooth"
    :class="sidebarMenuOpenIs ? 'lg:left-0' : '-left-[20rem]'"
  >
    <aside class="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
      <ul
        class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base"
      >
        <SidebarLink href="#" active :icon="faGrip">Dashboard</SidebarLink>

        <SidebarDropdown title="Pages" :icon="faFileLines">
          <SidebarLink href="#" :topLinkIs="false">Blank</SidebarLink>

          <SidebarDropdown title="Auth" :topLinkIs="false">
            <SidebarLink href="#" :topLinkIs="false" :icon="faDotCircle">Register</SidebarLink>
            <SidebarLink href="#" :topLinkIs="false" :icon="faDotCircle">Log In</SidebarLink>
          </SidebarDropdown>

          <SidebarLink href="#" :topLinkIs="false">404 Error</SidebarLink>
          <SidebarLink href="#" :topLinkIs="false">500 Error</SidebarLink>
        </SidebarDropdown>

        <SidebarLink href="#" :icon="faPenToSquare">
          Forms
          <span
            class="bg-red-600 dark:bg-red-800 text-white/80 dark:text-white/50 text-sm font-semibold px-2 py-0.5 rounded absolute right-2"
            >New</span
          >
        </SidebarLink>

        <SidebarLink href="#" :icon="faTableList">Tables</SidebarLink>

        <li class="mb-1">
          <span class="block my-1 text-sm p-2 pl-0 font-semibold uppercase">Components</span>
        </li>

        <SidebarLink href="#" :icon="faTriangleExclamation">Alerts</SidebarLink>

        <SidebarLink href="#" :icon="faToggleOff">Buttons</SidebarLink>

        <SidebarLink href="#" :icon="faBarsStaggered">Cards</SidebarLink>

        <SidebarLink href="#" :icon="faCube">Modals</SidebarLink>
      </ul>
    </aside>
  </div>
</template>
