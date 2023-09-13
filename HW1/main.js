import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const triangle_material = new THREE.LineBasicMaterial({
  color: 0x0000ff
});
const tetrahedron_material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true
});

const triangle_points = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(5, 8.66, 0),
  new THREE.Vector3(0, 0, 0),
];

const tetrahedron_vertices = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(10, 0, 0),
  new THREE.Vector3(5, 0, 8.66),
  new THREE.Vector3(5, 8.66, 0),
];

const triangle_geometry = new THREE.BufferGeometry().setFromPoints(triangle_points);
const tetrahedron_geometry = new THREE.BufferGeometry().setFromPoints(tetrahedron_vertices);

const indices = [0, 1, 2, 0, 2, 3, 1, 3, 2];
tetrahedron_geometry.setIndex(indices);

const triangle = new THREE.Line(triangle_geometry, triangle_material);
triangle.position.set(0, 10, 0);

const tetrahedron = new THREE.Mesh(tetrahedron_geometry, tetrahedron_material);

scene.add(triangle);
scene.add(tetrahedron);
renderer.render(scene, camera);