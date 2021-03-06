import * as THREE from '../../node_modules/three/build/three.module.js';
import SimplexNoise from "../../node_modules/simplex-noise/simplex-noise.js";
let light1, light2, light3, light4;
App({ el: 'background' });

function App(conf) {
    conf = {
        fov: 75,
        cameraZ: 75,
        xyCoef: 50,
        zCoef: 15,
        lightIntensity: 0.9,
        ambientColor: 0x000000,
        light1Color: Math.random()*0xffffff,
        light2Color: Math.random()*0xffffff,
        light3Color: Math.random()*0xffffff,
        light4Color: Math.random()*0xffffff,
        ...conf
    };

    let renderer, scene, camera;
    let width, height, wWidth, wHeight;

    let plane;
    //the original simplexnoise js does not export the default variables, need to export them
    const simplex = new SimplexNoise();

    const mouse = new THREE.Vector2();
    const mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mousePosition = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();

    init();

    function init() {
        //connect the renderer with the canvas
        renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el), antialias: true, alpha: true });
        camera = new THREE.PerspectiveCamera(conf.fov);
        camera.position.z = conf.cameraZ;
        //update the renderer and camera szie as the window size change
        updateSize();
        window.addEventListener('resize', updateSize, false);
        document.addEventListener('mousemove', e => {
            const v = new THREE.Vector3();
            //give the vector the direction camera looks at
            camera.getWorldDirection(v);
            v.normalize();
            //set the mouse plane normal to the camera
            mousePlane.normal = v;
            mouse.x = (e.clientX / width) * 2 - 1;
            mouse.y = - (e.clientY / height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            //get the mouse position with raycaster by detcting the intersect of the camera mouse line and the mouse plane
            raycaster.ray.intersectPlane(mousePlane, mousePosition);
        })

        initScene();
        animate();
    }

    function initScene() {
        scene = new THREE.Scene();
        initLights();

        let mat = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        let geo = new THREE.PlaneBufferGeometry(wWidth, wHeight, wWidth, wHeight);
        plane = new THREE.Mesh(geo, mat);
        scene.add(plane);

        plane.rotation.x = -Math.PI / 2 + 0.3;
        plane.position.y = 0;
        camera.position.z = 60;
    }

    function initLights() {
        const r = 30;
        const y = 10;
        const lightDistance = 500;

        // light = new THREE.AmbientLight(conf.ambientColor);
        // scene.add(light);

        light1 = new THREE.PointLight(conf.light1Color, conf.lightIntensity, lightDistance);
        light1.position.set(0, y, r);
        scene.add(light1);
        light2 = new THREE.PointLight(conf.light2Color, conf.lightIntensity, lightDistance);
        light2.position.set(0, -y, -r);
        scene.add(light2);
        light3 = new THREE.PointLight(conf.light3Color, conf.lightIntensity, lightDistance);
        light3.position.set(r, y, 0);
        scene.add(light3);
        light4 = new THREE.PointLight(conf.light4Color, conf.lightIntensity, lightDistance);
        light4.position.set(-r, y, 0);
        scene.add(light4);
    }

    function animate() {
        requestAnimationFrame(animate);

        animatePlane();
        animateLights();

        renderer.render(scene, camera);
    }

    function animatePlane() {
        let gArray = plane.geometry.attributes.position.array;
        const time = Date.now() * 0.0002;
        for (let i = 0; i < gArray.length; i += 3) {
            gArray[i + 2] = simplex.noise4D(gArray[i] / conf.xyCoef, gArray[i + 1] / conf.xyCoef, time, mouse.x + mouse.y) * conf.zCoef;
        }
        plane.geometry.attributes.position.needsUpdate = true;
        // plane.geometry.computeBoundingSphere();
    }

    function animateLights() {
        const time = Date.now() * 0.001;
        const d = 50;
        light1.position.x = Math.sin(time * 0.1) * d;
        light1.position.z = Math.cos(time * 0.2) * d;
        light2.position.x = Math.cos(time * 0.3) * d;
        light2.position.z = Math.sin(time * 0.4) * d;
        light3.position.x = Math.sin(time * 0.5) * d;
        light3.position.z = Math.sin(time * 0.6) * d;
        light4.position.x = Math.sin(time * 0.7) * d;
        light4.position.z = Math.cos(time * 0.8) * d;
    }

    function updateSize() {
        width = window.innerWidth;
        height = window.innerHeight;
        if (renderer && camera) {
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            const wsize = getRendererSize();
            wWidth = wsize[0];
            wHeight = wsize[1];
        }
    }

    function getRendererSize() {
        const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
        const vFOV = cam.fov * Math.PI / 180;
        const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
        const width = height * cam.aspect;
        return [width, height];
    }
}
