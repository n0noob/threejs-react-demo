import React, { useRef, useEffect } from 'react';
import * as THREEJSHELPER from './helpers/threejs-helper';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import './App.css';

function App() {

  const threeRenderer = useRef(null);

  useEffect(() => {
    var loader = new GLTFLoader();
    const {scene, camera, renderer} = THREEJSHELPER.init();
    threeRenderer.current.appendChild( renderer.domElement );
    let cube = THREEJSHELPER.getCube();
    let light = THREEJSHELPER.getLight();
    cube.position.x = 3;
    loader.load( './glb/monkey.glb', ( gltf ) => {

      scene.add( gltf.scene );
    
    }, undefined, ( error ) => {
    
      console.error( error );
    
    });
    scene.add( cube );
    scene.add(light);
    (function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    })();
    //animate();
  })

  return (
    <div ref={threeRenderer} />
  );
}

export default App;
