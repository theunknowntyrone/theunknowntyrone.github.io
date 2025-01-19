const leftContainer = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const middleContainer = document.querySelector('.middle-container');

const leftContainerButtons = document.querySelectorAll('.left-container-button');

leftContainerButtons.forEach(button => {
    button.addEventListener('click', () => {
        leftContainerButtons.forEach(button => {
            button.classList.remove('seletected');
        });
        button.classList.add('seletected');
    })
})



// Load model
const container = document.querySelector('.modelContainer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

//Lightning
const light = new THREE.DirectionalLight(0xffffff, 1);
scene.add(light);

//Load model
const loader = new THREE.GLTFLoader();
loader.load('assets/models/model.gltf', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
}),
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
        console.log('An error happened');
    };

//Position camera
camera.position.z = 5;

//Animate
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();