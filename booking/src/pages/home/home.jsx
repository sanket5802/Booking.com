import { Featured } from "../../components/featured/featured"
import { FeaturedProperty } from "../../components/featuredlist/featuredProperty"
import {Footer} from '../../components/footer/footer'
import { Header } from "../../components/header/header"
import {MailList} from '../../components/mail/MailList';

import { Navbar } from "../../components/navbar/navbar"
import { PropertyList } from "../../components/propertList/propertyList"
import './home.css'
export const Home = ()=>{
    return (
        <div className="Home">
         <Navbar/>
        <Header/>
        <div className="homeContainer">
         <Featured/>
         <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <FeaturedProperty/>
        <MailList/>
        <Footer/>
        </div>

        </div>
        
    )
}