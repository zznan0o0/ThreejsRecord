var CameraConstrol = function(camera, canvas){
  this.camera = camera;
  this.canvas = canvas ? canvas : window;
  this.init();
}

CameraConstrol.prototype = {
  constructor: CameraConstrol,

  init: function(){
    this.state = {
      cameraX: this.camera.position.x,
      cameraY: this.camera.position.y,
      cameraZ: this.camera.position.z,
      isDrag: false,
      isMove:false,
      mousedownX: 0,
      mousedownY: 0,
      moveX: 0,
      moveY: 0,
    }
    this.canvas.addEventListener('mousedown', this.mousedown.bind(this), { passive: false });
    this.canvas.addEventListener('mouseup', this.mouseup.bind(this), { passive: false })
    this.canvas.addEventListener('mousemove', this.mousemove.bind(this), { passive: false })
  },

  rotateX: function(x, y, z, angle){
    if(angle < -1) angle = -1;
    var cos = Math.cos(angle),
      sin = Math.sin(angle);

    var y1 = cos * y - sin * z,
      z1 = cos * z + sin * y;

    console.log(angle)
    return {x:x, y:y1, z:z1};
  },

  rotateY: function(x, y, z, angle){
    var cos = Math.cos(angle),
      sin = Math.sin(angle);

    var x1 = cos * x - sin * z,
      z1 = cos * z + sin * x;

    return {x:x1, y:y, z:z1};
  },

  getXYZ: function(){
    if(!this.state.isMove){
      return {x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z}
    }

    var xyz;
    xyz = this.rotateX(this.state.cameraX, this.state.cameraY, this.state.cameraZ, this.state.angleX);
    xyz = this.rotateY(xyz.x, xyz.y, xyz.z, this.state.angleY);
    return xyz;
  },

  //{ passive: false }
  mousedown: function(e){
    e.preventDefault();
    this.state.isDrag = true;
    this.state.mousedownX = e.clientX;
    this.state.mousedownY = e.clientY;
  },

  mouseup: function(e){
    e.preventDefault();
    this.state.isDrag = false;
    this.state.isMove = false;
    
    this.state.cameraX = this.camera.position.x;
    this.state.cameraY = this.camera.position.y;
    this.state.cameraZ = this.camera.position.z;
  },

  mousemove: function(e){
    e.preventDefault();
    if(this.state.isDrag){
      this.state.isMove = true;
      this.state.moveX = e.clientX;
      this.state.moveY = e.clientY;

      this.state.angleY = (this.state.mousedownX - this.state.moveX) * 0.005;
      this.state.angleX = (this.state.mousedownY - this.state.moveY) * 0.005;
    }
  }
}