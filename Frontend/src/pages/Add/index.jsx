import React from 'react'
import style from "./style.module.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'


import { useNavigate } from 'react-router-dom';
import { usePostMemberMutation } from '../../Redux/services/MemberApi';

function Add() {



  const [postMember] = usePostMemberMutation()

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      profession: "",
      image: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      profession: Yup.string()
        .min(5, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
      image: Yup.string()
        .url()
        .required('Required'),

    }),
    onSubmit: async values => {
      await postMember(values)
      Swal.fire({
        title: "Success!",
        text: "Your product has been added successfully.",
        icon: "success",
        confirmButtonText: "OK",
      })
      navigate("/");
    },
  });

  return (


    <div className='content'>
      <div className={style.add_form}>

        <form className={style.form} onSubmit={formik.handleSubmit}>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>

          )}
          <label htmlFor="profession">profession</label>
          <input
            id="profession"
            name="profession"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.
              profession}
          />
          {formik.touched.
            profession && formik.errors.profession && (
              <div className='error'>{formik.errors.profession}</div>

            )}

          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image && (
            <div className='error'>{formik.errors.image}</div>

          )}
          <div className={style.form_btn}>  <button className='btn btn-success' type="submit">Add</button></div>
        </form>
      </div>
    </div>

  )
}

export default Add