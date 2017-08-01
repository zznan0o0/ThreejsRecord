# learn the threejs

* 我们展示3D 需要三个东西，scene(场景) / camera(摄像头) / render(渲染器/演员)

```javascript
    //create scene
    //fog - 一个雾的实例，定义雾的类型，影响场景中呈现的一切。默认为空。
    //overrideMaterial - 如果不是null，它将强制场景中的所有内容都用该材质呈现。默认为空。如果不是null，它将强制场景中的所有内容都用该材质呈现。默认为空。
    //autoUpdate - 自动更新默认true
    //background - 如果不是null，则设置渲染场景时使用的背景，并且总是首先呈现。可以设置一个颜色设置透明色，纹理覆盖帆布，或cubetexture。默认为空。
    //toJSON() - 返回场景的json格式
    var scene = new THREE.Scene();

    //create camera
    //PerspectiveCamera( fov, aspect, near, far ) 透视镜头
    //fov — Camera frustum vertical field of view. (表示视锥的垂直角度，单位是deg)
    //aspect — Camera frustum aspect ratio. (则是视锥的长宽比/canvas长宽比)
    //near — Camera frustum near plane. (摄像机最近距离)
    //far — Camera frustum far plane. (摄像机最远距离)

    //filmGauge - 用于大轴的薄膜尺寸,默认值是35（毫米）。这个参数不影响投影矩阵，除非。filmoffset设置为非零值
    //filmOffset - 同一单位的水平偏心距
    //focus - 目标距离用于场效应的立体感和深度。这个参数不影响投影矩阵，除非是使用立体摄影机。默认值是10。
    //fov - 相机截锥垂直视野，从底部到顶部，在程度上。默认值是50。
    //isPerspectiveCamera - 用来测试是否为PerspectiveCamera 默认true
    //view - 锥窗口的详情或者为空，使用setViewOffset 来设定，用clearViewOffset.来清除
    //zoom - 缩放 默认1

    //Method
    //clearViewOffset() - 清除setViewOffset方法的设定
    //getEffectiveFOV - 返回当前视场的垂直角度
    //getFilmHeight() - 返回屏幕上图像的高
    //getFilmWidth() - 返回屏幕上图像的宽
    //getFocalLength() - 返回焦距
    //setFocalLength() - 设置焦距
    //setViewOffset ( fullWidth, fullHeight, x, y, width, height ) - 多窗口设置
    //width — width of subcamera
    //height — height of subcamera
    //updateProjectionMatrix() - 更新摄像机的投影矩阵。必须改变任何参数后调用
    //toJSON() - 以json格式返回镜头数据
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // creat a render
    //WebGLRenderer( parameters )
    //parameters - json 定义渲染的行为属性对象。构造函数也不接受任何参数。在所有情况下，当参数丢失时，它都会出现合理的默认值。以下是有效参数
    //canvas, context, alpha
    //precision - 着色器的精度。可“highp”、“mediump”或“lowP”。默认为“highp“如果设备支持的。在这里看到“避免事物”的说明。
    //premultipliedAlpha - 是否会认为颜色渲染器进行α。默认为真
    //- antialias - 抗锯齿默认false
    //- stencil - 绘图缓冲区是否具有至少8位的模板缓冲区。默认true
    //- preserveDrawingBuffer - 是否保留缓冲区，直到手动清除或覆盖。默认为false。
    //- depth - 绘图缓冲区是否具有至少16位的深度缓冲区。默认为true
    //- logarithmicDepthBuffer - 是否使用对数深度缓冲区。这可能是必要的如果在一个场景中使用这种规模巨大的差异。默认为false

    //Properties
    //autoClear - 指定渲染器会自动在渲染一帧清晰的输出,以下的clearxxx需要这个属性为true。
    //autoClearColor - 指定是否清理渲染颜色缓冲区。默认为true。
    //autoClearDepth - 指定渲染器是否清除深度缓存, 默认true
    //autoClearStencil - 是否清理渲染模板缓存， 默认true

    //capabilities - json 包含有关当前renderingcontext细节物体的能力。
    //- floatFragmentTextures - 检查context 是否支持oes_texture_float延伸
    //- floatVertexTextures -  true 如果 "floatFragmentTextures" 和 "vertexTextures" 都是 true.
    //- getMaxAnisotropy() 
    // - getMaxPrecision ()
    //- logarithmicDepthBuffer - true 如果logarithmicdepthbuffer设置在构造函数的真实语境支持ext_frag_depth延伸
    // - 
    var renderer = new THREE.WebGLRenderer();

``` 


## TextureLoader(manager)
```javascript
    // instantiate a loader
    var loader = new THREE.TextureLoader();

    // load a resource
    loader.load(
        // resource URL
        'textures/land_ocean_ice_cloud_2048.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshBasicMaterial( {
                map: texture
             } );
        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );
```

