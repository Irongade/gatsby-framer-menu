import React from 'react'
import {Link, navigate} from "gatsby"

//icons
import {Close} from "../icons/icons"

// images
import {Image} from "../components/gatsby-images/image"

// data
import data from "../data/products.json"

const Menu = ({menuState, setMenuState}) => {
    return (
        <>
            {
                menuState && 
                <div className="projects">
                    <div className="menu-title">
                        Products
                    </div>
                    <div className="close" onClick={() => setMenuState(!menuState)}>
                        <Close  />
                    </div>
                    <div className="menu">
                        <div className="container">
                            <div className="menu-inner">
                                <ul>
                                    {
                                        data.map((list, index) => <List key={index} 
                                            title={list.title} 
                                            src={list.src}
                                            leftLineFlex={list.leftLineFlex}
                                            rightLineFlex={list.rightLineFlex}
                                            thumbnailPosition={list.thumbnailPosition}
                                            id={list.id}
                                            setMenuState={setMenuState}
                                        />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                !menuState && null
            }
        </>
    )
}

const List = ({title, src, leftLineFlex, rightLineFlex, thumbnailPosition, id, setMenuState}) => {

    const redirectPage = (e) => {
        e.preventDefault();
        setMenuState(false)
        navigate(`/product/${id}`)
    }
    
    return (
        <li>
        <Link to={"#"} onClick={e => redirectPage(e)}>
            <div className="wrapper">
                <div className={`line left flex-${leftLineFlex}`}>
                    {/* <div className="mask"></div> */}
                </div>
                <div className="title">
                    <h2>
                        <div className="text">{title}</div>
                    </h2>
                </div>
                <div className="thumbnail" style={{left: thumbnailPosition}}>
                    <Image src={src} />
                    {/* <div className="mask"></div> */}
                </div>
                <div className="floating-image">
                    <Image src={src} />

                </div>
                <div className={`line right flex-${rightLineFlex}`}>
                    {/* <div className="mask right"></div> */}
                </div>
            </div>
        </Link>
    </li>
    )
}

export default Menu
