// =========================================
// THREE.JS PREMIUM BACKGROUND
// =========================================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha: true,
antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document
.getElementById("bg-canvas")
.appendChild(renderer.domElement);

// =========================================
// GEOMETRY
// =========================================

const geometry = new THREE.IcosahedronGeometry(2, 8);

const material = new THREE.MeshStandardMaterial({

color:0x6C63FF,

metalness:.9,

roughness:.2,

emissive:0x00D9FF,

emissiveIntensity:.7

});

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

// =========================================
// LIGHTS
// =========================================

const light1 = new THREE.PointLight(0x00D9FF,3);

light1.position.set(5,5,5);

scene.add(light1);

const light2 = new THREE.PointLight(0x6C63FF,2);

light2.position.set(-5,-5,5);

scene.add(light2);

const ambient = new THREE.AmbientLight(0xffffff,.4);

scene.add(ambient);

// =========================================
// PARTICLES
// =========================================

const starsGeometry = new THREE.BufferGeometry();

const starCount = 3000;

const positions = [];

for(let i=0;i<starCount;i++){

positions.push(

(Math.random()-.5)*120,
(Math.random()-.5)*120,
(Math.random()-.5)*120

);

}

starsGeometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(positions,3)

);

const starsMaterial = new THREE.PointsMaterial({

color:0xffffff,

size:.05

});

const stars = new THREE.Points(

starsGeometry,

starsMaterial

);

scene.add(stars);

// =========================================
// CAMERA
// =========================================

camera.position.z = 6;

// =========================================
// MOUSE
// =========================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove",(e)=>{

mouseX = (e.clientX/window.innerWidth-.5)*2;

mouseY = (e.clientY/window.innerHeight-.5)*2;

});

// =========================================
// ANIMATION
// =========================================

function animate(){

requestAnimationFrame(animate);

// Sphere Rotation

sphere.rotation.x += 0.002;

sphere.rotation.y += 0.004;

// Stars Rotation

stars.rotation.y += 0.0008;

// Mouse Follow

sphere.position.x +=

(mouseX - sphere.position.x)*0.03;

sphere.position.y +=

(-mouseY - sphere.position.y)*0.03;

// Floating Effect

sphere.position.z =

Math.sin(Date.now()*0.001)*0.3;

renderer.render(scene,camera);

}

animate();

// =========================================
// WINDOW RESIZE
// =========================================

window.addEventListener("resize",()=>{

camera.aspect =

window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});

// =========================================
// AUTO COLOR CHANGE
// =========================================

setInterval(()=>{

material.emissive.setHSL(

Math.random(),

1,

0.5

);

},5000);

// =========================================
// END
// =========================================