import React, { useRef, useEffect } from 'react';
import * as THREEJSHELPER from './helpers/threejs-helper';
import * as THREE from 'three';
import './App.css';

function App() {

  const threeRenderer = useRef(null);

  useEffect(() => {
    const {scene, camera, renderer} = THREEJSHELPER.init();
    threeRenderer.current.appendChild( renderer.domElement );
    let cube = THREEJSHELPER.getCube();
    let light = THREEJSHELPER.getLight();
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
