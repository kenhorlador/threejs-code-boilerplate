// imports
import './style.css'
import * as THREE from 'three'
import { Mesh } from 'three'

// scene
const scene = new THREE.Scene()

// object
// cube
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: "#ADD8E6" })
)
scene.add(cube)

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// update object position
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add( camera )

// canvas
const canvas = document.querySelector('.webgl')

// renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)


// animations
const tick = () => {
    // Update Object
    cube.rotation.y += 0.05

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()

