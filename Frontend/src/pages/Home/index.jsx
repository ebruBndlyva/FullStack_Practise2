import React, { useContext } from 'react'
import { useDeleteMemberMutation, useGetMembersQuery } from '../../Redux/services/MemberApi';
import style from "./style.module.css"
import { FaCogs } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TiGroupOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Swal from 'sweetalert2';
import { FavoriteContext } from '../../context/FavoriteContext';
function Home() {
  let [deleteMember] = useDeleteMemberMutation()
  let { data, isLoading, refetch } = useGetMembersQuery()
  let { favoriteData, setFavoriteData } = useContext(FavoriteContext)

  function AddFavorite(member) {

    let findFavorite = favoriteData.find(fav => fav._id === member._id)
    if (findFavorite) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This member is already in your favorites!",
      });
    } else {
      setFavoriteData([...favoriteData, member])

    }
  }

  async function DeleteMember(id) {
    await deleteMember(id);
    refetch();
  }

  return (
    <div className={style.main}>
      <div className={style.hero}>

        <div className={style.hero_desc}>
          <div className="content">
            <div className={style.hero_desc_wrapper}>
              <span className={style.linear}>Commited to succes</span>
              <h1>We help to grow <br /> your business</h1>
              <p>Mollit anim laborum.Dvcuis aute serunt  iruxvfg dhjkolohr indd re voluptate</p>
              <button>Our Sevices</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.services}>
        <div className="content">
          <div className={style.service_wrapper}>
            <div className={style.service_head}>
              <span className={style.linear}>Our Top services</span>
              <h2>Our Best Services</h2>
            </div>
            <div className={style.service_cards}>
              <div className={style.service_card}>
                <div className={style.overlay}></div>
                <div className={style.service_card_icon}><FaCogs /></div>
                <h3>Strategy Planning</h3>
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
              </div>
              <div className={style.service_card}>
                <div className={style.overlay}></div>
                <div className={style.service_card_icon}><HiOutlineDocumentReport /></div>
                <h3>Insurance Service</h3>
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
              </div>
              <div className={style.service_card}>
                <div className={style.overlay}></div>
                <div className={style.service_card_icon}><TiGroupOutline /></div>
                <h3>Audit & Evalution</h3>
                <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.team}>
        <div className="content">
          <div className={style.team_wrapper}>
            <div className={style.team_head}>
              <span className={style.linear}>Our Professional members</span>
              <h2>Our Team Mambers</h2>
            </div>
            <div className={style.team_cards}>
              {
                isLoading ? (<h1>...Loading</h1>) : (
                  data.map(item => (
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
                          <button onClick={() => AddFavorite(item)}><MdOutlineFavoriteBorder /></button>
                        </div>
                      </div>
                    </div>
                  ))
                )
              }

            </div>
          </div>
        </div>
      </div>
      <div className={style.brand}></div>
    </div>
  )
}

export default Home