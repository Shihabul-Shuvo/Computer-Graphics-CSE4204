const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// ------------- Set renderer-------------
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
let angle = 0;

// // ---------------Light----------------
const pointLight = new THREE.PointLight(0xfff4d6, 1, 1000);
pointLight.position.set(40, 80, 4);
pointLight.castShadow = true; // default false
pointLight.shadow.mapSize.width = 4000;
pointLight.shadow.mapSize.height = 4000;
scene.add(pointLight);

//0.6
const ambientLight = new THREE.AmbientLightProbe(0xfff4d6, 0.5);
ambientLight.position.set(40, 80, 4);
scene.add(ambientLight);

//----------------ground------------------
const grassTexture = new THREE.TextureLoader().load("textures/grass.jpeg");
grassTexture.wrapS = THREE.RepeatWrapping;
grassTexture.wrapT = THREE.RepeatWrapping;
grassTexture.repeat.set(100, 100);
grassTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

let ground = new THREE.PlaneGeometry(180, 180);
const groundMaterial = new THREE.MeshStandardMaterial({
  map: grassTexture,
});
ground = new THREE.Mesh(ground, groundMaterial);
ground.rotation.x = (-90 * Math.PI) / 180;
ground.receiveShadow = true; //default
scene.add(ground);
  
// ---------------building-----------------

// // //----building top----
  const buildingTextures = [
    "textures/building-ground.jpg",
     "textures/building-wall.jpg",
     "textures/window.jpg",
     "textures/building-gate.jpg",
  ];

  let buildinggroundTexture = new THREE.TextureLoader().load(
    buildingTextures[0]
  );
  buildinggroundTexture.wrapS = THREE.RepeatWrapping;
  buildinggroundTexture.wrapT = THREE.RepeatWrapping;
  buildinggroundTexture.repeat.set(1, 1);
  buildinggroundTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const buildingGroundMaterial = new THREE.MeshStandardMaterial({
    map: buildinggroundTexture,
  });

  let buildingTexture = new THREE.TextureLoader().load(
    buildingTextures[1]
  );
  buildingTexture.wrapS = THREE.RepeatWrapping;
  buildingTexture.wrapT = THREE.RepeatWrapping;
  buildingTexture.repeat.set(1, 1);
  buildingTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const buildingMaterial = new THREE.MeshStandardMaterial({
    map: buildingTexture,
  });

  let windowTexture = new THREE.TextureLoader().load(
    buildingTextures[2]
  );
  windowTexture.wrapS = THREE.RepeatWrapping;
  windowTexture.wrapT = THREE.RepeatWrapping;
  windowTexture.repeat.set(1, 1);
  windowTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const windowMaterial = new THREE.MeshStandardMaterial({
    map: windowTexture,
  });

  let gateTexture = new THREE.TextureLoader().load(
    buildingTextures[3]
  );
  gateTexture.wrapS = THREE.RepeatWrapping;
  gateTexture.wrapT = THREE.RepeatWrapping;
  gateTexture.repeat.set(1, 1);
  gateTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const gateMaterial = new THREE.MeshStandardMaterial({
    map: gateTexture,
  });

// -------Building Structure--------
  let buildingTop = new THREE.BoxGeometry(25, 0.4, 15);
  buildingTop = new THREE.Mesh(buildingTop, buildingMaterial);
  buildingTop.position.set(0, 10, 0);
  buildingTop.castShadow = true;
  scene.add(buildingTop);


let buildingGround = new THREE.BoxGeometry(27, 0.5, 17);
buildingGround = new THREE.Mesh(buildingGround, buildingGroundMaterial);
buildingGround.position.set(0, -10, 0);
buildingGround.castShadow = true;
buildingTop.add(buildingGround);

