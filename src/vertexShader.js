const vertexShader = `

uniform float u_time;

varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.y += sin(modelPosition.x * 5.0 + u_time) * 0.1;
  modelPosition.y += cos(modelPosition.z * 6.0 + u_time) * 0.1;

  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`;

export default vertexShader;
