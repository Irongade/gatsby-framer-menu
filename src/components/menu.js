import React, {useState, useEffect, useRef} from 'react'
import {Link, navigate} from "gatsby"
import {motion, AnimatePresence} from "framer-motion"

//icons
import {Close} from "../icons/icons"

// images
import {Image} from "../components/gatsby-images/image"

// data
import data from "../data/products.json"

// default transition
const transition = {
    duration: .8,
    ease: [.6,-.05,.01,.9]
}

//variants

const parent = {
    animate: {
        transition: {
            staggerChildren: .1,
            delayChildren: 1,
        }
    }
}

const titleSlideUp = {
    initial: {y: 200},
    animate: {y: 0},
}

const maskAnimation = {
    initial: {width: "100%"},
    animate: {width: "0%"}
}


const Menu = ({menuState, setMenuState, x, y, setCursorHovered}) => {
    return (
        <>
            <AnimatePresence>
            {
                menuState && 
                    <>
                        <motion.div 
                            initial={{visibility: "hidden"}}
                            animate={{visibility: "visible", transition: {delay: 1, duration: .2}}}
                            exit={{visibility: "hidden", transition: {delay: 1, duration: .2}}}
                            className="projects">
                            <div className="menu-title">
                                Products
                            </div>
                            <div className="close" onClick={() => setMenuState(!menuState)} onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)}>
                                <Close  />
                            </div>
                            <div className="menu">
                                <div className="container">
                                    <div className="menu-inner">
                                        <motion.ul
                                            variants={parent}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                        >
                                            {
                                                data.map((list, index) => <List key={index} 
                                                    title={list.title} 
                                                    src={list.src}
                                                    leftLineFlex={list.leftLineFlex}
                                                    rightLineFlex={list.rightLineFlex}
                                                    thumbnailPosition={list.thumbnailPosition}
                                                    id={list.id}
                                                    setMenuState={setMenuState}
                                                    x={x}
                                                    y={y}
                                                    offset={list.offset}
                                                    setCursorHovered={setCursorHovered}
                                                />)
                                            }
                                        </motion.ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <Panels />
                    </>
                }
            </AnimatePresence>

            {
                !menuState && null
            }
        </>
    )
}

const List = ({title, src, leftLineFlex, rightLineFlex, thumbnailPosition, id, setMenuState, x, y, offset, setCursorHovered}) => {

   const list = useRef(null) 
    const [hoverState, setHoverState] = useState(false)

    const [listPosition, setListPosition] = useState({
        top: 0,
        left: 0
    })

    useEffect(() => {
        setListPosition({
            top: list.current.getBoundingClientRect().top,
            left: list.current.getBoundingClientRect().left,
            
        })
        
    }, [hoverState])

    const redirectPage = (e) => {
        e.preventDefault();
        navigate(`/product/${id}`)
        setMenuState(false)
    }
    
    return (
        <motion.li ref={list}>
        <Link to={"#"} onClick={e => redirectPage(e)}>
            <div className="wrapper">
                <div className={`line left flex-${leftLineFlex}`}>
                    <motion.div variants={maskAnimation} transition={{...transition, duration: 1}} className="mask"></motion.div>
                </div>
                <motion.div onHoverStart={() => setHoverState(true)} onHoverEnd={() => setHoverState(false)} onMouseEnter={() => setCursorHovered(true)} onMouseLeave={() => setCursorHovered(false)} className="title">
                    <h2>
                        <motion.div variants={titleSlideUp} transition={transition} className="text">{title}</motion.div>
                    </h2>
                </motion.div>
                <div className="thumbnail" style={{left: thumbnailPosition}}>
                    <Image src={src} />
                    <motion.div variants={maskAnimation} transition={{...transition, duration: 1}} className="mask"></motion.div>
                </div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: hoverState ? 1: 0,
                        x: x - listPosition.left + offset,
                        y: y - listPosition.top
                    }}
                    transition={{ease: "linear"}}
                    className="floating-image"
                    >
                    <Image src={src} />
                </motion.div>
                <div className={`line right flex-${rightLineFlex}`}>
                    <motion.div variants={maskAnimation} transition={{...transition, duration: 1}} className="mask right"></motion.div>
                </div>
            </div>
        </Link>
    </motion.li>
    )
}

const Panels = () => {
    const [panelComplete, setPanelComplete] = useState(false)
    return (
        <>
            <motion.div 
                style={{background: panelComplete ? "#e7e7de": "#e7dee7"}}
                initial={{height: 0}} 
                animate={{height: [0, window.innerHeight, 0], bottom: [null, 0, 0]}} 
                exit={{height: [0, window.innerHeight, 0], top: [null, 0, 0]}} 
                transition={{...transition, duration: 2, times: [0, 0.5, 1]}} 
                className="left-panel-background"></motion.div>

            <motion.div 
                style={{background: panelComplete ? "#e7e7de": "#e7dee7"}}
                initial={{height: 0}} 
                animate={{height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight]}} 
                exit={{height: [0, window.innerHeight, 0], bottom: [null, 0, 0]}} 
                transition={{...transition, duration: 2, times: [0, 0.5, 1]}} 
                onAnimationComplete={() => {
                    setPanelComplete(!panelComplete)
                }}
                className="right-panel-background"></motion.div>
        </>
    )
}

export default Menu