//right wall
  let rightwall = new THREE.BoxGeometry(0.6, 10, 13.9);
  rightwall = new THREE.Mesh(rightwall, buildingMaterial);
  rightwall.position.set(11.7, -5, 0);
  rightwall.castShadow = true;
  buildingTop.add(rightwall);

  let rightwall1 = new THREE.BoxGeometry(0.8, 10, 13.9);
  rightwall1 = new THREE.Mesh(rightwall1, buildingMaterial);
  rightwall1.position.set(11.7, 5, 0);
  rightwall1.castShadow = true;
  buildingTop.add(rightwall1);

  //left wall
   let buildingBottomLeft = new THREE.BoxGeometry(0.8, 10, 13.9);
   buildingBottomLeft = new THREE.Mesh(buildingBottomLeft, buildingMaterial);
   buildingBottomLeft.position.set(-11.7, -5, 0);
   buildingBottomLeft.castShadow = true;
   buildingTop.add(buildingBottomLeft);

  let leftwall1 = new THREE.BoxGeometry(0.8, 10, 13.98);
  leftwall1 = new THREE.Mesh(leftwall1, buildingMaterial);
  leftwall1.position.set(-11.7, 5, 0);
  leftwall1.castShadow = true;
  buildingTop.add(leftwall1);

  //back wall
  let wallback = new THREE.BoxGeometry(24, 10, 0.8);
  wallback = new THREE.Mesh(wallback, buildingMaterial);
  wallback.position.set(0, -5, -6.79);
  wallback.castShadow = true;
  buildingTop.add(wallback);

  let wallback1 = new THREE.BoxGeometry(24, 10, 0.8);
  wallback1 = new THREE.Mesh(wallback1, buildingMaterial);
  wallback1.position.set(0, 5, -6.79);
  wallback1.castShadow = true;
  buildingTop.add(wallback1);

  //font
  let fontWall = new THREE.BoxGeometry(24, 10, 0.8);
  fontWall = new THREE.Mesh(fontWall, buildingMaterial);
  fontWall.position.set(0, 5, 6.79);
  fontWall.castShadow = true;
  buildingTop.add(fontWall);

  let fontWall1 = new THREE.BoxGeometry(24, 10, 0.8);
  fontWall1 = new THREE.Mesh(fontWall1, buildingMaterial);
  fontWall1.position.set(0, -5, 6.79);
  fontWall1.castShadow = true;
  buildingTop.add(fontWall1);

  //rooftop
  let rooftop = new THREE.BoxGeometry(25, 0.4, 15);
  rooftop = new THREE.Mesh(rooftop, buildingMaterial);
  rooftop.position.set(0, 8, 0);
  rooftop.castShadow = true;
  buildingTop.add(rooftop);

  //windows
  //1st floor left
  let LeftWindow1 = new THREE.BoxGeometry(0.5, 1.5, 3);
  LeftWindow1 = new THREE.Mesh(LeftWindow1, windowMaterial);
  LeftWindow1.position.set(-12, -5, -4);
  LeftWindow1.castShadow = true;
   buildingTop.add(LeftWindow1);
  
   let LeftWindow2 = new THREE.BoxGeometry(0.5, 1.5, 3);
   LeftWindow2 = new THREE.Mesh(LeftWindow2, windowMaterial);
   LeftWindow2.position.set(-12, -5, 4);
   LeftWindow2.castShadow = true;
    buildingTop.add(LeftWindow2);
//2nd floor left
    let LeftWindow3 = new THREE.BoxGeometry(0.5, 1.5, 3);
    LeftWindow3 = new THREE.Mesh(LeftWindow3, windowMaterial);
    LeftWindow3.position.set(-12, 5, -4);
    LeftWindow3.castShadow = true;
   buildingTop.add(LeftWindow3);
  
   let LeftWindow4 = new THREE.BoxGeometry(0.5, 1.5, 3);
   LeftWindow4 = new THREE.Mesh(LeftWindow4, windowMaterial);
   LeftWindow4.position.set(-12, 5, 4);
   LeftWindow4.castShadow = true;
    buildingTop.add(LeftWindow4);

//1st floor right
    let rightwindow1 = new THREE.BoxGeometry(0.5, 1.5, 3);
    rightwindow1 = new THREE.Mesh(rightwindow1, windowMaterial);
    rightwindow1.position.set(12, -5, -4);
    rightwindow1.castShadow = true;
  buildingTop.add(rightwindow1);

  let rightwindow2 = new THREE.BoxGeometry(0.5, 1.5, 3);
  rightwindow2 = new THREE.Mesh(rightwindow2, windowMaterial);
  rightwindow2.position.set(12, -5, 4);
  rightwindow2.castShadow = true;
  buildingTop.add(rightwindow2);

  //2nd floor right
  let rightwindow3 = new THREE.BoxGeometry(0.5, 1.5, 3);
  rightwindow3 = new THREE.Mesh(rightwindow3, windowMaterial);
  rightwindow3.position.set(12, 5, -4);
  rightwindow3.castShadow = true;
buildingTop.add(rightwindow3);

