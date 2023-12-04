import { useRef } from "react"
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Sapphire Sands",
        date: "8-May-2023 -- 12-July-2023",
        img: "/SAPPHIRE SANDS RESORT.png",
        desc: "Đây là một dự án đầu tay về xử dụng về react.js, java spring boot, mySQL. Với sự tham gia của 5 thành viên để phát triển, dự án này mang đến cho người dùng, trải nghiệm 1 hệ thống đặt phòng dành riêng cho khách sạn với các dịch vụ đi kèm."
    },
    {
        id: 2,
        title: "JOT",
        date: "8-Jully-2023 -- 29-Sep-2023",
        img: "/Jot.png",
        desc: "JOT(Job Opportunity) là dự án, làm về 1 trang web về tìm việc làm sử dụng Java Spring Boot, vue.js , mySQL để phát triển, với sự tham gia phát triển gồm 5 thành viên. Hệ thống tìm việc giúp đơn giản hóa quá trình đăng ký và theo dõi tiến trình tìm việc, cung cấp thông tin chi tiết về các công ty và vị trí tuyển dụng."
    },
    {
        id: 3,
        title: "Manager School",
        date: "10-Oct-2023 -- 26-Nov-2023",
        img: "/manager-bg.png",
        desc: "Manager School là 1 dự án phát triển hệ thống quản lý 1 trường học, sử dụng Java Spring Boot, Vue.js, MySQL, IoT để phát triển, với sự tham gia phát triển gồm 3 thành viên. Dự án quản lý trường học là một hệ thống toàn diện được thiết kế để cải thiện hiệu suất và quản lý các hoạt động trong môi trường giáo dục."
    },
    {
        id: 4,
        title: "Cosmetics",
        date: "20-Oct-2023 -- 1-Jan-2024",
        img: "/cosmetics-logo.png",
        desc: "Cosmetics là 1 dự án đang được phát triển bởi đội ngũ, được sử dụng React.js, MySQL, Java Spring Boot và AI, dự án tham gia gồm 5 thành viên. Cosmetics hứa hẹn sẽ là 1 sàn thương mại giúp nhiều nhà cung cấp sản phẩm có thể trao đổi mua bán 1 cách chính thống. "
    }
]

const variants = {
    animate:{
      x: 0,
      opacity: 1,
      y: 0,
      transition:{
        duration: 1,
        staggerChildren: 1
      }
    }
  }

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    // const hanđleClick = () =>{
    //     window.location.href = `#${Links}`;
    // }
    return (
        <motion.section  variants={variants} animate="animate">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.date}</p>
                        <p>
                            {item.desc}
                        </p>
                        {/* <motion.button onClick={hanđleClick} whileHover={{background: "lightgray", color: "black"}}>Liên Hệ Với Tôi</motion.button> */}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Products</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};


export default Portfolio