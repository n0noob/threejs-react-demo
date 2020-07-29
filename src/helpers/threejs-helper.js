import * as THREE from 'three';


const init = () => {
  /*
  Basic needs in every three.js application:
  1. Camera
  2. Renderer
  3. Scene
  */
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  let renderer = new THREE.WebGLRenderer();

  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.position.z = 5;

  return { 
    scene,
    camera, 
    renderer
  };
}

const getCube = () => {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial( {color: 0x44aa88} );
  let cube = new THREE.Mesh( geometry, material );

  return cube;
}

const getLight = () => {
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);

  return light;
}


export {
  init, 
  getCube,
  getLight,
}