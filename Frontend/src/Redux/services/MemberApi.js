import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const memberApi = createApi({
    reducerPath: "memberApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getMembers: builder.query({
            query: () => "/members"
        }),

        deleteMember: builder.mutation({
            query: (id) => ({
                url: `/members/${id}`,
                method: "DELETE"
            })
        }),
        postMember: builder.mutation({
            query: (newMember) => ({
                url: "/members",
                method: "POST",
                body: newMember,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }),
        getMemberById: builder.query({
            query: (id) => `/members/${id}`
        })
    })
})
export const { useGetMembersQuery, useDeleteMemberMutation, usePostMemberMutation, useGetMemberByIdQuery } = memberApi