import React, { useContext } from 'react'
import style from "./style.module.css"
import { FavoriteContext } from '../../context/FavoriteContext'
import { MdDelete } from "react-icons/md";
function Favorites() {
  let { favoriteData, setFavoriteData } = useContext(FavoriteContext)

  function DeleteMember(id) {
    let favDel = favoriteData.filter((item) => item._id !== id)
    setFavoriteData(favDel)
  }
  return (
    <div className="content">
      <div className={style.favorite}>
        {
          favoriteData.map((item) => (
            <div key={item._id} className={style.team_card}>
              <div className={style.overlay}></div>
              <div className={style.team_card_img}>
                <img src={item.image} alt="card-img" />
              </div>
              <div className={style.team_desc}>
                <h3>{item.name}</h3>
                <span className={style.linear}>{item.profession}</span>
                <div className={style.team_icons}>
                  <button onClick={() => DeleteMember(item._id)}><MdDelete /></button>

                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Favorites