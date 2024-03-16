'use client'
import { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect';

export default function Banner_720() {
    const banner = useRef()

    const atOptions = {
		'key' : isMobile ? '4684b4077636b6c3bf1c2e6965eed809' : '35536630556a9db30ba28d4d3ecc0fc1',
		'format' : 'iframe',
		'height' : isMobile ? 50 : 90,
		'width' : isMobile ? 350 : 728,
		'params' : {}
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 w-fit flex justify-center items-center text-white text-center" ref={banner}></div>
}