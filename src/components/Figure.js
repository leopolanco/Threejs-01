import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const WhiteBox = () => {
  const figure = useRef()
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    figure.current.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: '#d5d5d5' })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    scene.background = new THREE.Color('#07051e')
    camera.position.z = 5

    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.y += 0.01
      cube.rotation.x += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return <div ref={figure} className='figure'></div>
}

export default WhiteBox
