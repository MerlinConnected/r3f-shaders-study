const planeFragmentShader = `

varying vec2 vUv;

void main() {
    vec3 c;
	float l, z = abs(time);

	for(int i = 0; i < 3; i++) {
		vec2 u, p = uv / 2.;
		u = p;
		z += .07;
		l = length(p);
		u += p / l * (sin(z) + 1.) * abs(sin(l * 9. - z - z));
		c[i] = .01 / length(mod(u, 1.) - .5);
	}
	
	return vec4(c / l, abs(time));
}

`

export default planeFragmentShader