let rightwindow4 = new THREE.BoxGeometry(0.5, 1.5, 3);
rightwindow4 = new THREE.Mesh(rightwindow4, windowMaterial);
rightwindow4.position.set(12, 5, 4);
rightwindow4.castShadow = true;
buildingTop.add(rightwindow4);

//fontside window
//1st
let Gate = new THREE.BoxGeometry(10, 5, 0.5);
Gate = new THREE.Mesh(Gate, gateMaterial);
Gate.position.set(0, -7.5, 7.2);
Gate.castShadow = true;
buildingTop.add(Gate);

// //2nd
let fontstairwindow2 = new THREE.BoxGeometry(1.5, 3, 0.5);
fontstairwindow2 = new THREE.Mesh(fontstairwindow2, windowMaterial);
fontstairwindow2.position.set(2, 5, 7.1);
fontstairwindow2.castShadow = true;
buildingTop.add(fontstairwindow2);

let fontwindow4 = new THREE.BoxGeometry(3, 1.5, 0.5);
fontwindow4 = new THREE.Mesh(fontwindow4, windowMaterial);
fontwindow4.position.set(-3, 5, 7.1);
fontwindow4.castShadow = true;
buildingTop.add(fontwindow4);

let fontwindow5 = new THREE.BoxGeometry(3, 1.5, 0.5);
fontwindow5 = new THREE.Mesh(fontwindow5, windowMaterial);
fontwindow5.position.set(-9, 5, 7.1);
fontwindow5.castShadow = true;
buildingTop.add(fontwindow5);

let fontwindow6 = new THREE.BoxGeometry(3, 1.5, 0.5);
fontwindow6 = new THREE.Mesh(fontwindow6, windowMaterial);
fontwindow6.position.set(7, 5, 7.1);
fontwindow6.castShadow = true;
buildingTop.add(fontwindow6);

//backside window
//1st
let backstairwindow1 = new THREE.BoxGeometry(1.5, 3, 0.5);
backstairwindow1 = new THREE.Mesh(backstairwindow1, windowMaterial);
backstairwindow1.position.set(2, -5, -7.1);
backstairwindow1.castShadow = true;
buildingTop.add(backstairwindow1);

let backwindow1 = new THREE.BoxGeometry(3, 1.5, 0.5);
backwindow1 = new THREE.Mesh(backwindow1, windowMaterial);
backwindow1.position.set(-3, -5, -7.1);
backwindow1.castShadow = true;
buildingTop.add(backwindow1);

let backwindow2 = new THREE.BoxGeometry(3, 1.5, 0.5);
backwindow2 = new THREE.Mesh(backwindow2, windowMaterial);
backwindow2.position.set(-9, -5, -7.1);
backwindow2.castShadow = true;
buildingTop.add(backwindow2);

let backwindow3 = new THREE.BoxGeometry(3, 1.5, 0.5);
backwindow3 = new THREE.Mesh(backwindow3, windowMaterial);
backwindow3.position.set(7, -5, -7.1);
backwindow3.castShadow = true;
buildingTop.add(backwindow3);

//2nd
let backstairwindow2 = new THREE.BoxGeometry(1.5, 3, 0.5);
backstairwindow2 = new THREE.Mesh(backstairwindow2, windowMaterial);
backstairwindow2.position.set(2, 5, -7.1);
backstairwindow2.castShadow = true;
buildingTop.add(backstairwindow2);

let backwindow4 = new THREE.BoxGeometry(3, 1.5, 0.5);
backwindow4 = new THREE.Mesh(backwindow4, windowMaterial);
backwindow4.position.set(-3, 5, -7.1);
backwindow4.castShadow = true;
buildingTop.add(backwindow4);

let backwindow5 = new THREE.BoxGeometry(3, 1.5, 0.5);
backwindow5 = new THREE.Mesh(backwindow5, windowMaterial);
backwindow5.position.set(-9, 5, -7.1);
backwindow5.castShadow = true;
buildingTop.add(backwindow5);

let backwindow6 = new THREE.BoxGeometry(3, 1.5, 0.5);
backwindow6 = new THREE.Mesh(backwindow6, windowMaterial);
backwindow6.position.set(7, 5, -7.1);
backwindow6.castShadow = true;
buildingTop.add(backwindow6);


