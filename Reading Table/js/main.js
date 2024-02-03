import * as dat from 'dat.gui';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// ------------- Set renderer-------------
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
const scene = new THREE.Scene();

// ----------Axis helper--------------
const axesHelper = new THREE.AxesHelper(30);
scene.add(axesHelper);

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

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;


const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const sphereGeometry = new THREE.SphereGeometry( 4 , 50, 50); 
const sphereMaterial = new THREE.MeshBasicMaterial( { 
  color: 0x0000ff,
  wireframe: false
 } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );
sphere.position.set(-10, 10,0);

const gui = new dat.GUI();
const options = {sphereColor: 0x0000ff};

gui.addColor(options, 'sphereColor').onChange(function(e){
  sphere.material.color.set(e);
});

let step = 0;
let speed = 0.01;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

  step += speed;
  sphere.position.y = 10 * Math.abs(Math.sin(step));

	renderer.render( scene, camera );
}

animate();