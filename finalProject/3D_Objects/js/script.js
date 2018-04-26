
function wire_object(object,color,posx,posy,posz, scene){
        var geo = new THREE.EdgesGeometry( object );
        var mat = new THREE.LineBasicMaterial( { color: color } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.position.y=posy;
        wireframe.position.x=posx;
        wireframe.position.z=posz;
        scene.add( wireframe );
    }

function Ofront(){
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    wire_object(geometry,0x000000,0,1,0, scene);

    var x = 150;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );

    camera.position.z=5;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}

function Oside(){
    
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;
    
    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    wire_object(geometry,0x000000,0,1,0, scene);

    var x = 150;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );

    camera.position.z=2;
    camera.position.x = -10;
    camera.rotation.y = -90 * Math.PI / 180;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}

function Otop(){
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    wire_object(geometry,0x000000,0,1,0, scene);

    var x = 80;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );

    camera.position.z=2;
    camera.position.y = 2;
    camera.rotation.x = -90 * Math.PI / 180;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}

function OnePprojection(){           
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    wire_object(geometry,0x000000,0,1,0, scene);

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    camera.position.z = 5;
    camera.position.x = 0;
    camera.position.y = 0;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);             
}

function TwoPprojection(){           
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    wire_object(geometry,0x000000,0,1,0, scene);

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);

    camera.position.z = 5;
    camera.position.x = -5;
    camera.position.y = 0;
    camera.rotation.y = -45 * Math.PI / 180 ;
    
    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);

}

function ThreePprojection(){           
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    wire_object(geometry,0x000000,0,1,0, scene);

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    
    camera.position.z = 5;
    camera.position.x = -5;
    camera.position.y = 2;    
    camera.rotation.y = -45 * Math.PI / 180 ;
    
    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);

}

//Global variables for Oblique.
var top_val = -1;
var side_val = -1;

function IncreaseT(){top_val -= 1;}

function IncreaseS(){side_val -= 1;}

function DecreaseT(){top_val += 1;}

function DecreaseS(){side_val += 1;}

function Oblique(){
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,top_val,0,
               0,1,side_val,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;
    
    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    cube.geometry.applyMatrix( matrix );
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );
    cylinder.geometry.applyMatrix( matrix );
    wire_object(geometry,0x000000,0,1,0, scene);
    
    var x = 200;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 10 );
    camera.position.z = 5;
    camera.position.x = 0;
    camera.position.y = 0;
    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}

function Isometric(){
    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    cube.geometry.applyMatrix( matrix );
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );
    cylinder.geometry.applyMatrix( matrix );
    wire_object(geometry,0x000000,0,1,0, scene);

    var x = 200;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );

    camera.position.set( 20, 20, 20 );
    camera.lookAt( scene.position );
    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}

function Dimetric(){

    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    cube.geometry.applyMatrix( matrix );
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );
    cylinder.geometry.applyMatrix( matrix );
    wire_object(geometry,0x000000,0,1,0, scene);

    var x = 200;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );

    camera.position.set( 20, 10, 20 );
    camera.lookAt( scene.position );
    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}

function Trimetric(){

    var width = window.innerWidth/2;
    var height = window.innerHeight/2;

    var matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    cube.geometry.applyMatrix( matrix );
    wire_object(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: 0x32cd32} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );
    cylinder.geometry.applyMatrix( matrix );
    wire_object(geometry,0x000000,0,1,0, scene);

    var x = 200;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );
    camera.position.set( 5, 10, 20 );
    camera.lookAt( scene.position );
    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}
