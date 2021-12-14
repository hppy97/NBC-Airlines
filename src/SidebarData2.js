import React from 'react';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {BsBoxArrowInRight} from "react-icons/bs";
import {AiOutlineLogin} from "react-icons/ai";
import {RiAccountCircleLine} from "react-icons/ri";
import {BsPeopleCircle} from "react-icons/bs";
import {GiAmericanFootballHelmet} from "react-icons/gi";
import {GiFaceToFace} from "react-icons/gi";
import {GoListUnordered} from "react-icons/go"
import {MdFlight} from "react-icons/md"
import {MdEventAvailable} from "react-icons/md"
import {BiCheckCircle} from "react-icons/bi"
export const SidebarData = [
  {
    title: 'Home',
    path: '/home2',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
//   {
//     title: 'Reports',
//     path: '/reports',
//     icon: <IoIcons.IoIosPaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },


  //   {
  //     title: 'Users',
  //     path: '#',
  //     icon: <IoIcons.IoMdPeople />,
  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,
  //     cName: 'nav-text',
    
  //   subNav: [
  //     {
  //       title: 'Display',
  //       path: '/display',
  //       icon: <IoIcons.IoMdPeople />,
  //       cName: 'sub-nav'
        
  //     },
     
  //   ]

  // },
  
{
  title: 'Bookings',
  path: '/booking2',
  icon: <BiCheckCircle />,
  cName: 'nav-text',
},


  {
    title: 'Logout',
    path: '/',
    icon: <BsBoxArrowInRight />,
    cName: 'nav-text'
  }
];