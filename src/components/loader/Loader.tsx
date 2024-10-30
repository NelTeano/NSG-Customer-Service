import React from 'react'
import './style.css'

export default function Loader() {
  return (
    <>
    <div>
        <div id="wifi-loader">
            <div className="honeycomb">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div data-text="POS-RETS" className="text"></div>
        </div>
    </div>
  </>
  )
}
