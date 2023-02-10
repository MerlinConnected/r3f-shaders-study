const fragmentShader = `
varying vec2 vUv;

vec3 colorA = vec3(0.11f, 0.12f, 0.16f);
vec3 colorB = vec3(0.44f, 0.89f, 0.79f);


void main() {  
  vec2 normalizedPixel = gl_FragCoord.xy/1000.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color,1.0);
}
`;

export default fragmentShader;
