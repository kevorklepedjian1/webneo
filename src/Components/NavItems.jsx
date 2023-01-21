import React from 'react'
import * as RiIcons from "react-icons/ri"
export const NavItems = [
    {
        title: "E-Shop",
        path: "#",
        hr:<hr/>,
        clo: <RiIcons.RiArrowDownSFill/>,
        op:  <RiIcons.RiArrowUpSFill/>
    },
    {
        title: "Our Story",
        path: "#",
        clo: <RiIcons.RiArrowDownSFill/>,
        op:  <RiIcons.RiArrowUpSFill/>
    },
    {
        title: "Our Story",
        path: "#",
        clo: <RiIcons.RiArrowDownSFill/>,
        op:  <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: "All juices",
                path: "#"
            },
            {
                title: "Orange juices",
                path: "#"
            },
            {
                title: "vin juices",
                path: "#"
            },
        ]
    },
    {
        title: "Our Products",
        path: "#"
    },
    {
        title: "Latest News",
        path: "#"
    },
    {
        title: "Work With Us",
        path: "#"
    },
    {
        title: "CSR",
        path: "#"
    },
    {
        title: "Contact Us",
        path: "#"
    }
]