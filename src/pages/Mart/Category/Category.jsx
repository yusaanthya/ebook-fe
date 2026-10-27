import asset0 from "../TopCategory/briefcase.png"
import asset1 from "../TopCategory/quill-pen.png"
import asset2 from "../TopCategory/atom.png"
import asset3 from "../TopCategory/leaf.png"
import asset4 from "../TopCategory/inspiration.png"
import asset5 from "../TopCategory/worldwide.png"
import asset6 from "../TopCategory/suitcase.png"
import asset7 from "../TopCategory/planting.png"
import asset8 from "../TopCategory/heartbeat.png"
import React from 'react'
import './Category.scss'

function Category() {
  return (
    <>
      <ul className="me-5">
        <h3>全站分類</h3>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset0}
            />
            商業理財{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset1}
            />
            文學小說{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset2}
            />
            社會科學{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset3}
            />
            生活風格{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset4}
            />
            藝術設計
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset5}
            />
            自然科普{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset6}
            />
            旅遊觀光{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset7}
            />
            勵志成長{' '}
          </a>
        </li>
        <li className="Mart-category-item">
          <a href="#">
            <img
              className="Mart-category-icon"
              src={asset8}
            />
            醫療保健{' '}
          </a>
        </li>
      </ul>
    </>
  )
}

export default Category
