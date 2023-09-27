import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 600;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();

const baseWidth = 55;
const topWidth = 34;
const pyramidionHeight = 55; // Updated pyramidion height value
const monumentHeight = 555;

const positions = [
-baseWidth / 2, 0, -baseWidth / 2, // Bottom left 0
baseWidth / 2, 0, -baseWidth / 2, // Bottom right 1
baseWidth / 2, 0, baseWidth / 2, // Top right 2
-baseWidth / 2, 0, baseWidth / 2, // Top left 3
-(baseWidth - topWidth) / 2, monumentHeight - pyramidionHeight, -(baseWidth - topWidth) / 2, // Pyramidion bottom left 4
(baseWidth - topWidth) / 2, monumentHeight - pyramidionHeight, -(baseWidth - topWidth) / 2, // Pyramidion bottom right 5
(baseWidth - topWidth) / 2, monumentHeight, (baseWidth - topWidth) / 2, // Pyramidion top right 6
-(baseWidth - topWidth) / 2, monumentHeight, (baseWidth - topWidth) / 2, // Pyramidion top left 7
0, monumentHeight, 0 // Pyramidion point 8
];
geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const indices = [
0, 4, 1, // Tower front face bot half
1, 4, 5, // Tower front face top half
1, 5, 2, // Tower left face bot half
2, 5, 6, // Tower left face top half
2, 6, 3, // Tower back face bot half
3, 6, 7, // Tower back face top half
3, 7, 0, // Tower left face bot half
0, 7, 4, // Tower left face top half

4, 8, 5, // Pyramidion front face
5, 8, 6, // Pyramidion right face
6, 8, 7, // Pyramidion back face
7, 8, 4 // Pyramidion left face
];
geometry.setIndex(indices);

const colors = [
  1, 0, 0, // Tower front face bot half
  1, 0, 0, // Tower front face top half
  0, 1, 0, // Tower left face bot half
  0, 1, 0, // Tower left face top half
  1, 0, 1, // Tower back face bot half
  1, 0, 1, // Tower back face top half
  1, 1, 0, // Tower right face bot half
  1, 1, 0, // Tower right face top half

  0, 0, 1, // Pyramidion front face
  0, 0, 1, // Pyramidion right face
  0, 0, 1, // Pyramidion back face
  0, 0, 1 // Pyramidion left face
];
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const material = new THREE.MeshBasicMaterial({ vertexColors: true });

const monument = new THREE.Mesh(geometry, material);

// Center the monument in the scene
const boundingBox = new THREE.Box3().setFromObject(monument);
const center = new THREE.Vector3();
boundingBox.getCenter(center);
monument.position.sub(center);

scene.add(monument);

function animate() {
requestAnimationFrame(animate);
monument.rotation.y += 0.01;
renderer.render(scene, camera);
}

animate();
