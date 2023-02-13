const vertexShader = `

varying vec2 vUv;

uniform float u_time;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.02;
  
  modelPosition.y += cos(modelPosition.z * 6.0 + u_time * 2.0) * 0.01;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`;

export default vertexShader;
