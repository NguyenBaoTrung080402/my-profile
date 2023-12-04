import "./About.scss"
import { motion } from "framer-motion"

const variants = {
    initial:{
      x: 700,
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

const About = () => {
    return (
        <div className="about">
            <motion.div className="container">
            <h1>
                About Me
                <div className="boder1">
                    <div className="boder"></div>
                </div>
                
            </h1>
            
                <motion.div className="wrapper">
                    <motion.div className="imgContainer">
                        <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/312931184_1470336330136925_2008193821979179736_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=PfqTIsQ8R2MAX_Ya_06&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAC7GEmlBvV3eTI8frSLgNJePWzJvaE2nbnTpBdB1U3qw&oe=6571DD17" alt="It-me" />
                    </motion.div>

                    <motion.div className="textContainer" 
                        variants={variants} 
                        initial="initial" 
                        whileInView="animate"
                    >
                        <p>
                            Chào mọi người, tôi là Nguyễn Bảo Trung, sinh năm 2002. Hiện tại, tôi là sinh viên năm cuối của trường Đại học FPT, chuyên ngành Công nghệ thông tin. <br/> <br/> 

                            Tôi có niềm đam mê đặc biệt với lĩnh vực IT, đặc biệt là lập trình. Tôi luôn mong muốn được học hỏi và phát triển bản thân để trở thành một lập trình viên giỏi, có thể tạo ra những sản phẩm hữu ích cho xã hội. <br/> <br/>

                            Ngoài học tập, tôi còn có sở thích chơi đàn guitar, các loại hình thể thao và một số hoạt động ngoài trời. Tôi tin rằng những sở thích này giúp tôi rèn luyện sức khỏe, tinh thần và phát triển bản thân toàn diện.<br/> <br/>

                            Mục tiêu xa của tôi là trở thành một dev full stack, có thể làm việc hiệu quả trong cả front-end và back-end. Tôi muốn có thể tạo ra được những sản phẩm công nghệ giúp ích cho cuộc sống sau này.<br/> <br/>

                            Mục tiêu ngắn hạn của tôi là muốn phát triển bản thân một cách nhanh chóng và hiệu quả. Tôi muốn đem hết những gì bản thân học được cống hiến cho công ty và đóng góp cho sự phát triển của ngành công nghệ thông tin nước nhà.<br/> <br/>

                            Tôi tin rằng với sự nỗ lực và cố gắng của bản thân, tôi sẽ đạt được những mục tiêu đã đề ra. Tôi rất mong được gặp gỡ và làm việc với mọi người trong tương lai.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;
