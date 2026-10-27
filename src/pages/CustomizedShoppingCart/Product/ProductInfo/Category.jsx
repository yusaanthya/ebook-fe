import asset0 from "../../../Mart/TopCategory/briefcase.png"
import asset1 from "../../../Mart/TopCategory/quill-pen.png"
import asset2 from "../../../Mart/TopCategory/atom.png"
import asset3 from "../../../Mart/TopCategory/leaf.png"
import asset4 from "../../../Mart/TopCategory/inspiration.png"
import asset5 from "../../../Mart/TopCategory/worldwide.png"
import asset6 from "../../../Mart/TopCategory/suitcase.png"
import asset7 from "../../../Mart/TopCategory/planting.png"
import asset8 from "../../../Mart/TopCategory/heartbeat.png"
import React from 'react'
import './Category.scss'

function Category() {
  return (
    <>
    
      <ul className="me-5">
      <h3>全站分類</h3>
        <li className="item">
        
          <a href="#">
          <img className='icon' src={asset0} />
          商業理財 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset1} />
          文學小說 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset2} />
          社會科學 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset3} />
          生活風格 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset4} />
          藝術設計 
          </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset5} />
          自然科普 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset6} />
          旅遊觀光 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset7} />
          勵志成長 </a>
        </li>
        <li className="item">
          <a href="#">
          <img className='icon' src={asset8} />
          醫療保健 </a>
        </li>
      </ul>
    </>
  )
}

export default Category
