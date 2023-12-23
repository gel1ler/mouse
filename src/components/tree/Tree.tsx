import { OrbitControls, SpotLight } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { AmbientLight, Mesh, TextureLoader  } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Tree = () => {
    const gltf = useLoader(
        GLTFLoader,
        '/models/tree/scene.gltf'
    )

    const texture = useLoader(
        TextureLoader,
        '/models/tree/textures/kugel_weiss_baseColor.png'
    )

    useEffect(() => {
        gltf.scene.scale.set(0.2, 0.2, 0.2)
        gltf.scene.position.set(0, -0.5, 0)
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true
                object.receiveShadow = true
                object.material.envMapIntensity = 20
                object.material.map = texture
            }
        })
    }, [gltf])

    return (
        <Canvas>
            {/* <OrbitControls /> */}
            <ambientLight />
            <primitive object={gltf.scene} />
        </Canvas>
    )
}

export default Tree