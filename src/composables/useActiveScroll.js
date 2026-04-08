import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveScroll() {
  const isActiveScroll = ref(false)

  const handleScroll = () => {
    isActiveScroll.value = window.scrollY > 120
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isActiveScroll,
  }
}