const fragmentShader = `

varying vec2 vUv;

vec3 colorA = vec3(0.99f, 0.98f, 0.76f);
vec3 colorB = vec3(0.44f, 0.89f, 0.79f);


void main() {  
  vec3 color = mix(colorA, colorB, vUv.x);

  gl_FragColor = vec4(color,1.0);
}
`;

export default fragmentShader;
