# learn the threejs

* 我们展示3D 需要三个东西，scene(场景) / camera(摄像头) / render(渲染器/演员)

```javascript
    //create scene
    var scene = new THREE.Scene();

    //create camera
    //PerspectiveCamera( fov, aspect, near, far )
    //fov — Camera frustum vertical field of view. (表示视锥的垂直角度，单位是deg)
    //aspect — Camera frustum aspect ratio. (则是视锥的长宽比/canvas长宽比)
    //near — Camera frustum near plane. (摄像机最近距离)
    //far — Camera frustum far plane. (摄像机最远距离)
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

``` 