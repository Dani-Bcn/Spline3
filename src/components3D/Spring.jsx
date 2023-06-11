import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Plant2 } from "./Plant2";

export function Spring(props) {
  const { nodes, materials } = useGLTF("/flowers.glb");
  return (
    <group 
    {...props} dispose={null}
      scale={0.03}
      position={[1.8,-0.4,0]}
      
      rotation={[0,-0.1,0]}
    >
      <Plant2/>
      <pointLight
        position={[20,40,40]}
        intensity={1}        
      />
       <group 
       scale={1.8}
       position={[17.882, 7.011, 2.55]}>
        <group position={[0.369, -1.462, 0.413]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-maceta"].geometry}
            material={materials.maceta}
           
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-circuloFlor"].geometry}
            material={materials.circuloFlor}
          />
        </group>
        <group
          position={[3.263, 5.106, 1.86]}
          rotation={[-0.052, -0.011, -0.264]}
        >
          <group position={[0, 0, -0.063]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0.geometry}
              material={materials.Petalos}
              position={[0, 1.724, 0]}
              material-roughness={0.55}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1.geometry}
              material={materials.Petalos}
              position={[1.348, 1.075, 0]}
              rotation={[0, 0, -0.898]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2.geometry}
              material={materials.Petalos}
              position={[1.681, -0.384, 0]}
              rotation={[0, 0, -1.795]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3.geometry}
              material={materials.Petalos}
              position={[0.748, -1.553, 0]}
              rotation={[0, 0, -2.693]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4.geometry}
              material={materials.Petalos}
              position={[-0.748, -1.553, 0]}
              rotation={[0, 0, 2.693]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5.geometry}
              material={materials.Petalos}
              position={[-1.681, -0.384, 0]}
              rotation={[0, 0, 1.795]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_6.geometry}
              material={materials.Petalos}
              position={[-1.348, 1.075, 0]}
              rotation={[0, 0, 0.898]}
            />
          </group>
          <group position={[0, 0, -0.047]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_8.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.047]}
          />
        </group>
        <group
          position={[0.507, 3.503, 2.949]}
          rotation={[-0.052, -0.011, -0.116]}
        >
          <group position={[0, 0, -0.057]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_1.geometry}
              material={materials.Petalos}
              position={[0, 1.547, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_1.geometry}
              material={materials.Petalos}
              position={[1.34, 0.774, 0]}
              rotation={[0, 0, -Math.PI / 3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_1.geometry}
              material={materials.Petalos}
              position={[1.34, -0.774, 0]}
              rotation={[0, 0, -2.094]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_1.geometry}
              material={materials.Petalos}
              position={[0, -1.547, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_1.geometry}
              material={materials.Petalos}
              position={[-1.34, -0.774, 0]}
              rotation={[0, 0, 2.094]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_1.geometry}
              material={materials.Petalos}
              position={[-1.34, 0.774, 0]}
              rotation={[0, 0, Math.PI / 3]}
            />
          </group>
          <group position={[0, 0, -0.042]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_9.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.042]}
          />
        </group>
        <group
          position={[-0.066, 6.325, 1.896]}
          rotation={[-0.052, -0.011, -0.116]}
        >
          <group position={[0, 0, -0.045]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_2.geometry}
              material={materials.Petalos}
              position={[0, 1.217, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_2.geometry}
              material={materials.Petalos}
              position={[1.158, 0.376, 0]}
              rotation={[0, 0, -1.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_2.geometry}
              material={materials.Petalos}
              position={[0.716, -0.985, 0]}
              rotation={[0, 0, -2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_2.geometry}
              material={materials.Petalos}
              position={[-0.716, -0.985, 0]}
              rotation={[0, 0, 2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_2.geometry}
              material={materials.Petalos}
              position={[-1.158, 0.376, 0]}
              rotation={[0, 0, 1.257]}
            />
          </group>
          <group position={[0, 0, -0.033]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_10.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <group position={[0, 0, -0.045]} rotation={[0, 0, -0.557]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_3.geometry}
              material={materials.Petalos}
              position={[0, 1.217, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_3.geometry}
              material={materials.Petalos}
              position={[1.158, 0.376, 0]}
              rotation={[0, 0, -1.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_3.geometry}
              material={materials.Petalos}
              position={[0.716, -0.985, 0]}
              rotation={[0, 0, -2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_3.geometry}
              material={materials.Petalos}
              position={[-0.716, -0.985, 0]}
              rotation={[0, 0, 2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_3.geometry}
              material={materials.Petalos}
              position={[-1.158, 0.376, 0]}
              rotation={[0, 0, 1.257]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.033]}
          />
        </group>
        <group
          position={[-2.729, 4.304, 2.385]}
          rotation={[-0.052, -0.011, 0.201]}
        >
          <group position={[0, 0, -0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_4.geometry}
              material={materials.Petalos}
              position={[0, 1.345, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_4.geometry}
              material={materials.Petalos}
              position={[1.28, 0.416, 0]}
              rotation={[0, 0, -1.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_4.geometry}
              material={materials.Petalos}
              position={[0.791, -1.088, 0]}
              rotation={[0, 0, -2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_4.geometry}
              material={materials.Petalos}
              position={[-0.791, -1.088, 0]}
              rotation={[0, 0, 2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_4.geometry}
              material={materials.Petalos}
              position={[-1.28, 0.416, 0]}
              rotation={[0, 0, 1.257]}
            />
          </group>
          <group position={[0, 0, -0.037]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_11.geometry}
              material={materials.circuloFlor}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.037]}
          />
        </group>
      </group>
      <group 
      scale={1.8}
      position={[-17.552, 7.011, 2.55]}>
        <group position={[0.378, -1.462, 0.413]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-maceta_1"].geometry}
            material={materials.maceta}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cube-circuloFlor_1"].geometry}
            material={materials.circuloFlor}
          />
        </group>
        <group
          position={[3.263, 5.106, 1.86]}
          rotation={[-0.052, -0.011, -0.264]}
        >
          <group position={[0, 0, -0.063]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_5.geometry}
              material={materials.Petalos}
              position={[0, 1.724, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_5.geometry}
              material={materials.Petalos}
              position={[1.348, 1.075, 0]}
              rotation={[0, 0, -0.898]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_5.geometry}
              material={materials.Petalos}
              position={[1.681, -0.384, 0]}
              rotation={[0, 0, -1.795]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_5.geometry}
              material={materials.Petalos}
              position={[0.748, -1.553, 0]}
              rotation={[0, 0, -2.693]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_5.geometry}
              material={materials.Petalos}
              position={[-0.748, -1.553, 0]}
              rotation={[0, 0, 2.693]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_2.geometry}
              material={materials.Petalos}
              position={[-1.681, -0.384, 0]}
              rotation={[0, 0, 1.795]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_6_1.geometry}
              material={materials.Petalos}
              position={[-1.348, 1.075, 0]}
              rotation={[0, 0, 0.898]}
            />
          </group>
          <group position={[0, 0, -0.047]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_12.geometry}
              material={materials.rama}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.047]}
          />
        </group>
        <group
          position={[0.507, 3.503, 2.949]}
          rotation={[-0.052, -0.011, -0.116]}
        >
          <group position={[0, 0, -0.057]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_6.geometry}
              material={materials.Petalos}
              position={[0, 1.547, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_6.geometry}
              material={materials.Petalos}
              position={[1.34, 0.774, 0]}
              rotation={[0, 0, -Math.PI / 3]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_6.geometry}
              material={materials.Petalos}
              position={[1.34, -0.774, 0]}
              rotation={[0, 0, -2.094]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_6.geometry}
              material={materials.Petalos}
              position={[0, -1.547, 0]}
              rotation={[0, 0, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_6.geometry}
              material={materials.Petalos}
              position={[-1.34, -0.774, 0]}
              rotation={[0, 0, 2.094]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_5_3.geometry}
              material={materials.Petalos}
              position={[-1.34, 0.774, 0]}
              rotation={[0, 0, Math.PI / 3]}
            />
          </group>
          <group position={[0, 0, -0.042]}>
          
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.042]}
          />
        </group>
        <group
          position={[-0.066, 6.325, 1.896]}
          rotation={[-0.052, -0.011, -0.116]}
        >
          <group position={[0, 0, -0.045]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_7.geometry}
              material={materials.Petalos}
              position={[0, 1.217, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_7.geometry}
              material={materials.Petalos}
              position={[1.158, 0.376, 0]}
              rotation={[0, 0, -1.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_7.geometry}
              material={materials.Petalos}
              position={[0.716, -0.985, 0]}
              rotation={[0, 0, -2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_7.geometry}
              material={materials.Petalos}
              position={[-0.716, -0.985, 0]}
              rotation={[0, 0, 2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_7.geometry}
              material={materials.Petalos}
              position={[-1.158, 0.376, 0]}
              rotation={[0, 0, 1.257]}
            />
          </group>
          <group position={[0, 0, -0.033]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_14.geometry}
              material={materials.rama}
            />
          </group>
          <group position={[0, 0, -0.045]} rotation={[0, 0, -0.557]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_8.geometry}
              material={materials.Petalos}
              position={[0, 1.217, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_8.geometry}
              material={materials.Petalos}
              position={[1.158, 0.376, 0]}
              rotation={[0, 0, -1.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_8.geometry}
              material={materials.Petalos}
              position={[0.716, -0.985, 0]}
              rotation={[0, 0, -2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_8.geometry}
              material={materials.Petalos}
              position={[-0.716, -0.985, 0]}
              rotation={[0, 0, 2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_8.geometry}
              material={materials.Petalos}
              position={[-1.158, 0.376, 0]}
              rotation={[0, 0, 1.257]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.033]}
          />
        </group>
        <group
          position={[-2.729, 4.304, 2.385]}
          rotation={[-0.052, -0.011, 0.201]}
        >
          <group position={[0, 0, -0.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_0_9.geometry}
              material={materials.Petalos}
              position={[0, 1.345, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1_9.geometry}
              material={materials.Petalos}
              position={[1.28, 0.416, 0]}
              rotation={[0, 0, -1.257]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2_9.geometry}
              material={materials.Petalos}
              position={[0.791, -1.088, 0]}
              rotation={[0, 0, -2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_3_9.geometry}
              material={materials.Petalos}
              position={[-0.791, -1.088, 0]}
              rotation={[0, 0, 2.513]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_4_9.geometry}
              material={materials.Petalos}
              position={[-1.28, 0.416, 0]}
              rotation={[0, 0, 1.257]}
              material-color="rgb(250,250,150)"
            />
          </group>
          <group position={[0, 0, -0.037]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep_15.geometry}
              material={materials.rama}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_7.geometry}
            material={materials.circuloFlor}
            position={[0, 0, 0.037]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_0.geometry}
        material={materials.madera}
        position={[-24.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_1.geometry}
        material={materials.madera}
        position={[-17.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_2.geometry}
        material={materials.madera}
        position={[-10.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_3.geometry}
        material={materials.madera}
        position={[-3.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_4.geometry}
        material={materials.madera}
        position={[3.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_5.geometry}
        material={materials.madera}
        position={[10.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_6.geometry}
        material={materials.madera}
        position={[17.5, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_7.geometry}
        material={materials.madera}
        position={[24.5, 0, 0]}
      />
      <group position={[0, -7.676, 0.853]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude1_1.geometry}
          material={materials.madera}
      
        />
      </group>
      <group position={[0, 7.474, 0.853]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
       
          geometry={nodes.Extrude_8.geometry}
          material={materials.madera}
          material-color="rgb(150,150,250)"
          material-metalness={1}
          material-roughness={0.7}
        />
      </group>
      <mesh
      scale={[8,8,6]}
        geometry={nodes.sol.geometry}
        material={materials.Petalos}
        position={[20.504, 40, 0.607]}
             
      />
    </group>
  );
}

useGLTF.preload("/flowers.glb");