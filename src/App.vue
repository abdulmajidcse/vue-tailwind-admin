<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import useSidebarMenuToggler from './composables/useSidebarMenuToggler'
import SidebarMenu from './components/admin/sidebar/SidebarMenu.vue'
import HeaderSection from './components/admin/HeaderSection.vue'
import FooterSection from './components/admin/FooterSection.vue'

const {
  sidebarMenuOpenIs,
  mobileMenuOpenIs,
  sidebarMenuClose,
  toggleSidebarMenu,
  mobileMenuClose,
  toggleMobileMenu
} = useSidebarMenuToggler()

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div class="bg-gray-200 dark:bg-gray-900 dark:text-slate-400 min-h-screen">
    <HeaderSection
      :mobile-menu-open-is="mobileMenuOpenIs"
      :toggle-sidebar-menu="toggleSidebarMenu"
      :mobile-menu-close="mobileMenuClose"
      :toggle-mobile-menu="toggleMobileMenu"
    />

    <SidebarMenu :sidebarMenuOpenIs="sidebarMenuOpenIs" :sidebarMenuClose="sidebarMenuClose" />

    <div
      class="transition-all duration-300 px-4 sm:px-6 md:px-8 pt-16"
      :class="{ 'lg:ml-[17rem]': sidebarMenuOpenIs }"
    >
      <main class="pt-5 min-h-[calc(100vh-13rem)]">
        <RouterView />
      </main>

      <FooterSection />
    </div>
  </div>
</template>
