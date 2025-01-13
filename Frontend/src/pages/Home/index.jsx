import React, { useContext, useEffect, useState } from 'react'
import { useDeleteMemberMutation, useGetMembersQuery } from '../../Redux/services/MemberApi';
import style from "./style.module.css"
import { FaCogs } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TiGroupOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Swal from 'sweetalert2';
import { FavoriteContext } from '../../context/FavoriteContext';
import { Helmet } from "react-helmet"
import servPng from "../../assets/about.png.webp"
import brand1 from "../../assets/brand1.png.webp"
import brand2 from "../../assets/brand2.png.webp"
import brand3 from "../../assets/brand4.png.webp"
import brand4 from "../../assets/brand5.png.webp"
import brand5 from "../../assets/brand3.png.webp"


function Home() {
  let [deleteMember] = useDeleteMemberMutation()
  let { data, isLoading, refetch } = useGetMembersQuery()
  let { favoriteData, setFavoriteData } = useContext(FavoriteContext)
  let [datas, setDatas] = useState([])

  useEffect(() => {
    if (!isLoading) {
      setDatas(data)
    }
  }, [data])



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
  function handleSearch(inputValue) {
    const trimmedValue = inputValue.trim().toLowerCase();

    if (!trimmedValue) {
      setDatas(data);
      return;
    }

    const filteredData = data.filter(({ name }) =>
      name.toLowerCase().includes(trimmedValue)
    );

    setDatas(filteredData);
  }
  function handleSort(sortType) {
    let sortedData;
    if (sortType === "default") {
      setDatas(data);
      return;
    }
    switch (sortType) {
      case "a-z":
        sortedData = data.toSorted((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedData = data.toSorted((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedData = data;
    }

    setDatas([...sortedData]);
  }
  return (
    <div className={style.main}>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
      <div className={style.top_Services}>
        <div className="content">
          <div className={style.top_Services_wrapper}>
            <div className={style.top_Services_img}>
              <img src={servPng} alt="service-png" />
            </div>
            <div className={style.top_Services_desc}>
              <div className={style.service_head}>
                <span className={style.linear}>Our Top services</span>
                <h2>Our Best Services</h2>
              </div>
              <p>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>
              <p>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.</p>
              <button>More About Us</button>
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
            <div className={style.filters}>
              <input className={style.searchInp} type="text" placeholder='Search...' onChange={(e) => handleSearch(e.target.value)} />
              <select className={style.sortList} onChange={(e) => handleSort(e.target.value)} >
                <option value="default">Filters</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>

            </div>
            <div className={style.team_cards}>
              {
                isLoading ? (<h1>...Loading</h1>) : (
                  datas.map(item => (
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
      <div className={style.brand}>
        <div className="content">
          <div className={style.brand_wrapper}>
            <div className={style.brand_img}>
              <img src={brand1} alt="brand" />
            </div>
            <div className={style.brand_img}>
              <img src={brand2} alt="brand" />
            </div>
            <div className={style.brand_img}>
              <img src={brand3} alt="brand" />
            </div>
            <div className={style.brand_img}>
              <img src={brand4} alt="brand" />
            </div>
            <div className={style.brand_img}>
              <img src={brand5} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home