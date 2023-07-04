import { onMounted, onUnmounted, ref } from 'vue'
import type { Ref } from 'vue'

type basicFuncationType = () => void
interface sidebarMenuTogglerType {
  sidebarMenuOpenIs: Ref<boolean>
  mobileMenuOpenIs: Ref<boolean>
  sidebarMenuClose: basicFuncationType
  toggleSidebarMenu: basicFuncationType
  mobileMenuClose: basicFuncationType
  toggleMobileMenu: basicFuncationType
}

export default function useSidebarMenuToggler(): sidebarMenuTogglerType {
  const sidebarMenuOpenIs: Ref<boolean> = ref(false)
  const mobileMenuOpenIs: Ref<boolean> = ref(false)

  const sidebarMenuClose: basicFuncationType = () => {
    sidebarMenuOpenIs.value = false
  }
  const toggleSidebarMenu: basicFuncationType = () => {
    sidebarMenuOpenIs.value = !sidebarMenuOpenIs.value
  }

  const mobileMenuClose: basicFuncationType = () => {
    mobileMenuOpenIs.value = false
  }

  const toggleMobileMenu: basicFuncationType = () => {
    mobileMenuOpenIs.value = !mobileMenuOpenIs.value
  }

  // change sidebarMenuOpenIs value when screen width will change
  const matchMediaForSidebar = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      // in lg screen
      sidebarMenuOpenIs.value = true
    } else {
      // in less than lg screen
      sidebarMenuOpenIs.value = false
    }
  }

  const windowWidthLg: MediaQueryList = window.matchMedia('(min-width: 1024px)')

  onMounted(() => {
    windowWidthLg.addEventListener('change', matchMediaForSidebar)
    matchMediaForSidebar(windowWidthLg)
  })

  onUnmounted(() => {
    windowWidthLg.removeEventListener('change', matchMediaForSidebar)
  })

  return {
    sidebarMenuOpenIs,
    mobileMenuOpenIs,
    sidebarMenuClose,
    toggleSidebarMenu,
    mobileMenuClose,
    toggleMobileMenu
  }
}
