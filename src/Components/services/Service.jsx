import { animate, motion, useInView } from "framer-motion"
import "./Service.scss"
import { useRef } from "react"

const variants = {
  initial:{
    x: -500,
    opacity: 0,
    y: 100
  },
  animate:{
    x: 0,
    opacity: 1,
    y: 0,
    transition:{
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

const Service = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div className="services" 
    variants={variants} 
    initial="initial" 
    ref={ref}
    whileInView="animate"
    // animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
          <p>
              I focus on helping your brand grow 
              <br/> and move forward
          </p>
          <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
              <img src="/people.webp" alt="teams" />
              <h1>
                <motion.b whileHover={{color:"orange", cursor:"pointer"}}>Unique</motion.b> Ideas
              </h1>
          </div>
          <div className="title">
              <h1>
                <motion.b whileHover={{color:"orange", cursor:"pointer"}}>For Your</motion.b> Business.
              </h1>
              <motion.button whileHover={{background: "lightgray", color: "black"}}>WHAT WE DO?</motion.button>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
          <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
              <h2>Branding</h2>
              <p>
                Hogwarts Legacy là một game nhập vai hành động thế giới mở lấy bối cảnh thế giới lần đầu tiên được giới thiệu trong sách Harry Potter. Bắt đầu cuộc hành 
              </p>
              <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
              <h2>Branding</h2>
              <p>
                Hogwarts Legacy là một game nhập vai hành động thế giới mở lấy bối cảnh thế giới lần đầu tiên được giới thiệu trong sách Harry Potter. Bắt đầu cuộc hành 
              </p>
              <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
              <h2>Branding</h2>
              <p>
                Hogwarts Legacy là một game nhập vai hành động thế giới mở lấy bối cảnh thế giới lần đầu tiên được giới thiệu trong sách Harry Potter. Bắt đầu cuộc hành 
              </p>
              <button>Go</button>
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
              <h2>Branding</h2>
              <p>
                Hogwarts Legacy là một game nhập vai hành động thế giới mở lấy bối cảnh thế giới lần đầu tiên được giới thiệu trong sách Harry Potter. Bắt đầu cuộc hành 
              </p>
              <button>Go</button>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Service