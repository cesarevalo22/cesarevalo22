import React from 'react';

function SvgFacebook({ className, ...props}) {
    return (
        <svg className={className} width={props.width} height={props.height} viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.733 0.540527H5.29382C2.40403 0.540527 0.0539551 2.89061 0.0539551 5.78039V37.2196C0.0539551 40.1094 2.40403 42.4594 5.29382 42.4594H36.733C39.6228 42.4594 41.9729 40.1094 41.9729 37.2196V5.78039C41.9729 2.89061 39.6228 0.540527 36.733 0.540527Z" fill="#1976D2"/>
        <path d="M35.4229 21.5001H28.8731V16.2602C28.8731 14.814 30.0468 14.9502 31.493 14.9502H34.113V8.40039H28.8731C24.5319 8.40039 21.0133 11.919 21.0133 16.2602V21.5001H15.7734V28.0499H21.0133V42.4595H28.8731V28.0499H32.803L35.4229 21.5001Z" fill="#FAFAFA"/>
        </svg>
    );
  }
  
  export default SvgFacebook;
  