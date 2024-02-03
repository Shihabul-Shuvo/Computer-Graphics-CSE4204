const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// ------------- Set renderer-------------
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
const scene = new THREE.Scene();

// -----------------Camera----------------
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.set(0, 15,30);

camera.lookAt(0, 0, 0);
scene.add(camera);

//Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();



function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();