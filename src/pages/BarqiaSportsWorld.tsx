import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const BarqiaSportsWorld = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "Build/Builds.loader.js",
        dataUrl: "Build/Buids.data",
        frameworkUrl: "Build/Builds.framework.js",
        codeUrl: "Build/Builds.wasm",
    })

    return (
        <div>
            <Unity unityProvider={unityProvider} />
        </div>
    )
}

export default BarqiaSportsWorld;