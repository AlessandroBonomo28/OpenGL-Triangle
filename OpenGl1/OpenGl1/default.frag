#version 330 core
out vec4 FragColor;
in vec4 vertexColor;
uniform vec2 resolution;

void main()
{
   vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;
   vec3 col = vec3(0);

   col.xy += uv;
   
   //FragColor = vec4(col,1.0);
   
   //FragColor = vec4(1f,0f, 0f, 1.0f);
   FragColor = vertexColor;
}