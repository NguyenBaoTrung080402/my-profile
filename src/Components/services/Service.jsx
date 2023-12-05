import { animate, motion, useInView } from "framer-motion"
import "./Service.scss"
import { useRef } from "react"

const variants = {
  initial:{
    y: 200,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    y: 0,
    transition:{
      duration: 1.3,
      staggerChildren: 1,
    }
  }
}

const Service = () => {

  // const ref = useRef()
  // const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div className="services" >
        <motion.div className="textContainer" 
        variants={variants}
        >
          <p>
              I focus on helping your brand grow 
              <br/> and move forward
          </p>
          <hr/>
        </motion.div>
        <motion.div className="titleContainer" 
        variants={variants}
        >
          <div className="title">
              <img src="/people.webp" alt="teams" />
              <h1>
                <motion.b whileHover={{color:"orange", cursor:"pointer"}}>Passion</motion.b> For Dream
              </h1>
          </div>
          <div className="title">
              <h1>
                <motion.b whileHover={{color:"orange", cursor:"pointer"}}>Never</motion.b> Give Up.
              </h1>
              <motion.button whileHover={{background: "lightgray", color: "black"}}>WHAT I HAVE?</motion.button>
          </div>
        </motion.div>
        <motion.div className="listContainer" 
        variants={variants}
        initial="initial" 
        whileInView="animate"
        >
          <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
              <h2>Kiến Thức</h2>
              <p>
                Tôi có kiến nền về HTML, CSS, Javascript, Java Spring Boot, React.js, Vue.js, MySQL, GitHub, và Figma, có thể xử lý các thư viện hỗ trợ design layout như Bootstrap, Animate.css, Framer-motion
              </p>              
          </motion.div>
          <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
              <h2>Kinh Nghiệm</h2>
              <p>
                Tôi có 1 năm kinh nghiệm xử lý nghiệp vụ fullstack với Java Spring Boot, React.js, Vue.js, MySQL bên cạnh đó tôi có kinh nghiệm làm việc với GitHub có thể tự xử lý confict. Bên cạnh đó tôi còn có kinh nghiệm làm việc với google apps script,
              </p>  
          </motion.div>
          <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
              <h2>Kĩ Năng</h2>
              <p>
                Tôi có kĩ năng xử lý vấn đề, làm việc nhóm và độc lập tốt, có thể tự tuy duy vấn đề, có kinh nghiệm trong quản lý nhóm, bên cạnh đó tôi có khả năng hoà nhập và thích nghi với môi trường ở mức tốt.
              </p>  
          </motion.div>
          {/* <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
              <h2>Dự Án</h2>
              <p>
                Hogwarts Legacy là một game nhập vai hành động thế giới mở lấy bối cảnh thế giới lần đầu tiên được giới thiệu trong sách Harry Potter. Bắt đầu cuộc hành 
              </p>
          </motion.div> */}
        </motion.div>
    </motion.div>
  )
}

export default Service