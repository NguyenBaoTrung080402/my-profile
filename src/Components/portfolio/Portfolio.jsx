import { useRef } from "react"
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/358679431_1650829995420890_2641625472700883408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=VgQL1QuSiPwAX_cEKjQ&_nc_oc=AQluiKOAy8O3nfR4Z5CvbhqMKLswTRH7sa9DJpUPmaFtNg6oZANG3xjvgi9nB7zuVz2adUudmU8NFRQ5ftVdhvhH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDpB_ychEIGj9LWJFuK6KRjgnAVb6QjZT62Ltiq4ko3Fg&oe=656F0AEE",
        desc: "Trong đoạn code trên, toggleDropdown sẽ mở hoặc đóng dropdown tùy thuộc vào trạng thái hiện tại. activeDropdown được sử dụng để theo dõi dropdown nào đang được mở, để chỉ hiển thị dropdown tương ứng với menu được click"
    },
    {
        id: 2,
        title: "Vue manager",
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/358679431_1650829995420890_2641625472700883408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=VgQL1QuSiPwAX_cEKjQ&_nc_oc=AQluiKOAy8O3nfR4Z5CvbhqMKLswTRH7sa9DJpUPmaFtNg6oZANG3xjvgi9nB7zuVz2adUudmU8NFRQ5ftVdhvhH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDpB_ychEIGj9LWJFuK6KRjgnAVb6QjZT62Ltiq4ko3Fg&oe=656F0AEE",
        desc: "Trong đoạn code trên, toggleDropdown sẽ mở hoặc đóng dropdown tùy thuộc vào trạng thái hiện tại. activeDropdown được sử dụng để theo dõi dropdown nào đang được mở, để chỉ hiển thị dropdown tương ứng với menu được click"
    },
    {
        id: 3,
        title: "Shop Shoes",
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/358679431_1650829995420890_2641625472700883408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=VgQL1QuSiPwAX_cEKjQ&_nc_oc=AQluiKOAy8O3nfR4Z5CvbhqMKLswTRH7sa9DJpUPmaFtNg6oZANG3xjvgi9nB7zuVz2adUudmU8NFRQ5ftVdhvhH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDpB_ychEIGj9LWJFuK6KRjgnAVb6QjZT62Ltiq4ko3Fg&oe=656F0AEE",
        desc: "Trong đoạn code trên, toggleDropdown sẽ mở hoặc đóng dropdown tùy thuộc vào trạng thái hiện tại. activeDropdown được sử dụng để theo dõi dropdown nào đang được mở, để chỉ hiển thị dropdown tương ứng với menu được click"
    },
    {
        id: 4,
        title: "Economics ",
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/358679431_1650829995420890_2641625472700883408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=VgQL1QuSiPwAX_cEKjQ&_nc_oc=AQluiKOAy8O3nfR4Z5CvbhqMKLswTRH7sa9DJpUPmaFtNg6oZANG3xjvgi9nB7zuVz2adUudmU8NFRQ5ftVdhvhH&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDpB_ychEIGj9LWJFuK6KRjgnAVb6QjZT62Ltiq4ko3Fg&oe=656F0AEE",
        desc: "Trong đoạn code trên, toggleDropdown sẽ mở hoặc đóng dropdown tùy thuộc vào trạng thái hiện tại. activeDropdown được sử dụng để theo dõi dropdown nào đang được mở, để chỉ hiển thị dropdown tương ứng với menu được click"
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

    return (
        <motion.section  variants={variants} animate="animate">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>
                            {item.desc}
                        </p>
                        <button>See Demo</button>
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