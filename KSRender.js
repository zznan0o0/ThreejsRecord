var KSRender = function(){
  this.init();
}
  
KSRender.prototype = {
  constructor: KSRender,

  init: function(){
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.position.z = 50;
    document.body.appendChild(this.renderer.domElement);
    this.scene.add(this.camera);

    this.controller();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.animate();
    
  },

  controller: function(){
    var controls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 1;
    controls.maxDistance = 7500;
  },

  animate_fn: [],

  addAnimate: function(fn){
    this.animate_fn.push(fn);
  },

  animate: function(){
    for(var i = 0; i < this.animate_fn.length; i ++){
      this.animate_fn[i]();
    }

    this.render();
    requestAnimationFrame(this.animate.bind(this));
  },

  camera: new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 ),

  renderer: new THREE.WebGLRenderer(),

  scene: new THREE.Scene(),

  add: function(obj){
    this.scene.add(obj);
  },

  render: function(){
    this.renderer.render(this.scene, this.camera);
  },

  resize: function(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  }
}
