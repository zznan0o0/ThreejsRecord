var KSRender = function(){
  this.init();
}
  
KSRender.prototype = {
  constructor: KSRender,


  init: function(){
    this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 ),

    this.renderer = new THREE.WebGLRenderer(),

    this.scene = new THREE.Scene(),

    this.animate_fn = [],

    this.cache = THREE.Cache;

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


  addAnimate: function(fn){
    this.animate_fn.push(fn);
    return this;
  },

  removeAnimate: function(fn){
    for(var i = 0; i < this.animate_fn.length; i++){
      if(fn === this.animate_fn[i]){
        this.animate_fn.splice(i, 1);
        break;
      }
    }

    return this;
  },

  animate: function(){
    for(var i = 0; i < this.animate_fn.length; i ++){
      this.animate_fn[i]();
    }

    this.render();
    requestAnimationFrame(this.animate.bind(this));
  },


  add: function(obj){
    this.scene.add(obj);
    return this;
  },

  render: function(){
    this.renderer.render(this.scene, this.camera);
    return this;
  },

  resize: function(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  },

  clean: function(){
    if(this.scene.children.length > 1){
      var removeArr = [];
      for(var i = 1; i < this.scene.children.length; i++){
        //dispose
        if(this.scene.children[i].geometry && this.scene.children[i].geometry.dispose){
          this.scene.children[i].geometry.dispose();
        }
        removeArr.push(this.scene.children[i]);
      }

      this.scene.remove.apply(this.scene, removeArr);
      this.cache.clear();
      return this;
    }
  }
}