//cottage
const cottageTextures = [
 "textures/cottage-wall1.jpg",
 "textures/cottage-wall2.jpg",
 "textures/cottage-wall3.jpg",
];
let cottageTextureNo = 0;
let cottageTexture = new THREE.TextureLoader().load(
 cottageTextures[cottageTextureNo]
);
cottageTexture.wrapS = THREE.RepeatWrapping;
cottageTexture.wrapT = THREE.RepeatWrapping;
cottageTexture.repeat.set(1, 1);
cottageTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const cottageMaterial = new THREE.MeshStandardMaterial({
 map: cottageTexture,
});

const cottagedesignTextures = [
  "textures/cottageFont.jpg",
  "textures/cottage-window.jpg",
  "textures/cottage-roof1.jpg",
 ];

let cottageGateTexture = new THREE.TextureLoader().load(
  cottagedesignTextures[0]
);
cottageGateTexture.wrapS = THREE.RepeatWrapping;
cottageGateTexture.wrapT = THREE.RepeatWrapping;
cottageGateTexture.repeat.set(1, 1);
cottageGateTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const cottageGateMaterial = new THREE.MeshStandardMaterial({
 map: cottageGateTexture,
});

let cottageWindowTexture = new THREE.TextureLoader().load(
  cottagedesignTextures[1]
);
cottageWindowTexture.wrapS = THREE.RepeatWrapping;
cottageWindowTexture.wrapT = THREE.RepeatWrapping;
cottageWindowTexture.repeat.set(1, 1);
cottageWindowTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const cottageWindowMaterial = new THREE.MeshStandardMaterial({
 map: cottageWindowTexture,
});

 let cottageShadeTexture = new THREE.TextureLoader().load(
  cottagedesignTextures[2]
 );
 cottageShadeTexture.wrapS = THREE.RepeatWrapping;
 cottageShadeTexture.wrapT = THREE.RepeatWrapping;
 cottageShadeTexture.repeat.set(1, 1);
 cottageShadeTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
 const cottageShadeMaterial = new THREE.MeshStandardMaterial({
  map: cottageShadeTexture,
 });


let cottageTop = new THREE.BoxGeometry(14, 0.4, 10);
cottageTop = new THREE.Mesh(cottageTop, cottageMaterial);
cottageTop.position.set(26, 10, 0);
cottageTop.castShadow = true;
  scene.add(cottageTop);

  let cotagefont = new THREE.BoxGeometry(14, 10, 0.6);
  cotagefont = new THREE.Mesh(cotagefont, cottageMaterial);
  cotagefont.position.set(0, -5, 5);
  cotagefont.castShadow = true;
  cottageTop.add(cotagefont);

  let cotageback = new THREE.BoxGeometry(14, 10, 0.6);
  cotageback = new THREE.Mesh(cotageback, cottageMaterial);
  cotageback.position.set(0, -5, -5);
  cotageback.castShadow = true;
  cottageTop.add(cotageback);

  let cottageRightwall = new THREE.BoxGeometry(0.6, 10, 10);
  cottageRightwall = new THREE.Mesh(cottageRightwall, cottageMaterial);
  cottageRightwall.position.set(7, -5, 0);
  cottageRightwall.castShadow = true;
  cottageTop.add(cottageRightwall);

  let cotageleftwall = new THREE.BoxGeometry(0.6, 10, 10);
  cotageleftwall = new THREE.Mesh(cotageleftwall, cottageMaterial);
  cotageleftwall.position.set(-7, -5, 0);
  cotageleftwall.castShadow = true;
  cottageTop.add(cotageleftwall);

  let cotageTopshadeFont = new THREE.BoxGeometry(15, 0.4, 7);
  cotageTopshadeFont = new THREE.Mesh(cotageTopshadeFont, cottageShadeMaterial);
  cotageTopshadeFont.position.set(0, 2, -3);
  cotageTopshadeFont.rotation.x = -7;
  cotageTopshadeFont.castShadow = true;
  cottageTop.add(cotageTopshadeFont);

  let cotageTopshadeBack = new THREE.BoxGeometry(15, 0.4, 7);
  cotageTopshadeBack = new THREE.Mesh(cotageTopshadeBack, cottageShadeMaterial);
  cotageTopshadeBack.position.set(0, 2, 3);
  cotageTopshadeBack.rotation.x = 7;
  cotageTopshadeBack.castShadow = true;
  cottageTop.add(cotageTopshadeBack);

  let cotageTopshadeTop = new THREE.BoxGeometry(15, 0.9, 1);
  cotageTopshadeTop = new THREE.Mesh(cotageTopshadeTop, cottageShadeMaterial);
  cotageTopshadeTop.position.set(0, 4, 0);
  cotageTopshadeTop.castShadow = true;
