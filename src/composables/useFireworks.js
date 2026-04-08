import { onBeforeUnmount, ref } from 'vue'

export function useFireworks() {
    const canvasRef = ref(null)
    let fireworksStarted = false
    let fireworkAnimationId = null
    let fireworkInterval = null
    let particles = []
    let resizeHandler = null

    function startFireworks() {
        if (fireworksStarted || !canvasRef.value) return
        fireworksStarted = true

        const canvas = canvasRef.value
        const ctx = canvas.getContext('2d')

        resizeHandler = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeHandler()
        window.addEventListener('resize', resizeHandler)

        function createFirework(x, y) {
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x,
                    y,
                    speedX: (Math.random() - 0.5) * 6,
                    speedY: (Math.random() - 0.5) * 6,
                    life: 100,
                    hue: Math.random() * 360,
                })
            }
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p, i) => {
                p.x += p.speedX
                p.y += p.speedY
                p.life--

                ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`
                ctx.fillRect(p.x, p.y, 3, 3)

                if (p.life <= 0) {
                    particles.splice(i, 1)
                }
            })

            fireworkAnimationId = requestAnimationFrame(animate)
        }

        fireworkInterval = setInterval(() => {
            createFirework(
                Math.random() * canvas.width,
                Math.random() * (canvas.height / 2)
            )
        }, 5000)

        animate()
    }

    function stopFireworks() {
        if (!canvasRef.value) return

        const canvas = canvasRef.value
        const ctx = canvas.getContext('2d')

        if (fireworkAnimationId) {
            cancelAnimationFrame(fireworkAnimationId)
            fireworkAnimationId = null
        }

        if (fireworkInterval) {
            clearInterval(fireworkInterval)
            fireworkInterval = null
        }

        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler)
            resizeHandler = null
        }

        particles = []
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fireworksStarted = false
    }

    onBeforeUnmount(() => {
        stopFireworks()
    })

    return {
        canvasRef,
        startFireworks,
        stopFireworks,
    }
}