cottageTop.add(cotageTopshadeTop);

let cotagegate = new THREE.BoxGeometry(3, 6, 0.6);
cotagegate = new THREE.Mesh(cotagegate, cottageGateMaterial);
cotagegate.position.set(0, -7, 5.1);
cotagegate.castShadow = true;
cottageTop.add(cotagegate);

let cotagebackwindow = new THREE.BoxGeometry(3, 3, 0.6);
cotagebackwindow = new THREE.Mesh(cotagebackwindow, cottageWindowMaterial);
cotagebackwindow.position.set(0, -5, -5.15);
cotagebackwindow.castShadow = true;
  cottageTop.add(cotagebackwindow);


// --------------- viewpoint ------------
let vertexShaderview =
  `varying vec2 vcord;
   void main()	{
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
     vcord = uv;
   }`

let fragmantShaderview = 
`varying vec2 vcord;
 uniform sampler2D u_texture_v;
 void main()
 {
     gl_FragColor = texture2D(u_texture_v, vcord);
 }`
let view = new THREE.DodecahedronGeometry(1.2, 10);
let viewpoint = new THREE.TextureLoader().load("textures/viewpoint.jpg");
viewpoint.anisotropy = renderer.capabilities.getMaxAnisotropy();
let suniforms = {
  u_texture_v: { type: "t", value: viewpoint }
};



let viewMaterial = new THREE.ShaderMaterial({
  uniforms: suniforms,
  vertexShader: vertexShaderview,
  fragmentShader: fragmantShaderview
});

view = new THREE.Mesh(view, viewMaterial);
view.position.set(25, -1, 0);
view.castShadow = true
buildingTop.add(view);



// -----------------Camera----------------
let cameraRotationVar = 0.3;
let cameraPositionY = 50;
const camera = new THREE.PerspectiveCamera(
  50,
  sizes.width / sizes.height,
  1,
  110
);
camera.position.x = Math.sin(cameraRotationVar) * 27;
camera.position.y = cameraPositionY;
camera.position.z = Math.cos(cameraRotationVar) * 27;
camera.lookAt(10, 5, 0);
scene.add(camera);

//Orbit controls
 const controls = new THREE.OrbitControls(camera, renderer.domElement);
 controls.update();

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
renderer.setClearColor(0x0, 1);
renderer.clear();

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  renderer.render(scene, camera);

  requestAnimationFrame(loop);
};

loop();

var clock = new THREE.Clock();

function lightMove() {
  const time = clock.getElapsedTime();

  pointLight.position.x = Math.sin(time) * 80;
  pointLight.position.y = 60;
  pointLight.position.z = Math.cos(time) * 80;

  view.rotation.y += 0.01;

  requestAnimationFrame(lightMove);
}

lightMove();

function moveCamera() {
  camera.position.x = Math.sin(cameraRotationVar) * 27;
  camera.position.y = cameraPositionY;
  camera.position.z = Math.cos(cameraRotationVar) * 27;
  camera.lookAt(0, 5, 0);
  renderer.render(scene, camera);
}

document.onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == "38") {
    // up key
    cameraPositionY += 1;
    if (cameraPositionY > 50) {
      cameraPositionY = 50;
    }
    moveCamera();
  } else if (e.keyCode == "40") {
    // down arrow
    cameraPositionY -= 1;
    if (cameraPositionY < 20) {
      cameraPositionY = 20;
    }
    moveCamera();
  } else if (e.keyCode == "37") {
    // left arrow
    cameraRotationVar += 0.03;
    moveCamera();
  } else if (e.keyCode == "39") {
    // right arrow
    cameraRotationVar -= 0.03;
    moveCamera();
  }
}

// --------------For changing cottage texture with mouseclick--------------
addEventListener("click", (event) => {
  cottageTextureNo += 1;
  cottageTextureNo = cottageTextureNo % 3;

  cottageTexture.dispose();
  cottageTexture = new THREE.TextureLoader().load(cottageTextures[cottageTextureNo]);
  cottageTexture.wrapS = THREE.RepeatWrapping;
  cottageTexture.wrapT = THREE.RepeatWrapping;
  cottageTexture.repeat.set(1, 1);
  cottageTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  cottageMaterial.map = cottageTexture;
  uniforms["u_texture"].value = cottageTexture;

});
